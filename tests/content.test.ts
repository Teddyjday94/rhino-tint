import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { BUSINESS } from '@/data/business';
import { REELS } from '@/data/reels';

const root = path.resolve(__dirname, '..');

function walk(dir: string, exts: string[]): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) return walk(p, exts);
    return exts.some((e) => p.endsWith(e)) ? [p] : [];
  });
}

describe('business data', () => {
  it('has the right phone link', () => {
    expect(BUSINESS.phoneHref).toBe('tel:+12252107353');
  });
});

describe('reels', () => {
  it('has all six supplied reels', () => {
    expect(REELS).toHaveLength(6);
    REELS.forEach((r) => expect(r.url).toMatch(/^https:\/\/www\.facebook\.com\/reel\/\d+\/$/));
  });
});

describe('media', () => {
  const mediaSrc = fs.readFileSync(path.join(root, 'data/media.ts'), 'utf8');
  const imports = [...mediaSrc.matchAll(/from '@\/(public\/images\/[^']+)'/g)].map((m) => m[1]);

  it('every imported image exists', () => {
    expect(imports.length).toBeGreaterThan(30);
    imports.forEach((p) => expect(fs.existsSync(path.join(root, p)), p).toBe(true));
  });

  it('every image has alt text', () => {
    const alts = [...mediaSrc.matchAll(/m\(\w+, '[\w-]+', '[^']*', '([^']*)'\)/g)].map((m) => m[1]);
    expect(alts.length).toBe(imports.length);
    alts.forEach((a) => expect(a.trim().length).toBeGreaterThan(5));
  });
});

describe('copy rules', () => {
  const files = [...walk(path.join(root, 'app'), ['.tsx', '.ts']), ...walk(path.join(root, 'components'), ['.tsx']), ...walk(path.join(root, 'data'), ['.ts'])];

  it('has no em dashes', () => {
    files.forEach((f) => expect(fs.readFileSync(f, 'utf8').includes('—'), f).toBe(false));
  });

  it('has no encoding damage', () => {
    files.forEach((f) => expect(/â€|Ã[\u0080-¿]/.test(fs.readFileSync(f, 'utf8')), f).toBe(false));
  });

  it('has no placeholder or filler phrases', () => {
    const banned = /lorem ipsum|TODO|where quality meets|game.?changer|cutting-edge|elevate your|look no further/i;
    files.forEach((f) => expect(banned.test(fs.readFileSync(f, 'utf8')), f).toBe(false));
  });
});
