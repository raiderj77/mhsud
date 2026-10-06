import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import test from 'node:test';

const require = createRequire(import.meta.url);
const consumerRequire = name => createRequire(require.resolve(`${name}/package.json`));

for (const consumer of ['tailwindcss', 'postcss-nested']) {
  const fromConsumer = consumerRequire(consumer);

  test(`${consumer}: flat selector parsing completes within a bounded child process`, () => {
    // GHSA-rj75-hqrm-r3gf: a shallow selector must not trigger quadratic work.
    const parserPath = fromConsumer.resolve('postcss-selector-parser');
    const result = spawnSync(process.execPath, ['-e', `
      const assert = require('node:assert/strict');
      const parser = require(${JSON.stringify(parserPath)});
      const selector = '.a'.repeat(200000);
      const tree = parser().astSync(selector);
      assert.equal(tree.first.nodes.length, 200000);
      assert.equal(tree.toString(), selector);
    `], { timeout: 10000, encoding: 'utf8', maxBuffer: 4096 });
    assert.equal(result.error, undefined, result.error?.message);
    assert.equal(result.status, 0, result.stderr);
  });
}

test('Tailwind and nested PostCSS retain generated print, focus, arbitrary and nested selectors', async () => {
  const postcss = require('postcss');
  const tailwind = require('tailwindcss');
  const nested = require('postcss-nested');
  const compiled = await postcss([tailwind({
    content: [{ raw: '<div class="print:block print:[&_h2]:break-after-avoid focus-visible:ring-2 md:grid-cols-2 w-[37px]"></div>' }],
    corePlugins: { preflight: false },
  })]).process('@tailwind utilities;', { from: undefined });
  const rules = [];
  compiled.root.walkRules(rule => rules.push(rule));
  assert.ok(rules.some(rule => rule.selector.includes('print\\:block') && rule.parent.name === 'media' && rule.parent.params === 'print'));
  assert.ok(rules.some(rule => rule.selector.endsWith(' h2') && rule.nodes.some(node => node.prop === 'break-after' && node.value === 'avoid')));
  assert.ok(rules.some(rule => rule.selector.includes(':focus-visible')));
  assert.ok(rules.some(rule => rule.nodes.some(node => node.prop === 'width' && node.value === '37px')));
  assert.ok(rules.some(rule => rule.nodes.some(node => node.prop === 'grid-template-columns' && node.value === 'repeat(2, minmax(0, 1fr))')));
  const expanded = await postcss([nested]).process('.card { &:is(:hover, :focus-visible) > [data-state="open"] { color: red } @media print { & h2 { break-after: avoid } } }', { from: undefined });
  assert.ok(expanded.css.includes('.card:is(:hover, :focus-visible) > [data-state="open"]'));
  assert.ok(expanded.css.includes('@media print'));
  assert.ok(expanded.css.includes('.card h2'));
});

for (const consumer of ['postcss', 'next/node_modules/postcss']) {
  const { SourceMapConsumer, SourceMapGenerator } = consumerRequire(consumer)('source-map-js');
  const leaf = { version: 3, sources: ['fictional.css'], names: [], mappings: 'AAAA' };
  const indexed = (line, column = 0, map = leaf) => ({ version: 3, sections: [{ offset: { line, column }, map }] });

  test(`${consumer}: invalid and excessive indexed source-map offsets reject before expansion`, () => {
    // GHSA-68fv-2mgg-jv7q: reject at construction, never expand malicious maps.
    for (const line of [10000001, 1e12, Infinity, NaN, -1, 0.5, '1']) {
      assert.throws(() => new SourceMapConsumer(indexed(line)), /Section offset/);
    }
    for (const column of [Infinity, NaN, -1, 0.5, '1']) {
      assert.throws(() => new SourceMapConsumer(indexed(0, column)), /Section offset/);
    }
    assert.throws(() => new SourceMapConsumer(indexed(6000000, 0, indexed(6000000))), /nested sections/);
  });

  test(`${consumer}: ordinary indexed source maps preserve mapping round trips`, () => {
    const original = new SourceMapConsumer(indexed(2));
    assert.deepEqual(original.originalPositionFor({ line: 3, column: 1 }), {
      source: 'fictional.css', line: 1, column: 0, name: null,
    });
    const generator = new SourceMapGenerator({ file: 'fictional-output.css' });
    original.eachMapping(mapping => generator.addMapping({
      generated: { line: mapping.generatedLine, column: mapping.generatedColumn },
      original: { line: mapping.originalLine, column: mapping.originalColumn },
      source: mapping.source,
    }));
    const flattened = new SourceMapConsumer(generator.toJSON());
    assert.deepEqual(flattened.originalPositionFor({ line: 3, column: 1 }), {
      source: 'fictional.css', line: 1, column: 0, name: null,
    });
  });
}

test('Next image processing loads patched librsvg and preserves synthetic SVG to PNG output', async () => {
  const sharp = consumerRequire('next')('sharp');
  // GHSA-wq5f-xc86-pv6w is in the loaded native librsvg dependency.
  const rsvg = sharp.versions.rsvg.split('.').map(Number);
  assert.ok(rsvg[0] > 2 || (rsvg[0] === 2 && (rsvg[1] > 63 || (rsvg[1] === 63 && rsvg[2] >= 2))));
  const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="#ff0000"/></svg>');
  const png = await sharp(svg).resize(2, 2).png().toBuffer();
  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  assert.equal(info.width, 2);
  assert.equal(info.height, 2);
  assert.deepEqual([...data], Array.from({ length: 4 }, () => [255, 0, 0, 255]).flat());
});
