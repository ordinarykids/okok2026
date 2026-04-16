import type { NavSection } from "@/types/project";
import { sesameProjects } from "@/data/sesame";

export const sesameNavigation: NavSection[] = [
  {
    label: "SESAME",
    links: [
      { href: "/sesame", title: "Projects" },
      ...sesameProjects.map((p) => ({
        href: `/sesame/${p.slug}`,
        title: p.title,
      })),
    ],
  },
  {
    label: "QUESTIONS",
    links: [
      { href: "/sesame/questions", title: "Questions" },
      { href: "/", title: "Back" },
    ],
  },
];

export const navigation: NavSection[] = [
  {
    label: "WORK",
    links: [
      { href: "/projects/sage", title: "Sage" },
      { href: "/projects/kqed", title: "KQED" },
      { href: "/projects/aleph-rebrand", title: "Aleph" },
      { href: "/projects/exploratorium", title: "Exploratorium" },
      { href: "/projects/nike-free", title: "Nike Free" },
      { href: "/projects/nike-nsw", title: "Nike NSW" },
      { href: "/projects/nike-fuelband", title: "Nike FuelBand" },
      { href: "/projects/tracy-chapman", title: "Tracy Chapman" },
      { href: "/projects/aesop-rock", title: "Aesop Rock" },
      { href: "/projects/dockers-shk", title: "Dockers" },
      { href: "/projects/huf-sf", title: "HUF" },
      { href: "/projects/stussy", title: "Stussy" },
      { href: "/projects/mercurius", title: "Mercurius" },
      { href: "/randoms", title: "Archive" },
    ],
  },
  {
    label: "LAB",
    links: [
      { href: "/experiments/her", title: "Her" },
      { href: "/experiments/early-covid-gans", title: "Covid GANs" },
      { href: "/experiments/undertrained-gans-print", title: "Undertrained GANs" },
      { href: "/experiments/portraits", title: "Portraits" },
      { href: "/experiments/surrealist-dreams", title: "Surrealist Dreams" },
      { href: "/experiments/touchdesigner", title: "TouchDesigner" },
      { href: "/experiments/moires-01", title: "Moir\u00e9s" },
      { href: "/experiments/chaotic-desktop", title: "Chaotic Desktop" },
      { href: "/experiments/junk-drawer", title: "Junk Drawer" },
      { href: "/experiments/other-stories-final-output-2024", title: "Other Stories" },
      { href: "/experiments/refining-the-point", title: "Refining the Point" },
      { href: "/experiments/earcon-generator", title: "Earcons" },
      { href: "/projects/okml", title: "OKML" },
    ],
  },
  {
    label: "CV",
    links: [
      { href: "/cv", title: "Resume" },
    ],
  },
];
