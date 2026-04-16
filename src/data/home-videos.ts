export interface HomeVideo {
  src: string;
  label: string;
}

/**
 * Pool of videos for the mysterious homepage.
 * On each visit, one is chosen at random.
 */
export const homeVideos: HomeVideo[] = [
  {
    src: "/videos/stylegan-moires.mp4",
    label: "StyleGAN latent walk, op-art moir\u00e9 patterns",
  },
  {
    src: "/videos/levitating-rock-01.mp4",
    label: "Levitating rock study, iteration 01",
  },
  {
    src: "/videos/levitating-rock-02.mp4",
    label: "Levitating rock study, iteration 02",
  },
  {
    src: "/videos/surrealist-rock-01.mp4",
    label: "Surrealist rock, iteration 01",
  },
  {
    src: "/videos/surrealist-rock-02.mp4",
    label: "Surrealist rock, iteration 02",
  },
  {
    src: "/videos/surrealist-rock-03.mp4",
    label: "Surrealist rock, iteration 03",
  },
  {
    src: "/videos/surrealist-rock-04.mp4",
    label: "Surrealist rock, iteration 04",
  },
  {
    src: "/videos/other-stories-2024-final-output.mp4",
    label: "Other Stories, final output 2024",
  },
  {
    src: "/images/experiments/junk-drawer/fish.mp4",
    label: "Fish person at party, AI interpolation",
  },
  {
    src: "/videos/okrock.mp4",
    label: "OK rock",
  },
  {
    src: "/intuit-videos/chaotic-desktop.mp4",
    label: "Chaotic desktop",
  },
  {
    src: "/intuit-videos/Voice_Brand_Opener_v2.mp4",
    label: "Voice brand opener, v2",
  },
  {
    src: "/images/cv/headshot.mp4",
    label: "Self-portrait loop",
  },
];
