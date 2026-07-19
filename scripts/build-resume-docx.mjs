/**
 * content/resume.md  ->  cv/jason-herring-resume.docx
 *
 * The ATS-friendly Word version (single column, standard headings) for
 * application portals. Run `npm run resume:docx`.
 */
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  LevelFormat,
  TabStopType,
  BorderStyle,
} from "docx";
import { parseCv } from "./cv-parse.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cv = parseCv(readFileSync(join(root, "content", "resume.md"), "utf8"));

const INK = "1A1A1A";
const MUTED = "555555";
const CONTENT_W = 10080; // 8.5in - 2*0.75in margins, in DXA
const RIGHT_TAB = { type: TabStopType.RIGHT, position: CONTENT_W };
const CONTACT =
  "San Francisco, CA   ·   jason@ordinarykids.com   ·   otherstori.es   ·   linkedin.com/in/ok-jason-herring";

const sectionHeading = (text) =>
  new Paragraph({
    spacing: { before: 260, after: 120 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "BBBBBB", space: 2 },
    },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: 19,
        color: INK,
        characterSpacing: 30,
      }),
    ],
  });

const jobHeader = (left, date) =>
  new Paragraph({
    spacing: { before: 150, after: 0 },
    tabStops: [RIGHT_TAB],
    children: [
      new TextRun({ text: left, bold: true, size: 21, color: INK }),
      new TextRun({ text: "\t" + date, size: 18, color: MUTED }),
    ],
  });

const context = (text) =>
  new Paragraph({
    spacing: { before: 20, after: 60 },
    children: [new TextRun({ text, italics: true, size: 19, color: MUTED })],
  });

const bullet = (text) =>
  new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 40 },
    children: [new TextRun({ text, size: 20, color: INK })],
  });

const body = [
  new Paragraph({
    spacing: { after: 20 },
    children: [new TextRun({ text: cv.name, bold: true, size: 40, color: INK })],
  }),
  new Paragraph({
    spacing: { after: 60 },
    children: [
      new TextRun({ text: cv.title, size: 22, color: INK, characterSpacing: 10 }),
    ],
  }),
  new Paragraph({
    spacing: { after: 40 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 10, color: INK, space: 6 },
    },
    children: [new TextRun({ text: CONTACT, size: 18, color: MUTED })],
  }),

  sectionHeading("Summary"),
  ...cv.bio.map(
    (p) =>
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: p, size: 20, color: INK })],
      }),
  ),

  sectionHeading("Core Skills"),
  new Paragraph({
    spacing: { after: 40 },
    children: [
      new TextRun({ text: cv.skills.join("  ·  "), size: 20, color: INK }),
    ],
  }),

  sectionHeading("Experience"),
  ...cv.experience.flatMap((e) => [
    jobHeader(`${e.company} — ${e.role}`, e.period),
    context(e.description),
    ...e.bullets.map(bullet),
  ]),

  sectionHeading("Education"),
  ...cv.education.map(
    (ed) =>
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: ed.institution, bold: true, size: 20, color: INK }),
          new TextRun({ text: ` — ${ed.degree}`, size: 20, color: INK }),
        ],
      }),
  ),

  sectionHeading("Awards & Recognition"),
  new Paragraph({
    children: [
      new TextRun({ text: cv.awards.join("  ·  "), size: 20, color: INK }),
    ],
  }),
];

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: {
              run: { color: MUTED },
              paragraph: { indent: { left: 300, hanging: 200 } },
            },
          },
        ],
      },
    ],
  },
  styles: { default: { document: { run: { font: "Arial", size: 20, color: INK } } } },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1000, right: 1080, bottom: 1000, left: 1080 },
        },
      },
      children: body,
    },
  ],
});

mkdirSync(join(root, "cv"), { recursive: true });
const out = join(root, "cv", "jason-herring-resume.docx");
const buf = await Packer.toBuffer(doc);
writeFileSync(out, buf);
console.log(`✓ ${out} (${cv.experience.length} roles, ${cv.skills.length} skills)`);
