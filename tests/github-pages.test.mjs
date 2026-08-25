import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../_github-pages/", import.meta.url);

test("GitHub Pages export contains the portfolio and profile metadata", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<title>Hangeol Chang · AI Researcher<\/title>/);
  assert.match(html, /<meta name="description" content="Research in language model reasoning, decision-useful retrieval, reinforcement learning, and reward-guided model behavior\."/);
  assert.match(html, /https:\/\/hangeol\.github\.io/);
  assert.doesNotMatch(html, /<meta name="keywords"/);
  assert.doesNotMatch(html, /class="name-korean"/);
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /"alternateName":\["장한결","Hangeol"\]/);
  assert.match(html, /"alternateName":"KAIST"/);
  assert.match(html, /Universal Reasoner/);
  assert.match(html, /Apr\. 2026/);
  assert.match(html, /Hypothesis-Conditioned Query Rewriting/);
  assert.match(html, /Dementia-R1/);
  assert.match(html, /Dementia-R1 accepted to EMNLP 2026\./);
  assert.match(html, /EMNLP 2026/);
  assert.match(html, /Ground-A-Score/);
  assert.doesNotMatch(html, /IPIU 2026 · Best Paper/);
  assert.match(html, /Silver Prize · Best Paper Award at IPIU 2026/);
  assert.match(html, /Received the Silver Prize at the 32nd Samsung Humantech Paper Award\./);
  assert.match(html, /Received the Silver Prize in the IPIU 2026 Best Paper Award\./);
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
