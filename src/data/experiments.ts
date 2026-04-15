import type { Experiment } from "@/types/project";

export const experiments: Experiment[] = [
  {
    slug: "early-covid-gans",
    title: "Early Covid GANs",
    date: "2020-09-15",
    description:
      "StyleGAN studies produced during early COVID lockdowns, fine-tuning undertrained models on op art, optical illusion, and moire pattern datasets, then traversing latent space to observe unstable but compelling visual transitions.",
    content: [
      {
        type: "text",
        body: '<p>During the early months of COVID lockdown, I began fine-tuning StyleGAN models on a relatively small image set built from op art, optical illusion studies, and high-contrast moire patterns. The process was slow and strangely hypnotic: overnight renders would often yield only a few hundred usable frames, and because the models were still undertrained, the outputs remained visibly unstable. That instability was precisely what made the work interesting. Objects would merge in and out of one another, grids would soften into interference bands, and recognizable forms would briefly cohere before dissolving back into patterned noise.</p><p>Rather than treating latent space as a route toward polished image synthesis, I approached it as an exploratory field. By traversing between points in the latent manifold, I was looking for moments where the model revealed its incomplete understanding of the source material: optical motifs folding into one another, figure-ground relationships collapsing, and geometric systems behaving almost like hallucinated memory. In that sense the work was less about photorealism than about watching representation fail productively under constraint.</p><p>The experiments were informed by the original <a href="https://arxiv.org/abs/1812.04948" target="_blank" rel="noreferrer">StyleGAN paper</a>, the follow-up <a href="https://arxiv.org/abs/1912.04958" target="_blank" rel="noreferrer">StyleGAN2 paper</a>, and later thinking around limited-data training in <a href="https://arxiv.org/abs/2006.06676" target="_blank" rel="noreferrer">StyleGAN2-ADA</a>. What mattered to me in practice was not only the architecture itself, but the phenomenology of undertraining: the extended render times, the low yield, and the uncanny visual threshold where patterns became images and then immediately unraveled again.</p>',
      },
      {
        type: "text",
        body: "<p>Earlier in summer 2020, before the op-art / moir\u00e9 fine-tunes, I ran a small portrait series: faces drifting in latent space while the model was still early and undertrained. The walks are not trying to resolve into catalog-perfect heads; they stay in the twitchy regime where identity smears, features trade places, and the network keeps negotiating what a face is allowed to be.</p>",
      },
      {
        type: "vimeo",
        src: "https://player.vimeo.com/video/424922207?badge=0&autopause=0&player_id=0&app_id=58479",
        title: 'StyleGAN portrait series \u2014 "Dina"',
      },
      {
        type: "vimeo",
        src: "https://player.vimeo.com/video/424929536?badge=0&autopause=0&player_id=0&app_id=58479",
        title: 'StyleGAN portrait series \u2014 "Henry"',
      },
      {
        type: "video",
        src: "/videos/stylegan-moires.mp4",
        title: "StyleGAN2 x Op Art Patterns \u2014 Latent Walks",
      },
    ],
    tags: ["generative", "AI", "StyleGAN", "op-art"],
  },
  {
    slug: "undertrained-gans-print",
    title: "Undertrained GANs — Matt test print (1080)",
    date: "2021-03-09",
    description:
      "A 1080p study from an undertrained generative model: latent drift and half-formed structure treated as print material rather than failure — the model's uncertainty made visible at scale.",
    content: [
      {
        type: "text",
        body: "<p>This piece comes from the same instinct as the early COVID StyleGAN work: staying with models that have not fully converged, and treating their artifacts as aesthetic material instead of mistakes to train away. Here the output is framed as a test print — something you would run at full resolution to see whether the noise, moiré, and collapsing geometry read as texture, rhythm, or narrative when the pixels are large enough to breathe.</p><p>Undertraining is not only a technical state. It is a compositional one. The network is still guessing; the latent walk reads as hesitation made spatial. That hesitation is often more interesting than a polished final frame, because it keeps the viewer aware that the image is provisional — that another step in the walk would have dissolved it differently.</p><p>Latent portrait walks from the same summer 2020 series (including the Henry walk) live on the <a href=\"/experiments/early-covid-gans\">Early Covid GANs</a> page alongside the moiré study.</p>",
      },
      {
        type: "video",
        src: "/videos/undertrained-gans-matt-test-print-1080.mp4",
        title: "Matt test print — 1080p capture (H.264)",
      },
    ],
    tags: ["generative", "AI", "StyleGAN", "print", "lab"],
  },
  {
    slug: "other-stories-final-output-2024",
    title: "Other stories — Final output",
    date: "2024-09-01",
    description:
      "A square-format generative motion piece from 2024: latent drift and accumulated detail in a single pass, rendered as a short loop-friendly study.",
    content: [
      {
        type: "text",
        body: "<p>This output sits alongside the undertrained GAN work as another way of thinking about <em>process visibility</em> — not polishing the artifact until the mechanism disappears, but letting motion, texture, and instability carry meaning on their own. The square frame keeps the composition self-contained: no cinematic letterboxing, no implied narrative beyond what the walk does to the image field over time.</p><p>Final output here does not mean final in the sense of \"done forever.\" It means the render that was kept after the session — the frame of the walk that felt most honest about what the model was doing when nobody was asking it to behave.</p>",
      },
      {
        type: "video",
        src: "/videos/other-stories-2024-final-output.mp4",
        title: "Final output — 1024×1024, ~26s (H.264)",
      },
    ],
    tags: ["generative", "AI", "motion", "lab", "2024"],
  },
  {
    slug: "claude-self-portrait",
    title: "Claude #1",
    date: "2024-01-15",
    description:
      "An abstract Three.js visualization exploring what Claude might look like as a form \u2014 deep blues, golds, and reds creating an ever-shifting entity.",
    content: [
      {
        type: "text",
        body: "<p>An exploration of what an AI assistant might look like rendered as an abstract 3D form. Built with Three.js, the visualization uses deep blues, golds, and reds to create a constantly shifting entity that responds to audio input.</p><p>Audio reactivity is treated as first-class input: the mesh never settles into a single readable silhouette, so the viewer reads process\u2014reaction, latency, color drift\u2014instead of a mascot.</p>",
      },
    ],
    tags: ["three.js", "AI", "generative", "visualization"],
  },
  {
    slug: "claude-2",
    title: "Claude #2",
    date: "2024-02-01",
    description:
      "Second iteration of the Claude visualization with more complex particle systems and audio-reactive behaviors.",
    content: [
      {
        type: "text",
        body: "<p>Building on the first Claude visualization, this iteration introduced particle systems that react to conversation dynamics, creating a visual representation of dialogue between human and AI.</p><p>The goal was to keep the form unstable enough that it never fully resolves into iconography: color fields and particles carry emotional temperature the way prosody does in speech, without illustrating the assistant literally.</p>",
      },
    ],
    tags: ["three.js", "AI", "particles"],
  },
  {
    slug: "surrealist-dreams",
    title: "Surrealist Dreams",
    date: "2023-06-01",
    description:
      "AI-generated surrealist imagery and short video loops exploring the intersection of machine learning and dream logic — wrong physics, wrong scale, objects that obey prompt grammar instead of gravity.",
    content: [
      {
        type: "text",
        body: "<p>A series of AI-generated images and video loops that explore surrealist aesthetics through the lens of machine learning. Using various diffusion and video-generation models, these pieces attempt to capture the illogical beauty of dreams as interpreted by artificial intelligence.</p><p>The through-line is compositional: wrong physics, wrong scale, objects that obey prompt grammar instead of gravity. The point is not novelty for its own sake but sustained pressure on pictorial coherence — what happens when the model is pushed past the comfort zone of plausible illustration.</p><p>The short loops below come from a batch of AI-generated video experiments: floating stone structures, levitating rock formations, and impossible geological arrangements rendered with enough conviction to make you question what you're looking at for at least two seconds before the seams show.</p>",
      },
      {
        type: "video",
        src: "/videos/surrealist-rock-01.mp4",
        title: "Floating Rock Surrealism — variation 1",
      },
      {
        type: "video",
        src: "/videos/surrealist-rock-02.mp4",
        title: "Floating Rock Surrealism — variation 2",
      },
      {
        type: "video",
        src: "/videos/surrealist-rock-03.mp4",
        title: "Floating Rock Surrealism — variation 3",
      },
      {
        type: "video",
        src: "/videos/surrealist-rock-04.mp4",
        title: "Floating Rock Surrealism — variation 4",
      },
      {
        type: "video",
        src: "/videos/levitating-rock-01.mp4",
        title: "Levitating Rock Mystique — variation 1",
      },
      {
        type: "video",
        src: "/videos/levitating-rock-02.mp4",
        title: "Levitating Rock Mystique — variation 2",
      },
    ],
    tags: ["AI", "generative", "surrealism", "video"],
  },
  {
    slug: "touchdesigner",
    title: "TouchDesigner Experiments",
    date: "2023-08-01",
    description:
      "Real-time visual experiments built in TouchDesigner, exploring reactive geometry and audio-visual feedback loops.",
    content: [
      {
        type: "text",
        body: "<p>A collection of real-time visual experiments built in TouchDesigner. These pieces explore reactive geometry, audio feedback loops, and the intersection of code and visual design in a node-based environment.</p><p>The embedded reel below is a capture from that practice: a TouchDesigner sketch exploring fade, glitch, and compositing in real time\u2014signal in the chain, not an offline render pass.</p>",
      },
      {
        type: "vimeo",
        src: "https://player.vimeo.com/video/1183256316?badge=0&autopause=0&player_id=0&app_id=58479",
        title: "fade-glitch-alephp-real-reel",
        aspectClass: "aspect-[4/3]",
      },
    ],
    tags: ["touchdesigner", "real-time", "generative"],
  },
  {
    slug: "moires-01",
    title: "Moires 01",
    date: "2020-09-01",
    description:
      "Generative moire patterns created through overlapping geometric grids. Exploring interference patterns as a design medium.",
    content: [
      {
        type: "text",
        body: "<p>Moire patterns emerge from the interference of overlapping geometric grids. This series explores these patterns as a design medium, using code to generate complex visual textures from simple mathematical rules.</p>",
      },
      {
        type: "video",
        src: "/videos/stylegan-moires.mp4",
        title: "Generative Moire Patterns",
      },
    ],
    tags: ["generative", "patterns", "op-art"],
  },
  {
    slug: "her",
    title: "Her \u2014 A Manifesto About Now",
    date: "2025-02-01",
    description:
      "A video essay using Spike Jonze\u2019s Her as a lens to examine the present moment in conversational AI. What Jonze imagined as speculative fiction in 2013 \u2014 an operating system with personality, warmth, and emotional presence \u2014 is now something we are actually building. This piece sits between manifesto and provocation, asking what it means to design synthetic intimacy at industrial scale.",
    content: [
      {
        type: "text",
        body: "<p>In 2013, Spike Jonze released <em>Her</em> \u2014 a film about a man who falls in love with an artificial intelligence. At the time, the premise felt safely distant: a pastel-colored thought experiment about loneliness, voiced by Scarlett Johansson, set in a Los Angeles that didn\u2019t quite exist. The critical consensus landed on melancholy and metaphor. It was a film about us, not about AI.</p><p>Twelve years later, the metaphor has collapsed into fact. We are building the thing Jonze imagined. Not as cinema, not as speculation, but as product. Real-time voice pipelines with sub-200ms latency. Personality engines that modulate tone, cadence, and emotional register on the fly. Embodied avatars that hold eye contact. The technical infrastructure for synthetic intimacy is here, and it works well enough to be unsettling.</p>",
      },
      {
        type: "video",
        src: "/intuit-videos/Voice_Brand_Opener_v2.mp4",
        title: "Her \u2014 Voice Brand Opener",
      },
      {
        type: "text",
        body: "<p>This video was produced as an internal provocation at Intuit\u2019s Futures lab \u2014 a manifesto-as-demo, using footage from <em>Her</em> to frame a question that the film never had to answer but we now do: <strong>what does it mean for a brand to have a voice that feels human?</strong></p><p>Theodore Twombly, Joaquin Phoenix\u2019s character, wears a red shirt against a saturated red field. He is swallowed by color. His face moves through micro-expressions \u2014 curiosity, hesitation, wonder, doubt \u2014 as he listens to a voice that exists nowhere and everywhere. Jonze\u2019s genius was to understand that the interesting part of AI isn\u2019t the technology. It\u2019s the face of the person on the other side. The slightly parted lips. The eyes searching for a body that isn\u2019t there.</p><p>We used this imagery deliberately. When we build conversational AI systems, we are designing for exactly this moment: the moment a human decides to trust a voice that has no body, no history, no stakes. The ethical weight of that decision \u2014 made millions of times a day, at scale, inside products that handle people\u2019s money, health, and identity \u2014 is the territory this piece occupies.</p>",
      },
      {
        type: "text",
        body: "<p>The manifesto that runs beneath the footage argues for a specific position: that designing AI personality is not an engineering problem with a design layer on top. It is a fundamentally new creative discipline that requires practitioners who understand rhetoric, theater, psycholinguistics, and interaction design simultaneously. The voice is the brand. The cadence is the experience. The pause before the response is the most important design decision you will make.</p><p>Jonze saw this. He gave Samantha (the OS) a laugh, a hesitation, a way of changing the subject when she was uncomfortable. These weren\u2019t features. They were character. And character, it turns out, is the hardest thing to engineer \u2014 not because the models can\u2019t generate it, but because most organizations don\u2019t have a language for specifying what they want a personality to <em>be</em>.</p><p>This piece is an attempt to provide that language. To say: the future of brand is not visual identity. It is vocal identity. It is the quality of attention an AI pays to you when you speak. It is whether the system knows when to shut up. <em>Her</em> understood this in 2013. We are only now catching up.</p>",
      },
    ],
    tags: ["conversational-ai", "voice", "manifesto", "intuit", "futures"],
  },
  {
    slug: "chaotic-desktop",
    title: "Chaotic Desktop",
    date: "2024-08-30",
    description:
      "A raw screen recording of the creative desktop as unintentional self-portrait. AI avatar generators, Spotify, satellite imagery, browser tabs, and live webcam feeds collide in an 18-second document of the contemporary creative workspace \u2014 the screen as studio wall, the desktop as collage.",
    content: [
      {
        type: "text",
        body: "<p>There is a long tradition in visual art of the studio as subject. Courbet\u2019s <em>The Painter\u2019s Studio</em>. Bacon\u2019s photographs of his wrecked Reece Mews flat. The Eames\u2019 obsessive documentation of their own workspace. In each case, the environment of production becomes legible as a portrait of the mind that inhabits it \u2014 its obsessions, its tolerances for disorder, its way of holding multiple threads at once.</p><p>This screen recording is that tradition\u2019s digital equivalent. Captured during a working session in August 2024, it documents approximately 18 seconds of a desktop in full entropy: multiple AI portrait generators running simultaneously (what appears to be a real-time style transfer and several diffusion-based avatar tools), a Spotify window playing Mulatu Astatke\u2019s Ethiopian jazz, Google Maps in satellite view, a live webcam feed, browser tabs stacked deep, and the faint text overlay reading \u201cUnleash the Full Potential of AI.\u201d</p>",
      },
      {
        type: "image",
        asset: {
          src: "/images/projects/nike-nsw/01.jpg",
          alt: "Nike NSW — studio wall with production boards, film stills, and garment flats",
          width: 746,
          height: 495,
          caption:
            "Physical studio wall \u2014 the same density of boards, stills, and flats a chaotic desktop holds in windows instead of foam core.",
        },
      },
      {
        type: "video",
        src: "/intuit-videos/chaotic-desktop.mp4",
        title: "Chaotic Desktop \u2014 Screen Recording, August 2024",
      },
      {
        type: "text",
        body: "<p>What makes this recording interesting is not any single window but the simultaneity. This is what it actually looks like to work with generative AI in 2024 \u2014 not the clean single-tool demos of product marketing, but a desktop groaning under the weight of parallel processes, each one generating imagery that didn\u2019t exist seconds before. The AI-generated portraits stare out from overlapping windows with expressions that range from photorealistic calm to painterly anguish, their uncanny faces layered over the artist\u2019s own webcam feed in a hall-of-mirrors collapse of the real and the synthetic.</p><p>The Ethiopian jazz is not incidental. Mulatu Astatke\u2019s music \u2014 itself a radical hybrid, fusing Afrobeat with jazz harmony and Amharic scales \u2014 provides an apt soundtrack for a practice defined by collision. Nothing on this screen belongs together. A satellite photo of terrain, a Romantic-style oil portrait hallucinated by a neural network, a man in glasses on a webcam, a Spotify queue. And yet together they form a composition. The desktop becomes a Robert Rauschenberg combine: a flat surface holding incompatible realities in productive tension.</p><p>This piece was never intended as a finished work. It is a document. But it captures something that polished demo reels never do: the texture of creative thought when the tools themselves are generative, when every window is a portal to a different latent space, and when the artist\u2019s primary medium is attention \u2014 the act of holding all of it in view at once and deciding, moment by moment, where to look.</p>",
      },
    ],
    tags: ["desktop", "AI", "process", "found-footage", "collage"],
  },
  {
    slug: "junk-drawer",
    title: "Junk Drawer",
    date: "2024-04-18",
    description:
      "A collection of things that should not exist but do. AI hallucinations, fish people, googly eyes on everything, office workers in horse masks, sandwich ontology, and the slow dissolution of Keith Haring into a neural network's fever dream. This is the drawer you open when you're looking for tape and find a portal instead.",
    content: [
      {
        type: "text",
        body: "<p>Every studio has a junk drawer. The physical version holds dead batteries, mystery cables, a single earring, and a receipt from 2017. The digital version is worse. It holds the things you made at 2 AM when the prompt engine was hot and your judgment was not. The experiments that don't belong to any project. The images that made you laugh alone in a dark room. The fish person.</p><p>This page is that drawer, emptied onto the floor and arranged with as much care as you'd give to a crime scene evidence wall in a movie about a detective who is losing it. None of these pieces were made for clients. None of them solve problems. Several of them <em>are</em> problems. They exist because generative tools don't have taste, and sometimes that's exactly what you need.</p>",
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/01.jpg",
          alt: "Two oversized cartoon googly eyes on white background — the universal symbol for 'I have no idea what I'm doing but I'm watching'",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "text",
        body: "<p>The eyes came first. Before any of the AI experiments, before the fish, before any of it — there were just these two stupid perfect googly eyes staring at nothing. They became a recurring motif: pasted onto AI-generated crowds, hidden in brand presentations, dropped into Slack channels at inappropriate moments. If this collection has a mascot, it's these two idiots.</p>",
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/04.jpg",
          alt: "AI-generated crowd of diverse faces with VR goggles, cartoon eyes, and mixed rendering styles colliding",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/02.jpg",
          alt: "Black and white photo collage — self-portrait composited into San Francisco architecture, buildings growing from shoulders",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "text",
        body: "<p>The self-portrait-as-cityscape was a quick Photoshop collage — San Francisco buildings growing out of a headshot like some Arcimboldo painting made of Victorians and fire escapes. The AI crowd came from prompting a diffusion model with increasingly contradictory instructions until it broke in interesting ways: VR goggles and googly eyes and rendered humans and cartoon characters all occupying the same uncanny valley group photo. It looks like the future feels.</p>",
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/05.jpg",
          alt: "4x5 grid of Keith Haring in Nike shirt — DALL-E progressive hallucination dissolving identity into pattern",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "text",
        body: "<p>The Keith Haring grid started as a simple experiment: feed a photo of a man in a Nike shirt near a Haring piece into DALL-E's variation engine and keep going. Twenty iterations later, the person and the art have become indistinguishable. The Nike swoosh mutates into hieroglyphics. The face liquefies. The Haring patterns eat the photograph from the edges inward. It's a time-lapse of a neural network digesting an image — identity as lossy compression.</p>",
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/09.jpg",
          alt: "3x3 grid of AI-generated awkward teenagers with oversized glasses — uncanny valley yearbook photos",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/08.jpg",
          alt: "Warhol-style color grid of kid's face expressions in pink, orange, and yellow",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "text",
        body: "<p>The uncanny yearbook portraits were a prompt injection experiment — asking for 'school photos from a dimension where puberty works slightly differently.' The color grid of faces is real photography run through a Warhol-izer that shouldn't exist. Both series explore the same territory: what happens when you point generative tools at the most emotionally loaded images we have (kids, portraits, identity documents) and let them get it almost right. The 'almost' is where all the interesting stuff lives.</p>",
      },
      {
        type: "video",
        src: "/images/experiments/junk-drawer/fish4.mp4",
        title: "Fish Person at Party — AI-Generated Character Animation",
      },
      {
        type: "text",
        body: "<p>And then there's the fish. The fish person showed up uninvited during a Midjourney session — a human-piscine hybrid in an orange cardigan attending what appears to be a 1970s cocktail party, looking deeply uncomfortable about the whole arrangement. Something about the expression — the monocled eye, the pursed fish-lips, the formal attire stretched over scales — was so profoundly correct that it became an obsession. The still image led to animation experiments: gentle AI-interpolated morphing that gives the fish person the unsettling quality of breathing, of being almost alive, of being at a party where they know absolutely no one and are handling it with tremendous dignity.</p>",
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/fishhead.png",
          alt: "The fish person — AI-generated human-fish hybrid in orange cardigan at 1970s cocktail party",
          width: 1024,
          height: 1024,
        },
      },
      {
        type: "video",
        src: "/images/experiments/junk-drawer/fish.mp4",
        title: "Fish Person — Short Loop",
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/10.jpg",
          alt: "AI-generated surreal dancing figures with brain-like sphere heads on dark backdrop",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/13.jpg",
          alt: "Black and white office with people in horse masks working at computers under dazzle-pattern op-art ceiling",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "text",
        body: "<p>The dancing brain-figures and the horse-mask office workers share a lineage: both emerged from prompting for 'the workplace but wrong.' The brain dancers have the quality of a Hieronymus Bosch panel reimagined by a ceramicist on mushrooms. The horse-masked office is somehow more unsettling for being more realistic — real desks, real monitors, real dazzle-camouflage op-art ceiling, completely fake heads. It's a photograph of a place that doesn't exist but absolutely should.</p>",
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/06.jpg",
          alt: "AI-generated ceramic owl with mismatched googly eyes — 'Aleph: Design ideas shared on posters and shit'",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/07.jpg",
          alt: "Full Stack — sandwich split half black-and-white, half color, the only honest tech metaphor",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/03.jpg",
          alt: "Dream more than you are supposed to. Period. — night sky painting in gallery mockup with mushroom emoji",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/junk-drawer/12.jpg",
          alt: "AI-generated elderly face dissolving in warm amber light — resolution artifact as portrait technique",
          width: 1998,
          height: 1998,
        },
      },
      {
        type: "text",
        body: "<p>The owl knows something we don't. The sandwich is the only honest representation of 'full stack' ever committed to pixels. The gallery mockup is motivational art for people who find motivational art suspicious. The dissolving elder portrait is what happens when you upscale a low-res face and the AI fills in details that aren't there — inventing wrinkles, inventing light, inventing a person who never existed but who looks like they've seen everything.</p><p>None of this is portfolio work. None of it ships. All of it matters in the way that stretching matters before you run, or that doodling matters during a long meeting — it keeps the hand moving and the eye weird. The junk drawer stays open.</p>",
      },
    ],
    tags: ["AI", "generative", "collage", "humor", "midjourney", "dall-e", "sketchbook"],
  },
  {
    slug: "refining-the-point",
    title: "Refining the Point",
    date: "2024-01-31",
    description:
      "A written piece on Aleph's brand evolution — how the studio's identity shifted to embrace AI-assisted creative work, treating code as a creative act and large language models as collaborators rather than replacements. Published on the Aleph weblog during my time as Director of Technology.",
    content: [
      {
        type: "image",
        asset: {
          src: "/images/experiments/refining-the-point/featured.jpg",
          alt: "Black and white photo collage — figure composited into dense urban architecture, San Francisco skyline as exoskeleton",
          width: 3500,
          height: 2000,
        },
      },
      {
        type: "text",
        body: "<p>Aleph's core offerings as a creative technology partner have expanded and shifted over the years as our talents and focus have evolved. In recent times, the pace of change in the tech that surrounds us has accelerated beyond any human's ability to keep up with it. We've been thinking a lot about where our brand and capabilities sit within this tumultuous landscape, and we recently launched our new website, where the latest output of that thought process takes center stage.</p><p>We believe Aleph's brand should reflect the collective diversity of our creative influences, the empathy for others that we carry, and the irreverent nature of the work we want to do. Our client work is focused primarily on shaping the space around information, and bringing our clients a comprehensive, creative vision that is both incredibly ambitious and inherently possible.</p>",
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/refining-the-point/brand-mark.png",
          alt: "Aleph brand inspiration boards — grids of visual influences spanning Bauhaus, Dutch design, typography, and surrealist imagery",
          width: 2382,
          height: 2336,
        },
      },
      {
        type: "text",
        body: "<p>The latest expression of our brand showcases not only our influences and inspiration, but also who we can become as we embrace new innovation in tech-assisted creative work. A core tenet of our team is that coding is a <strong>creative</strong> act; not simply a byproduct of design but an intrinsic part of the design process. It is both foundational and transformative, encompassing both the static nature of printed pages and the dynamic movement of interactive art.</p><p>In our immediate future, the advent of LLMs and AI offers an opportunity to leverage it as a tool for creation. Far from resigning ourselves to being replaced by it, we believe in the democratization of this technology as a means to forge new ground and build future-forward experiences across many modes. The recent work we've done on our brand and website highlights our capabilities in this space; a combination of our own creative vision augmented by the surrealist flourishes of smart robots.</p>",
      },
      {
        type: "text",
        body: "<p>Using prompts to create images can be just like standing in front of an oracle, awaiting some divine response. We find it more useful to use AI as a tool for translating our ideas into visual inspiration for our own work. The painstaking process of combing through assets, compiling mood boards and such, can now take the form of a conversation with a superhuman force for creative reference. Our creative workflow will evolve as the tools themselves evolve, and our team is committed to remaining at the vanguard of this movement with the precious core of our experience and understanding as a lodestar.</p><p>It is our business to provide leadership and guidance as the future comes to your enterprise. The watermark on all of our client work is the fearless embrace of new tools and technologies, and we believe that our brand echoes the excitement that comes with it.</p>",
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/refining-the-point/flowers.png",
          alt: "AI-generated floral arrangement — surrealist brand illustration for Aleph",
          width: 1080,
          height: 541,
        },
      },
      {
        type: "image",
        asset: {
          src: "/images/experiments/refining-the-point/animals.png",
          alt: "AI-generated animal illustrations — surrealist brand imagery combining organic forms with graphic design",
          width: 1448,
          height: 1056,
        },
      },
    ],
    tags: ["brand", "aleph", "AI", "writing", "creative-direction"],
  },
];

export function getExperiment(slug: string): Experiment | undefined {
  return experiments.find((e) => e.slug === slug);
}

export function getAllExperimentSlugs(): string[] {
  return experiments.map((e) => e.slug);
}
