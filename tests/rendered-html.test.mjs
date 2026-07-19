import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Ava Frohna — Technical Lead/);
  assert.match(html, /Master of Computer Science majoring in Cybersecurity/);
  assert.match(html, /Technical Lead &amp; Co-Founder, NORA/);
  assert.match(html, /ISO 14971/);
  assert.match(html, /Details withheld pending publication/);
  assert.match(html, /Apr 2026 — Present/);
  assert.match(html, /AVA FROHNA/);
  assert.match(html, /learn unfamiliar domains quickly/);
  assert.match(html, /Building reproducible research pipelines/);
  assert.match(html, /human review/);
  assert.match(html, /Open to internship and part-time opportunities/);
});

test("keeps unpublished research details out of the public page", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(
    html,
    /192,?494|1,000-CVE|214-CVE|NVD\/CVE|OSV\/GHSA|evidence-gap|working paper|PoCs|CVE-centered evaluation pipelines|AI security evaluation/i,
  );
});
