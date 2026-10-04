import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const require = createRequire(import.meta.url);
const lock = JSON.parse(readFileSync(new URL('../package-lock.json', import.meta.url)));
const reviewedIntegrity = 'sha512-QY+Uq4s42STyIMPoRkBuUZfYyvz0uZuwuUburLwMx5N+lWqnHHaBxcKPtgKVKjTyFnS1q4ivKu9Wxi4VG7FE9Q==';
const depthError = error => /exceeds max depth/.test(error.message) && !/call stack/.test(error.message);

test('every braces installation is the exact reviewed depth-guard artifact', () => {
  const installations = Object.entries(lock.packages).filter(([path]) => path.endsWith('/braces'));
  assert.equal(installations.length, 2);
  for (const [, entry] of installations) {
    assert.equal(entry.name, '@dieub/braces-depth-guard');
    assert.equal(entry.version, '3.0.3-pn.3');
    assert.equal(entry.integrity, reviewedIntegrity);
  }
});

for (const consumer of ['chokidar', 'micromatch']) {
  const consumerRequire = createRequire(require.resolve(`${consumer}/package.json`));
  const braces = consumerRequire('braces');

  test(`${consumer}: ordinary file globs and nested ranges retain expected output`, () => {
    assert.deepEqual(braces.expand('./src/**/*.{js,ts,jsx,tsx,mdx}'), [
      './src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx', './src/**/*.mdx',
    ]);
    assert.equal(braces.compile('a/{b,c}/d'), 'a/(b|c)/d');
    assert.deepEqual(braces.expand('{a,b{1..2}}'), ['a', 'b1', 'b2']);
    assert.deepEqual(braces.expand('{01..03}'), ['01', '02', '03']);
    assert.equal(braces.stringify(braces.parse('src/{app,components}/**/*.tsx')), 'src/{app,components}/**/*.tsx');
  });

  test(`${consumer}: deeply nested strings reject before stack exhaustion`, () => {
    for (const [open, close] of [['{', '}'], ['(', ')'], ['{(', ')}']]) {
      const pattern = open.repeat(2000) + 'x' + close.repeat(2000);
      for (const method of ['parse', 'compile', 'expand', 'stringify']) {
        assert.throws(() => braces[method](pattern), depthError);
      }
    }
    assert.doesNotThrow(() => braces.compile('{'.repeat(100) + 'x' + '}'.repeat(100)));
    assert.throws(() => braces.compile('{'.repeat(101) + 'x' + '}'.repeat(101)), depthError);
  });

  test(`${consumer}: direct AST traversal and option values cannot bypass the bound`, () => {
    let ast = { type: 'text', value: 'x' };
    for (let i = 0; i < 1000; i++) ast = { type: 'brace', open: true, close: true, commas: 1, nodes: [ast] };
    for (const method of ['compile', 'expand', 'stringify']) {
      assert.throws(() => braces[method]({ type: 'root', nodes: [ast] }), depthError);
    }
    const pattern = '{'.repeat(101) + 'x' + '}'.repeat(101);
    for (const maxDepth of [Infinity, NaN, 10000, '10000', false]) {
      assert.throws(() => braces.compile(pattern, { maxDepth }), depthError);
    }
    assert.throws(() => braces.parse('{{x}}', { maxDepth: 1.5 }), depthError);
    assert.throws(() => braces.parse('x'.repeat(10001), { maxLength: NaN }), /maxLength/);
  });
}
