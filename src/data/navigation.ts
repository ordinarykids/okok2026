import type { NavSection } from "@/types/project";

export const navigation: NavSection[] = [
  {
    label: "SELECTED PROJECTS",
    links: [
      { href: "/projects/tracy-chapman", title: "Tracy Chapman" },
      { href: "/projects/nike-free", title: "Nike Free" },
      { href: "/projects/kqed", title: "KQED" },
      { href: "/projects/helix", title: "Helix" },
      { href: "/projects/aleph-rebrand", title: "Aleph Rebrand" },
      { href: "/randoms", title: "Random Projects" },
    ],
  },
  {
    label: "EXPERIMENTATIONS",
    links: [
      { href: "/experiments/early-covid-gans", title: "Early Covid GANs" },
      { href: "/experiments/claude-self-portrait", title: "Claude #1" },
      { href: "/experiments/claude-2", title: "Claude #2" },
      {
        href: "/experiments/surrealist-dreams",
        title: "Surrealist Dreams",
      },
      {
        href: "/experiments/touchdesigner",
        title: "TouchDesigner Experiments",
      },
      { href: "/experiments/moires-01", title: "Moires 01" },
      { href: "/experiments/her", title: "Her" },
      { href: "/experiments/chaotic-desktop", title: "Chaotic Desktop" },
      { href: "/experiments/junk-drawer", title: "Junk Drawer" },
      { href: "/experiments/the-gazer", title: "The Gazer" },
    ],
  },
];
