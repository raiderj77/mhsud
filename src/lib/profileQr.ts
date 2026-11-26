// QR Code Model 2, version 12-L, byte mode, mask 0. The fixed size fits the
// canonical origin plus the longest allowed profile slug without a dependency.
export function profileQrPath(value: string) {
  const bytes = new TextEncoder().encode(value);
  if (bytes.length > 367) throw new RangeError("Profile URL is too long");
  const dataBits: number[] = [];

  function append(value: number, length: number) {
    for (let bit = length - 1; bit >= 0; bit--) dataBits.push((value >> bit) & 1);
  }

  append(4, 4);
  append(bytes.length, 16);
  for (const byte of bytes) append(byte, 8);
  append(0, 4);
  const data = [];
  for (let i = 0; i < dataBits.length; i += 8) {
    data.push(dataBits.slice(i, i + 8).reduce((byte, bit) => (byte << 1) | bit, 0));
  }
  for (let i = 0; data.length < 370; i++) data.push(i % 2 === 0 ? 0xec : 0x11);

  function multiply(a: number, b: number) {
    let product = 0;
    while (b) {
      if (b & 1) product ^= a;
      a = (a << 1) ^ ((a & 128) ? 0x11d : 0);
      b >>= 1;
    }
    return product;
  }

  let generator = [1];
  for (let root = 1; generator.length <= 24; root = multiply(root, 2)) {
    const next = [1, ...generator.map(coefficient => multiply(coefficient, root))];
    for (let i = 1; i < generator.length; i++) next[i] ^= generator[i];
    generator = next;
  }
  const blocks = [data.slice(0, 92), data.slice(92, 184), data.slice(184, 277), data.slice(277)];
  const correction = blocks.map(block => {
    const remainder = [...block, ...Array<number>(24).fill(0)];
    for (let i = 0; i < block.length; i++) {
      const factor = remainder[i];
      for (let j = 1; j <= 24; j++) remainder[i + j] ^= multiply(generator[j], factor);
    }
    return remainder.slice(block.length);
  });
  const codewords = [];
  for (let i = 0; i < 93; i++) {
    for (const block of blocks) if (i < block.length) codewords.push(block[i]);
  }
  for (let i = 0; i < 24; i++) {
    for (const block of correction) codewords.push(block[i]);
  }

  const size = 65;
  const modules = Array.from({ length: size }, () => Array<number>(size).fill(-1));
  function paint(x: number, y: number, dark: boolean) {
    if (y >= 0 && x >= 0 && y < size && x < size) modules[y][x] = Number(dark);
  }
  for (let i = 0; i < size; i++) {
    paint(i, 6, i % 2 === 0);
    paint(6, i, i % 2 === 0);
  }
  for (const [x, y] of [[3, 3], [61, 3], [3, 61]]) {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const distance = Math.max(Math.abs(dx), Math.abs(dy));
        paint(x + dx, y + dy, distance !== 2 && distance !== 4);
      }
    }
  }
  for (const x of [6, 32, 58]) {
    for (const y of [6, 32, 58]) {
      if ((x === 6 && y !== 32) || (x === 58 && y === 6)) continue;
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          paint(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
        }
      }
    }
  }

  // Published BCH codewords for L/mask 0 and version 12.
  const formatBit = (i: number) => Boolean(0x77c4 & (1 << i));
  for (let i = 0; i <= 5; i++) paint(8, i, formatBit(i));
  paint(8, 7, formatBit(6));
  paint(8, 8, formatBit(7));
  paint(7, 8, formatBit(8));
  for (let i = 9; i < 15; i++) paint(14 - i, 8, formatBit(i));
  for (let i = 0; i < 8; i++) paint(size - 1 - i, 8, formatBit(i));
  for (let i = 8; i < 15; i++) paint(8, size - 15 + i, formatBit(i));
  paint(8, size - 8, true);
  for (let i = 0; i < 18; i++) {
    const x = size - 11 + i % 3;
    const y = Math.floor(i / 3);
    const bit = Boolean(0xc762 & (1 << i));
    paint(x, y, bit);
    paint(y, x, bit);
  }

  let bit = 0;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let i = 0; i < size; i++) {
      const y = ((right + 1) & 2) === 0 ? size - 1 - i : i;
      for (let x = right; x >= right - 1; x--) {
        if (modules[y][x] !== -1) continue;
        const dark = Boolean((codewords[bit >> 3] ?? 0) & (128 >> (bit % 8)));
        paint(x, y, dark !== ((x + y) % 2 === 0));
        bit++;
      }
    }
  }
  return modules.flatMap((row, y) => row.map((dark, x) => dark ? `M${x + 4} ${y + 4}h1v1h-1z` : "")).join("");
}
