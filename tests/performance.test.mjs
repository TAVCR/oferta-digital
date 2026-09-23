import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

assert.match(html, /<link rel="stylesheet" href="assets\/tailwind\.min\.css">/,
  'The page must load prebuilt Tailwind CSS.');
assert.doesNotMatch(html, /cdn\.tailwindcss\.com/,
  'The Tailwind browser compiler must not ship to visitors.');
assert.doesNotMatch(html, /warmFromContainer\(document\.getElementById\('gallery'\), slowNetwork \? 5 : 10, 'high'\)/,
  'Below-the-fold galleries must not be eagerly warmed after initial load.');
assert.match(html, /const maxTotalPreload = slowNetwork \? 4 : 6;/,
  'Image warming needs a small, capped budget.');

console.log('Performance delivery checks passed.');
