/**
 * content/cv.md  ->  cv/jason-herring-cv.pdf  (the designed, beige two-column CV)
 *
 * Run `npm run cv:pdf` after editing content/cv.md.
 * Requires Chrome locally (set CHROME_PATH to override the default macOS path).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { parseCv } from "./cv-parse.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cv = parseCv(readFileSync(join(root, "content", "cv.md"), "utf8"));

const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const EMAIL = "jason@ordinarykids.com";
const LINKEDIN = "linkedin.com/in/ok-jason-herring";
const LOCATION = "San Francisco, CA";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const experience = cv.experience
  .map(
    (e) => `
      <article class="entry">
        <div class="entry-head">
          <h3 class="entry-title"><span class="company">${esc(e.company)}</span><span class="sep">·</span><span class="role">${esc(e.role)}</span></h3>
          <span class="period">${esc(e.period)}</span>
        </div>
        <p class="entry-desc">${esc(e.description)}</p>
        ${
          e.bullets.length
            ? `<ul class="bullets">
          ${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("\n          ")}
        </ul>`
            : ""
        }
      </article>`,
  )
  .join("\n");

const education = cv.education
  .map(
    (ed) => `
        <div class="edu">
          <div class="edu-inst">${esc(ed.institution)}</div>
          <div class="edu-degree">${esc(ed.degree)}</div>
          ${ed.note ? `<div class="edu-note">${esc(ed.note)}</div>` : ""}
        </div>`,
  )
  .join("\n");

const skills = cv.skills.map((s) => `<li>${esc(s)}</li>`).join("\n          ");
const clients = cv.clients.map((c) => esc(c)).join(" &nbsp;·&nbsp; ");
const awards = cv.awards.map((a) => `<li>${esc(a)}</li>`).join("\n          ");
const references = cv.references
  .map(
    (r) =>
      `<li><span class="ref-name">${esc(r.name)}</span> — <span class="ref-title">${esc(r.title)}</span></li>`,
  )
  .join("\n          ");
const bio = cv.bio.map((p) => `<p>${esc(p)}</p>`).join("\n      ");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(cv.name)} — CV</title>
<style>
  :root{ --ink:#141414; --soft:#3a3a3a; --muted:#6b6b6b; --rule:#d8d8d4; --paper:#fbfbf9; }
  @page{ size: Letter; margin: 0; }
  *{ box-sizing:border-box; }
  html{ background:var(--paper); -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  body{
    margin:0; background:var(--paper); padding:18mm 20mm;
    -webkit-print-color-adjust:exact; print-color-adjust:exact;
    font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
    color:var(--ink); font-size:10px; line-height:1.5; -webkit-font-smoothing:antialiased;
  }
  header.cv-head{ border-bottom:2px solid var(--ink); padding-bottom:10px; margin-bottom:16px; }
  .name{ font-size:30px; font-weight:800; letter-spacing:-0.02em; line-height:1; margin:0; }
  .title{ font-family:"SF Mono", ui-monospace, Menlo, monospace; font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.12em; color:var(--soft); margin:8px 0 0; }
  .contact{ font-family:"SF Mono", ui-monospace, Menlo, monospace; font-size:9px; letter-spacing:0.04em; color:var(--muted); margin-top:8px; display:flex; gap:14px; flex-wrap:wrap; }

  .label{ font-family:"SF Mono", ui-monospace, Menlo, monospace; font-size:8.5px; font-weight:700; text-transform:uppercase; letter-spacing:0.22em; color:var(--muted); border-bottom:1px solid var(--rule); padding-bottom:5px; margin:0 0 10px; }

  .profile{ margin-bottom:18px; }
  .profile .cols2{ column-count:2; column-gap:28px; }
  .profile p{ margin:0 0 7px; color:var(--soft); break-inside:avoid; }

  .body{ display:flex; gap:30px; align-items:flex-start; }
  .main{ flex:1 1 0%; min-width:0; }
  .side{ flex:0 0 33%; width:33%; }
  .side section{ margin-bottom:16px; break-inside:avoid; }

  .entry{ margin-bottom:13px; page-break-inside:avoid; break-inside:avoid; }
  .entry-head{ display:flex; justify-content:space-between; align-items:baseline; gap:10px; flex-wrap:wrap; }
  .entry-title{ margin:0; font-size:11.5px; font-weight:400; }
  .company{ font-weight:700; } .sep{ color:var(--muted); margin:0 6px; } .role{ color:var(--soft); }
  .period{ font-family:"SF Mono", ui-monospace, Menlo, monospace; font-size:8.5px; letter-spacing:0.06em; color:var(--muted); white-space:nowrap; }
  .entry-desc{ margin:3px 0 5px; color:var(--soft); }
  .bullets{ margin:0; padding-left:14px; } .bullets li{ margin:0 0 2.5px; color:var(--soft); }

  ul.tight{ margin:0; padding-left:14px; } ul.tight li{ margin:0 0 3px; color:var(--soft); }
  .clients{ color:var(--soft); }
  .edu{ margin-bottom:8px; break-inside:avoid; } .edu-inst{ font-weight:700; font-size:10.5px; } .edu-degree{ color:var(--soft); } .edu-note{ color:var(--muted); font-size:9px; margin-top:1px; }
  .refs{ list-style:none; margin:0; padding:0; } .refs li{ margin:0 0 4px; color:var(--soft); } .ref-name{ font-weight:700; color:var(--ink); display:block; } .ref-title{ color:var(--muted); }
</style>
</head>
<body>
  <header class="cv-head">
    <h1 class="name">${esc(cv.name)}</h1>
    <div class="title">${esc(cv.title)}</div>
    <div class="contact">
      <span>${esc(EMAIL)}</span>
      <span>${esc(LINKEDIN)}</span>
      <span>${esc(LOCATION)}</span>
    </div>
  </header>

  <section class="profile">
    <div class="label">Profile</div>
    <div class="cols2">
      ${bio}
    </div>
  </section>

  <div class="body">
    <div class="main">
      <section>
        <div class="label">Experience</div>
        ${experience}
      </section>
    </div>

    <aside class="side">
      <section>
        <div class="label">Skills &amp; Expertise</div>
        <ul class="tight">
          ${skills}
        </ul>
      </section>

      <section>
        <div class="label">Select Clients</div>
        <p class="clients">${clients}</p>
      </section>

      <section>
        <div class="label">Education</div>
        ${education}
      </section>

      <section>
        <div class="label">Awards &amp; Recognition</div>
        <ul class="tight">
          ${awards}
        </ul>
      </section>

      <section>
        <div class="label">References</div>
        <ul class="refs">
          ${references}
        </ul>
      </section>
    </aside>
  </div>
</body>
</html>`;

const tmpHtml = join(tmpdir(), "ok-cv.html");
writeFileSync(tmpHtml, html);

mkdirSync(join(root, "cv"), { recursive: true });
const out = join(root, "cv", "jason-herring-cv.pdf");

execFileSync(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${out}`,
  `file://${tmpHtml}`,
]);

console.log(`✓ ${out}`);
