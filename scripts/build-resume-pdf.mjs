/**
 * content/resume.md  ->  cv/jason-herring-resume.pdf
 *
 * The clean, single-column ATS-friendly resume (for direct sends / email).
 * Run `npm run resume:pdf`. Requires Chrome (CHROME_PATH overrides the default).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { parseCv } from "./cv-parse.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cv = parseCv(readFileSync(join(root, "content", "resume.md"), "utf8"));

const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const CONTACT =
  "San Francisco, CA &nbsp;·&nbsp; jason@ordinarykids.com &nbsp;·&nbsp; otherstori.es &nbsp;·&nbsp; linkedin.com/in/ok-jason-herring";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const experience = cv.experience
  .map(
    (e) => `
  <div class="job"><span class="t">${esc(e.company)} — ${esc(e.role)}</span><span class="d">${esc(e.period)}</span></div>
  <div class="ctx">${esc(e.description)}</div>
  ${
    e.bullets.length
      ? `<ul>
    ${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("\n    ")}
  </ul>`
      : ""
  }`,
  )
  .join("\n");

const education = cv.education
  .map(
    (ed) =>
      `  <p class="edu"><b>${esc(ed.institution)}</b> — ${esc(ed.degree)}</p>`,
  )
  .join("\n");

const awards = cv.awards.map((a) => esc(a)).join(" &nbsp;·&nbsp; ");
const skills = cv.skills.map((s) => esc(s)).join(" &nbsp;·&nbsp; ");
const profile = cv.bio.map((p) => `<p class="lead">${esc(p)}</p>`).join("\n  ");

const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(cv.name)} — Resume</title>
<style>
  @page{ size: Letter; margin: 16mm 16mm; }
  *{ box-sizing:border-box; }
  html,body{ margin:0; padding:0; background:#fff; }
  body{ font-family:"Helvetica Neue", Helvetica, Arial, sans-serif; color:#1a1a1a; font-size:10pt; line-height:1.42; }
  .name{ font-size:23pt; font-weight:800; letter-spacing:-0.01em; margin:0; }
  .role{ font-size:11.5pt; margin:3px 0 0; }
  .contact{ font-size:8.6pt; color:#555; margin:6px 0 8px; border-bottom:2px solid #1a1a1a; padding-bottom:8px; }
  h2{ font-size:9.5pt; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; margin:16px 0 7px; padding-bottom:4px; border-bottom:1px solid #bbb; }
  p{ margin:0 0 5px; }
  .job{ display:flex; justify-content:space-between; align-items:baseline; gap:14px; margin-top:11px; }
  .job .t{ font-weight:700; font-size:10.5pt; }
  .job .d{ color:#555; font-size:9pt; white-space:nowrap; }
  .ctx{ font-style:italic; color:#555; font-size:9.3pt; margin:1px 0 4px; }
  ul{ margin:0 0 2px; padding-left:15px; }
  li{ margin:0 0 3px; }
  .job, li, .edu{ page-break-inside:avoid; }
  /* keep trailing margins from spilling into a blank final page */
  ul:last-child, p:last-child{ margin-bottom:0; }
</style></head>
<body>
  <div class="name">${esc(cv.name)}</div>
  <div class="role">${esc(cv.title)}</div>
  <div class="contact">${CONTACT}</div>

  <h2>Summary</h2>
  ${profile}

  <h2>Core Skills</h2>
  <p>${skills}</p>

  <h2>Experience</h2>
${experience}

  <h2>Education</h2>
${education}

  <h2>Awards &amp; Recognition</h2>
  <p>${awards}</p>
</body></html>`;

const tmpHtml = join(tmpdir(), "ok-resume.html");
writeFileSync(tmpHtml, html);

mkdirSync(join(root, "cv"), { recursive: true });
const out = join(root, "cv", "jason-herring-resume.pdf");

execFileSync(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${out}`,
  `file://${tmpHtml}`,
]);

console.log(`✓ ${out}`);
