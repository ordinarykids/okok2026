/**
 * Parses content/cv.md into the CVData shape.
 *
 * Format (see content/cv.md for a live example):
 *
 *   # Jason Herring
 *   Title: Design Technologist / Principal
 *
 *   ## Profile
 *   A paragraph. Blank lines separate paragraphs.
 *
 *   ## Skills            (also: Clients, Awards)
 *   - An item
 *
 *   ## Experience
 *   ### Company Name
 *   Role: The role
 *   Dates: APR 2024 — PRESENT
 *   A description paragraph.
 *   - A bullet
 *
 *   ## Education
 *   ### Institution
 *   Degree: Field
 *   Note: Optional note
 *
 *   ## References
 *   ### Person Name
 *   Title: Their title
 */

const FIELD_RE = /^(Title|Role|Dates|Degree|Note|Email):\s*(.*)$/;

export function parseCv(md) {
  const lines = String(md).replace(/\r\n/g, "\n").split("\n");

  const cv = {
    name: "",
    title: "",
    bio: [],
    skills: [],
    clients: [],
    experience: [],
    education: [],
    awards: [],
    references: [],
  };

  let section = null;
  let entry = null;
  let paraBuf = [];
  let descBuf = [];

  const flushPara = () => {
    if (paraBuf.length) {
      cv.bio.push(paraBuf.join(" ").trim());
      paraBuf = [];
    }
  };

  const flushDesc = () => {
    if (entry && descBuf.length) {
      entry.description = descBuf.join(" ").trim();
      descBuf = [];
    }
  };

  const flushEntry = () => {
    flushDesc();
    if (!entry) return;
    if (section === "experience") cv.experience.push(entry);
    else if (section === "education") cv.education.push(entry);
    else if (section === "references") cv.references.push(entry);
    entry = null;
  };

  for (const raw of lines) {
    const line = raw.trim();

    // Section heading
    if (line.startsWith("## ")) {
      flushPara();
      flushEntry();
      section = line.slice(3).trim().toLowerCase();
      continue;
    }

    // Entry heading
    if (line.startsWith("### ")) {
      flushEntry();
      const heading = line.slice(4).trim();
      if (section === "experience") {
        entry = { company: heading, role: "", period: "", description: "", bullets: [] };
      } else if (section === "education") {
        entry = { institution: heading, degree: "" };
      } else if (section === "references") {
        entry = { name: heading, title: "", email: "" };
      }
      continue;
    }

    // Document title (name)
    if (line.startsWith("# ")) {
      cv.name = line.slice(2).trim();
      continue;
    }

    if (!line) {
      if (section === "profile") flushPara();
      continue;
    }

    // Key: value fields
    const field = line.match(FIELD_RE);
    if (field) {
      const key = field[1];
      const value = field[2].trim();
      if (!entry) {
        if (key === "Title") cv.title = value;
      } else if (key === "Role") entry.role = value;
      else if (key === "Dates") entry.period = value;
      else if (key === "Degree") entry.degree = value;
      else if (key === "Note") entry.note = value;
      else if (key === "Title") entry.title = value;
      else if (key === "Email") entry.email = value;
      continue;
    }

    // List items
    if (line.startsWith("- ")) {
      const item = line.slice(2).trim();
      if (section === "skills") cv.skills.push(item);
      else if (section === "clients") cv.clients.push(item);
      else if (section === "awards") cv.awards.push(item);
      else if (section === "experience" && entry) {
        flushDesc();
        entry.bullets.push(item);
      }
      continue;
    }

    // Plain prose
    if (section === "profile") paraBuf.push(line);
    else if (section === "experience" && entry) descBuf.push(line);
  }

  flushPara();
  flushEntry();

  return cv;
}
