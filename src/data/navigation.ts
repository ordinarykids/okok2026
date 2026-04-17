import type { NavSection } from "@/types/project";
import {
  sesameCurrentThinking,
  sesameEarlyWork,
  sesameExperiments,
} from "@/data/sesame";

const toLink = (p: { slug: string; title: string }) => ({
  href: `/sesame/${p.slug}`,
  title: p.title,
});

export const sesameNavigation: NavSection[] = [
  {
    label: "CURRENT",
    links: sesameCurrentThinking.map(toLink),
  },
  {
    label: "PREVIOUS",
    links: sesameEarlyWork.map(toLink),
  },
  {
    label: "EXPERIMENTS",
    links: sesameExperiments.map(toLink),
  },
  {
    label: "QUESTIONS",
    links: [{ href: "/sesame/questions", title: "Questions" }],
  },
  {
    label: "CV",
    links: [{ href: "/cv", title: "Resume" }],
  },
];

export const navigation: NavSection[] = [
  {
    label: "WORK",
    links: [
      { href: "/projects/sage", title: "HeySage.ai" },
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
      {
        href: "/experiments/undertrained-gans-print",
        title: "Undertrained GAN",
      },
      { href: "/experiments/portraits", title: "Portraits" },
      { href: "/experiments/surrealist-dreams", title: "Surrealist Dreams" },
      { href: "/experiments/touchdesigner", title: "TouchDesigner" },
      { href: "/experiments/moires-01", title: "Latent Drift Dream" },
      // { href: "/experiments/junk-drawer", title: "Junk Drawer" },
      { href: "/experiments/refining-the-point", title: "Refining the Point" },
      { href: "/experiments/earcon-generator", title: "Earcons" },
      { href: "/projects/okml", title: "OKML" },
    ],
  },
];
