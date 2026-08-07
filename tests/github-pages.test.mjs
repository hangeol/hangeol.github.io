import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../_github-pages/", import.meta.url);

test("GitHub Pages export contains the portfolio and canonical metadata", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<title>Hangeol Chang \(장한결\) · KAIST AI Researcher<\/title>/);
  assert.match(html, /https:\/\/hangeol\.github\.io/);
  assert.match(html, /<link rel="canonical" href="https:\/\/hangeol\.github\.io"/);
  assert.match(html, /<meta name="robots" content="index, follow"/);
  assert.match(html, /<p class="name-korean" lang="ko">장한결<\/p>/);
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /"alternateName":\["장한결","Hangeol"\]/);
  assert.match(html, /"alternateName":"KAIST"/);
  assert.match(html, /Universal Reasoner/);
  assert.match(html, /Hypothesis-Conditioned Query Rewriting/);
  assert.match(html, /Dementia-R1/);
  assert.match(html, /Ground-A-Score/);
  assert.match(html, /<strong class="author-self">Hangeol Chang<\/strong>/);
  assert.match(html, /href="\/hangeol-chang-cv\.pdf"/);
  assert.match(html, /src="\/hangeol-chang\.jpeg"/);
});

test("GitHub Pages export includes its linked public assets", async () => {
  await Promise.all([
    access(new URL(".nojekyll", outputRoot)),
    access(new URL("hangeol-chang.jpeg", outputRoot)),
    access(new URL("hangeol-chang-cv.pdf", outputRoot)),
    access(new URL("og.png", outputRoot)),
    access(new URL("robots.txt", outputRoot)),
    access(new URL("sitemap.xml", outputRoot)),
  ]);
});
