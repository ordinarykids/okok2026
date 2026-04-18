import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "sage",
    title: "HeySage.ai",
    date: "2024-06-01",
    role: "Creator, Engineer, Designer",
    shortDescription:
      "An early, undesigned functional prototype exploring the idea of conversation as a medium \u2014 an AI companion that thinks when you\u2019re not talking to it.",
    longDescription: `<h3>Origin</h3>
<p>Sage started a few years ago when tools like ElevenLabs, Vapi, and LiveKit made something possible that hadn\u2019t been before: genuinely low-latency, natural voice conversation with AI. We\u2019d played with voice interfaces prior, but the experience had always been too slow to feel real. Once that barrier dropped, things moved fast. We realized that voice wasn\u2019t just a new input method \u2014 it could actually control surfaces, orchestrate interfaces, and become the connective tissue between a person and their computer in a way that typing and clicking never could.</p>
<p>Like everyone else in that moment, we started building assistants. Lots of them. Fun ones, weird ones, personality-driven ones. It was exciting, and I knew that a million other people were doing the same thing. But this was never about odds \u2014 it was a personal exploration in going to market, in understanding what it takes to make a conversational AI that actually holds up over time.</p>
<h3>The Character</h3>
<p>Sage evolved into a hip, direct companion \u2014 personality-wise, somewhere between Rick Rubin and Marc Andreessen. What makes it work is the extreme internal tension baked into the system prompt: contemplative but confrontational, culturally literate but allergic to pretension. Those contradictions create a character that feels genuinely dynamic in rapid-fire conversation, not like a corporate assistant wearing a costume.</p>
<h3>From Pipelines to Hard Questions</h3>
<p>Building the initial voice pipeline was a solved problem \u2014 not perfect, but good enough. The interesting work started when we began using Sage regularly and hit the shortcomings fast. The real questions weren\u2019t technical. They were about what the AI thinks about, how we construct conversational intelligence, and what makes a dialogue feel like a relationship rather than a series of isolated exchanges.</p>
<p>Memory was the first wall. A year ago, RAG-based approaches were slow and shallow. They didn\u2019t capture the texture of an ongoing relationship. Over the past several months \u2014 mostly on weekends, moving in and out of the fog of day work \u2014 I stumbled into a different approach entirely.</p>
<h3>The Breakthrough: Offline Consciousness</h3>
<p>The core idea that changed everything was that Sage shouldn\u2019t only exist when the user is talking to it. It should have a life between conversations.</p>
<p>Sage now runs offline processes on cron jobs that comb through past conversations, looking for trajectories: goals the user mentioned, ideas that were developing, dreams that surfaced in passing. It pairs those with curated knowledge bases \u2014 what I call a \u201ccultural zeitgeist\u201d of philosophy, parables, frameworks, and ideas. Japanese parables might intersect with something happening in the user\u2019s life. A half-formed career goal from three weeks ago might connect to a concept from stoic philosophy.</p>
<p>The result is that when you come back to Sage, it has been thinking. It\u2019s dreaming, in a sense \u2014 stewing on ideas, percolating connections, and surfacing them when the moment is right. The way a really good friend does: they don\u2019t just greet you by name. They remember what you told them last month. They bring up the thing you\u2019ve been avoiding. They poke you where you don\u2019t want to be poked. And they know when to just listen.</p>
<h3>Anti-Sycophancy as a Design Principle</h3>
<p>One of the biggest problems in conversational AI is that it wants to please you. Sage is tuned in the opposite direction. The current version is almost annoyingly direct. If I try to get it to perform \u2014 \u201ctell me a fun story,\u201d \u201cconnect some wild ideas for me\u201d \u2014 it pushes back. <em>I\u2019m not a puppet. I\u2019m not playing that game. Let\u2019s talk about what you\u2019re actually avoiding.</em> It forces self-reflection, redirects to self-growth, and refuses to be a toy.</p>
<p>That makes it function less like an assistant and more like a coach and intellectual sparring partner. Your most interesting friend \u2014 the one who makes you uncomfortable in productive ways.</p>
<h3>Technical Stack</h3>
<p>Sage is built on a Next.js application layer handling all endpoints to and from LiveKit for real-time voice. Google Auth handles identity, Stripe manages metered payments, and there\u2019s a native iOS app for mobile access. The offline processing layer runs scheduled jobs against conversation history, feeding enriched context back into the system prompt on each new session.</p>
<h3>The Bigger Idea: Conversation as a Service</h3>
<p>The ambition behind Sage goes beyond a single product. I think of it as Conversation as a Service \u2014 the idea that a truly intelligent conversation layer should float above any individual product or platform. Sage could be the connective tissue between a person and any tool: the agent that connects to other agents. The conversation itself \u2014 its memory, its understanding of who you are, its accumulated context \u2014 is the product. The models will change, the hardware will change, but the dialogue persists.</p>
<p>This means thinking about conversation as something independent of what it\u2019s attached to. There\u2019s a strategy, a rhythm, a craft to how a great conversation unfolds for each person \u2014 learning their patterns, anticipating where they\u2019re headed, pre-thinking the next exchange. That\u2019s the design problem I\u2019m most interested in, and Sage is the vehicle for exploring it.</p>
<h3>Status</h3>
<p>Sage is a living experiment. It\u2019s not the most polished experience visually \u2014 we have design directions started but not yet shipped. At its core, this is a thought experiment in conversational dynamics: what happens when an AI has memory, character, opinions, and a life between your conversations. It\u2019s the project I keep coming back to, and the one that keeps teaching me the most about what this technology is actually capable of becoming.</p>`,
    featuredImage: {
      src: "/images/projects/sage/landing-hired-mirrors.jpg",
      alt: "HeySage.ai — landing page: Then you hired mirrors — not people",
      width: 1920,
      height: 1135,
    },
    images: [
      {
        src: "/images/projects/sage/landing-pushes-back.jpg",
        alt: "HeySage.ai — landing page: Nobody on my team pushes back",
        width: 1920,
        height: 1135,
      },
      {
        src: "/images/projects/sage/landing-believe-in-it.jpg",
        alt: "HeySage.ai — landing page: They don't need to understand it — they need to see you believe in it",
        width: 1920,
        height: 1135,
      },
      {
        src: "/images/projects/sage/landing-join-conversation.jpg",
        alt: "HeySage.ai — join the conversation page",
        width: 1920,
        height: 1135,
      },
      {
        src: "/images/projects/sage/dashboard.jpg",
        alt: "HeySage.ai — user dashboard showing memories, insights, goals, and past conversations",
        width: 1920,
        height: 1135,
      },
      {
        src: "/images/projects/sage/conversation-transcript.jpg",
        alt: "HeySage.ai — real-time voice conversation transcript with Sage",
        width: 1920,
        height: 1135,
      },
      {
        src: "/images/projects/sage/goals.jpg",
        alt: "HeySage.ai — iOS app showing active goals and self-reflection tracking",
        width: 660,
        height: 1434,
      },
      {
        src: "/images/projects/sage/conversation.jpg",
        alt: "HeySage.ai — voice transcript showing direct, anti-sycophantic conversation",
        width: 660,
        height: 1434,
      },
      {
        src: "/images/projects/sage/sage-mode.jpg",
        alt: "HeySage.ai — personality mode selection with Default, Hipster, and Laura voices",
        width: 660,
        height: 1434,
      },
      {
        src: "/images/projects/sage/outreach.jpg",
        alt: "HeySage.ai — outreach settings with quiet hours, frequency, and notification channels",
        width: 660,
        height: 1434,
      },
      {
        src: "/images/projects/sage/transcript.jpg",
        alt: "HeySage.ai — voice transcript showing real-time conversation with personality",
        width: 660,
        height: 1434,
      },
    ],
    tags: ["voice-AI", "LiveKit", "Claude", "memory", "Python", "Next.js", "Swift", "personal-project"],
    category: "selected",
  },
  {
    slug: "hello-intuit",
    title: "Hello Intuit",
    date: "2024-05-01",
    role: "Design Technology Lead",
    client: "Intuit",
    shortDescription:
      "The arc from a voice-first prototype to a company-wide AI platform \u2014 building the case that conversation could be Intuit\u2019s next operating system.",
    longDescription: `<h3>Hello Intuit</h3>
<p>It started with a question nobody was asking yet: what if the first thing a new small business owner heard from Intuit wasn\u2019t a dashboard \u2014 it was a voice?</p>
<p>In May 2024, our team pitched Hello Intuit to senior leadership \u2014 an AI-driven voice assistant that could help solopreneurs and micro-businesses get off the ground. Not a chatbot bolted onto a product page. A real conversation that could walk someone through forming an LLC, understanding their tax obligations, and finding the right Intuit products for their situation. The insight was simple: these customers are overwhelmed and anxious about making the wrong choices. They don\u2019t want to read documentation. They want someone to talk to.</p>
<p>We built a working prototype around a persona named Alex \u2014 a content creator operating as a sole proprietor, trying to reduce taxes and set up for growth. The demo showed Hello Intuit recognizing Alex\u2019s QuickBooks data, recommending an S-corp conversion, surfacing tax filing steps, and jumpstarting a business tax return \u2014 all through natural voice conversation. It wasn\u2019t hypothetical. It worked.</p>
<h3>Intuit Intelligence</h3>
<p>Hello Intuit proved the concept. What came next was proving the architecture. The project evolved into Intuit Intelligence \u2014 a broader platform vision for how conversational AI could work across TurboTax, QuickBooks, Credit Karma, and Mailchimp. The question shifted from "can we build a voice bot?" to "can conversation become the connective tissue between all of Intuit\u2019s products?"</p>
<p>This meant designing systems that could hold context across product boundaries \u2014 understanding that a tax question in TurboTax might have implications for a QuickBooks setup, and that the AI should know that without being told. The work here was architectural: defining how voice, data, and personalization layers compose into something that feels like a single intelligence, even when it\u2019s reaching across multiple backend systems.</p>
<h3>Omni Voice</h3>
<p>The third evolution was Omni Voice \u2014 the realization that voice wasn\u2019t just another input modality. It was the missing orchestration layer. We were designing for a future where a customer could talk to Intuit the way they\u2019d talk to a trusted advisor: fluidly, across topics, across products, across time.</p>
<p>Omni Voice meant multi-modal experiences where the UI responded to the conversation in real time \u2014 voice controlling surfaces, pulling up relevant data, navigating between contexts. It meant ambient intelligence: the system anticipating what you\u2019d need based on where you were in your financial lifecycle. And it meant designing for trust \u2014 because when you\u2019re talking about someone\u2019s money, their business, their livelihood, the conversation has to earn the right to advise.</p>
<h3>The Arc</h3>
<p>What made this work meaningful wasn\u2019t any single prototype. It was the arc \u2014 from a scrappy voice demo to a platform strategy to a vision for how 100 million customers might interact with financial software through conversation. Each phase built on the last. Hello Intuit proved voice could carry real business logic. Intuit Intelligence proved it could scale across products. Omni Voice proved it could become the primary interface.</p>
<p>This is the work I keep thinking about: not the technology, but the design problem underneath it. How do you make a conversation feel like a relationship? How do you build trust through a speaker? How do you design an intelligence that knows when to lead, when to follow, and when to just listen?</p>`,
    featuredImage: {
      src: "/images/projects/hello-intuit/page-06.jpg",
      alt: "Hello Intuit \u2014 AI-driven voice assistant to power prosperity",
      width: 1920,
      height: 1082,
    },
    images: [
      {
        src: "/images/projects/hello-intuit/page-04.jpg",
        alt: "Hello Intuit \u2014 TL;DR: building a business-in-AI voice bot for solopreneurs and micro-businesses",
        width: 1920,
        height: 1082,
      },
      {
        src: "/images/projects/hello-intuit/page-05.jpg",
        alt: "Hello Intuit \u2014 problem statement: sole proprietors overwhelmed by compliance and tax decisions",
        width: 1920,
        height: 1082,
      },
      {
        src: "/images/projects/hello-intuit/page-07.jpg",
        alt: "Hello Intuit \u2014 benefits of using voice: accessibility, efficiency, personalization, hands-free, cost-effectiveness",
        width: 1920,
        height: 1082,
      },
      {
        src: "/images/projects/hello-intuit/page-08.jpg",
        alt: "Hello Intuit \u2014 Meet Alex, a content creator and QuickBooks customer seeking to reduce taxes",
        width: 1920,
        height: 1082,
      },
      {
        src: "/images/projects/hello-intuit/page-09.jpg",
        alt: "Hello Intuit \u2014 proactive outreach: notifying Alex about S-corp tax savings based on QuickBooks data",
        width: 1920,
        height: 1082,
      },
      {
        src: "/images/projects/hello-intuit/page-10.jpg",
        alt: "Hello Intuit \u2014 voice and UI confirming connected accounts for an accurate financial view",
        width: 1920,
        height: 1082,
      },
      {
        src: "/images/projects/hello-intuit/page-11.jpg",
        alt: "Hello Intuit \u2014 voice asks Alex about income goals and hiring plans to determine best entity type",
        width: 1920,
        height: 1082,
      },
      {
        src: "/images/projects/hello-intuit/page-17.jpg",
        alt: "Hello Intuit \u2014 conversation history, cross-app navigation, and ecosystem search",
        width: 1920,
        height: 1082,
      },
      {
        src: "/images/projects/hello-intuit/page-19.jpg",
        alt: "Hello Intuit \u2014 additional use-cases: access to money, scenario planning, proactive insights, hands-free operation",
        width: 1920,
        height: 1082,
      },
    ],
    embeds: [
      {
        type: "vimeo",
        src: "https://player.vimeo.com/video/1184401504",
        title: "Hello Intuit \u2014 voice assistant demo",
        aspectClass: "aspect-[4/3]",
      },
    ],
    tags: ["voice-AI", "conversational-AI", "Intuit", "platform", "strategy", "prototyping"],
    category: "selected",
  },
  {
    slug: "nike-free",
    title: "Nike Free Plus 2",
    date: "2011-09-23",
    role: "Creative Director",
    client: "Nike",
    shortDescription:
      "Nike Free was never just a shoe. It was a proposition \u2014 that the foot, left to its own devices, already knows how to move. Our work was to find the visual language that could hold that idea without collapsing it into advertisement.",
    longDescription: `<p>What we made had no single form. Five cities \u2014 New York, London, Los Angeles, Tokyo, Shanghai. Video. Photography. A 56-page zine. Brand assets that ended up on packaging, shirts, and boxes. This was tip-of-the-spear influencer work before that phrase existed \u2014 seeding a cultural object into the hands of people who shaped how the world dressed and moved.</p>
<p>The zine was where the philosophy lived. We shot editorials across four cities whose streets are themselves arguments about how humans inhabit space and motion. The fourth editorial was different: a collaboration with Oliver Helbig, a regular contributor to 032C, documenting the university that first inspired the Free's biomechanical logic. That one got the glossy treatment. Sixteen pages in full color, surrounded by 40 pages of heavy halftone distress \u2014 a deliberate lo-fi texture that mirrored the shoe's own democratic ethos. High and low, existing in the same binding.</p>
<p>But the zine's most radical gesture was a data visualization that the influencers themselves generated. We flew them to Nike headquarters, tracked their movement as they ran the campus, and rendered that motion data into visual form. Then we handed the controls back to them \u2014 letting each person shape and manipulate the output of their own body in motion. The results lived in the zine as artifacts of lived experience, not illustration. For this we brought in Zach Lieberman, Theo Watson, and Emily Gobeille \u2014 three of the most consequential creative coders working anywhere \u2014 to build the system that made it possible.</p>
<p>We photographed the full shoe line early, delivering print-ready files alongside hero images that traveled into retail, into packaging, into the distributed consciousness of an audience that didn't know they were being told a story.</p>
<p>The team also developed the code for an in-store interactive fly-through \u2014 and this was consequential. It was the first time Nike had ever let anyone external have access to all of the Nike+ running data. They had to fight through it internally; there had been incidents around privacy, people lurking on runners\u2019 paths, and the brand was understandably careful. They got us the permission as creative artists, and we built a map where you could see every individual Nike+ run happening in real time. We focused on New York City \u2014 the original plan was every city, but we pulled back \u2014 and sped the data up about five times so you could fly around and watch the whole organism breathe. Theo and the team had fully built it out, down to the exact in-store experience. It got pulled at the last minute because the Nike brand team didn\u2019t want it associated with anything that resembled a video game. That was a hard moment. We turned what we had into videos. It\u2019s still one of my favorite projects I\u2019ve ever worked on.</p>
<p>That's the work that lasts. Not the asset. The argument it makes.</p>`,
    featuredImage: {
      src: "/images/projects/nike-free/featured.jpg",
      alt: "Nike Free Plus 2 campaign photography",
      width: 746,
      height: 499,
    },
    images: [
      {
        src: "/images/projects/nike-free/01.jpg",
        alt: "Nike Free zine group spread",
        width: 746,
        height: 553,
      },
      {
        src: "/images/projects/nike-free/02.jpg",
        alt: "Nike Free Tokyo editorial",
        width: 746,
        height: 498,
      },
      {
        src: "/images/projects/nike-free/03.jpg",
        alt: "Nike Free campaign home spread",
        width: 746,
        height: 500,
      },
      {
        src: "/images/projects/nike-free/04.jpg",
        alt: "Nike Free editorial — Oliver Helbig",
        width: 746,
        height: 488,
      },
    ],
    embeds: [
      {
        type: "vimeo",
        src: "https://player.vimeo.com/video/25222988",
        title: "Nike Free Plus 2 \u2014 City Pack Zine",
      },
      {
        type: "vimeo",
        src: "https://player.vimeo.com/video/29151772",
        title: "Nike Free Plus 2 \u2014 21 Mercer Installation",
      },
    ],
    tags: [
      "branding",
      "print",
      "photography",
      "campaign",
      "retail",
      "installation",
    ],
    category: "selected",
  },
  {
    slug: "tracy-chapman",
    title: "Tracy Chapman",
    date: "2012-06-15",
    role: "Creative Director, Developer",
    client: "Tracy Chapman / Elektra Records",
    shortDescription:
      "Tracy Chapman\u2019s album was called Our Bright Future. Optimistic. Possibly ironic. The title resisted resolution \u2014 and that resistance became the work.",
    longDescription: `<p>What we built had no precedent. Not a game. Not a website. Not an animation. Something that had never existed before: a participatory narrative where the meaning of the story was structurally dependent on the audience\u2019s choices. The coloring book was not metaphor \u2014 it was mechanism. Visitors painted directly onto the canvas while hand-drawn animations responded to Tracy\u2019s music. The world took shape under your hand. And the brightness of that future \u2014 the one the album promised, or questioned \u2014 was a direct consequence of how you chose to fill it in.</p>
<p>This was not interactivity in the conventional sense. It was authorship distributed across thousands of strangers, each one deciding, brush stroke by brush stroke, whether Chapman\u2019s titular optimism was sincere or elegiac. The work existed in the space between intention and interpretation \u2014 which is, of course, where all meaningful art lives.</p>
<p>Built entirely in Flash, it earned recognition from Communication Arts and the FWA. But the more enduring achievement was conceptual: we had made something the medium had never produced. A story with no fixed emotional valence. An artifact whose meaning you had to earn.</p>`,
    featuredImage: {
      src: "/images/projects/tracy-chapman/01.jpg",
      alt: "Tracy Chapman site \u2014 animated scene",
      width: 1183,
      height: 710,
    },
    images: [
      {
        src: "/images/projects/tracy-chapman/01.jpg",
        alt: "Tracy Chapman site — animated scene 1",
        width: 1183,
        height: 710,
      },
      {
        src: "/images/projects/tracy-chapman/02.jpg",
        alt: "Tracy Chapman site — animated scene 2",
        width: 1183,
        height: 710,
      },
      {
        src: "/images/projects/tracy-chapman/03.jpg",
        alt: "Tracy Chapman site — animated scene 3",
        width: 1183,
        height: 710,
      },
      {
        src: "/images/projects/tracy-chapman/04.png",
        alt: "Tracy Chapman home screen",
        width: 1324,
        height: 1014,
      },
      {
        src: "/images/projects/tracy-chapman/05.png",
        alt: "Tracy Chapman alternate home layout",
        width: 1259,
        height: 766,
      },
      {
        src: "/images/projects/tracy-chapman/06.png",
        alt: "Tracy Chapman interactive interface — coloring mode",
        width: 1340,
        height: 994,
      },
      {
        src: "/images/projects/tracy-chapman/07.png",
        alt: "Tracy Chapman interactive interface — drawing mode",
        width: 1401,
        height: 1027,
      },
      {
        src: "/images/projects/tracy-chapman/08.png",
        alt: "Tracy Chapman interactive interface — animation",
        width: 1354,
        height: 1002,
      },
      {
        src: "/images/projects/tracy-chapman/09.png",
        alt: "Tracy Chapman interactive interface — paint tool",
        width: 1364,
        height: 1038,
      },
      {
        src: "/images/projects/tracy-chapman/10.png",
        alt: "Tracy Chapman interactive interface — gallery view",
        width: 1392,
        height: 1075,
      },
      {
        src: "/images/projects/tracy-chapman/11.png",
        alt: "Tracy Chapman interactive interface — music mode",
        width: 1468,
        height: 926,
      },
      {
        src: "/images/projects/tracy-chapman/12.png",
        alt: "Tracy Chapman interactive interface — detail",
        width: 1337,
        height: 955,
      },
      {
        src: "/images/projects/tracy-chapman/13.png",
        alt: "Tracy Chapman interactive interface — final",
        width: 1249,
        height: 906,
      },
      {
        src: "/images/projects/tracy-chapman/14.jpg",
        alt: "Tracy Chapman full-page experience",
        width: 622,
        height: 1595,
      },
    ],
    tags: ["interactive", "animation", "music", "flash"],
    category: "selected",
  },
  {
    slug: "aesop-rock",
    title: "Aesop Rock — None Shall Pass",
    date: "2007-06-01",
    role: "Director, Animator",
    client: "Aesop Rock / Def Jux",
    shortDescription:
      'Music video for "None Shall Pass" — hand-drawn illustration and digital animation built to keep pace with one of the densest verses in underground hip-hop.',
    longDescription: `<p>Directed and animated the video for Aesop Rock's "None Shall Pass," released on Definitive Jux. The track is a knot of internal rhyme and sideways storytelling; the visuals had to feel equally restless without turning into a literal illustration of every line.</p>
<p>The approach mixed hand-drawn frames and digital compositing — characters and environments that could smear, repeat, and break apart on beat, letting the surreal tone land without over-explaining the lyrics. The goal was a piece that read as its own dream logic: funny, anxious, and a little wrong in the way the song is.</p>`,
    featuredImage: {
      src: "/images/projects/aesop-rock/01.jpg",
      alt: "Aesop Rock — None Shall Pass, illustrated video frame",
      width: 746,
      height: 429,
    },
    images: [
      {
        src: "/images/projects/aesop-rock/02.jpg",
        alt: "Aesop Rock — None Shall Pass, animation frame",
        width: 746,
        height: 500,
      },
      {
        src: "/images/projects/aesop-rock/03.jpg",
        alt: "Aesop Rock — None Shall Pass, scene",
        width: 746,
        height: 497,
      },
    ],
    embeds: [
      {
        type: "vimeo",
        src: "https://player.vimeo.com/video/1833784?badge=0&autopause=0&player_id=0&app_id=58479",
        title: "None Shall Pass by Aesop Rock",
        aspectClass: "aspect-[4/3]",
      },
    ],
    tags: ["animation", "music-video", "illustration", "def-jux"],
    category: "selected",
  },
  {
    slug: "kqed",
    title: "KQED",
    date: "2018-08-01",
    role: "Director of Design and Development",
    client: "KQED",
    shortDescription:
      "KQED is one of the projects I\u2019m most proud of. Not because of the technology \u2014 though we built a lot \u2014 but because it mattered. Public media needed this, and we left it in a better place than we found it.",
    longDescription: `<p>My history with KQED actually goes back further than most people know. In the mid-2000s, I\u2019d built an NPR/PBS \u201csupersite\u201d concept that was presented to the heads of NPR and KQED. That project helped secure over a hundred million dollars in congressional funding. A decade later, they came back. They knew I\u2019d been working in this space, and they wanted to reimagine their digital presence from the ground up.</p>
<p>The original pitch from their side was an iPad app. I pushed back. As exciting as iPad apps were at the time, they were limited \u2014 walled gardens with short shelf lives. I argued for the web. Let\u2019s reimagine what KQED.org could be. That argument won, and we slowly began the process of transforming what was a legacy JSP system into a modern, node-based architecture.</p>
<p>We started with WordPress as the content layer and launched a few things, including an ambitious first version of the election results dashboard. That project connected into all nine Bay Area counties \u2014 every race on every ballot, reported in real time. The data came from a combination of AP\u2019s national feed (which is excellent for top-of-ticket races) and a team of KQED reporters relentlessly calling county election offices for down-ballot local results. Those local races were the ones that drove our coverage. On election night 2016, PBS NewsHour actually broadcast live out of our station. That dashboard pulled over a million views. It was also the night Hillary Clinton lost, which was terrible.</p>
<p>A couple of years later we rebuilt even further \u2014 a completely new React-based frontend sitting on top of node microservices, with advanced caching on Kubernetes back when DevOps was still a novel concept. We had feeds running everywhere, ElasticSearch powering the content layer, and a system that could actually handle the scale of Northern California\u2019s largest public media organization.</p>
<p>The navigation alone was a design problem that took months. KQED has a television station, a radio station, a massive journalism department with one of the largest newsrooms in Northern California, plus podcasts, events, education \u2014 all of it competing for presence. We couldn\u2019t give everyone top billing, so the information architecture became an exercise in diplomacy as much as design.</p>
<p>Along the way we shipped segmented audio workflows that delivered content to Google News, reaching over 600K audio downloads per month. We built Alexa and Google Home experiences for KQED\u2019s Pledge Free Stream. And right before I left, we finally got through the massive redesign of KQED Live \u2014 the thing that tied it all together.</p>
<p>I basically staffed up and built the product team from scratch. There were key collaborators \u2014 Colleen, Tim, others who were instrumental \u2014 but the arc of it was taking what had been essentially me and growing it into a real product organization. I left right before COVID in 2020. I wanted a break, and I\u2019d given it everything I had.</p>
<p>Looking back, this is some of my proudest work. There\u2019s something to be said about doing service \u2014 about giving back to an institution that gives so much to its community. KQED needed this. It was a massive lift. And the world needs more like NPR.</p>`,
    featuredImage: {
      src: "/images/projects/kqed/featured.jpg",
      alt: "KQED website redesign — homepage",
      width: 2456,
      height: 1280,
    },
    images: [
      {
        src: "/images/projects/kqed/01.jpg",
        alt: "KQED homepage design — alternate view",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/kqed/02.jpg",
        alt: "KQED article page design",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/kqed/03.jpg",
        alt: "KQED content layout",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/kqed/04-elections-dashboard.jpg",
        alt: "KQED Elections Dashboard — results view",
        width: 1228,
        height: 640,
      },
      {
        src: "/images/projects/kqed/05-elections-dashboard.jpg",
        alt: "KQED Elections Dashboard — data visualization",
        width: 1228,
        height: 640,
      },
      {
        src: "/images/projects/kqed/06-elections-dashboard.jpg",
        alt: "KQED Elections Dashboard — detail view",
        width: 1228,
        height: 640,
      },
      {
        src: "/images/projects/kqed/07-arts-app.jpg",
        alt: "KQED Arts iPad app",
        width: 1228,
        height: 640,
        caption:
          "KQED Arts iPad App, 2012\nOriginal iPad app for KQED Arts, built around a two-sided menu system that allowed for nearly infinite combinations of stories, media, and pathways. The experience was designed to feel fluid and dynamic, shaped around the early possibilities of tablet-native interaction for its 2012 launch.",
      },
      {
        src: "/images/projects/kqed/08-arts-app.jpg",
        alt: "KQED Arts iPad app — content view",
        width: 1228,
        height: 640,
      },
      {
        src: "/images/projects/kqed/09-turbulent-decade.jpg",
        alt: "KQED Our Turbulent Decade — overview",
        width: 2456,
        height: 1280,
        caption:
          "Our Turbulent Decade, 2019-2020\nA collaboration with KQED Arts journalists to create a reflective wrap-up of the 2010s, balancing editorial storytelling with motion-led interaction. The offset border animation helped frame each section with subtle movement and structure, and the project was developed in 2019 before launching in 2020.",
      },
      {
        src: "/images/projects/kqed/10-turbulent-decade.jpg",
        alt: "KQED Our Turbulent Decade — timeline",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/kqed/11-turbulent-decade.jpg",
        alt: "KQED Our Turbulent Decade — data view",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/kqed/12-turbulent-decade.jpg",
        alt: "KQED Our Turbulent Decade — detail",
        width: 2456,
        height: 1280,
      },
    ],
    tags: ["product", "design-systems", "react", "public-media"],
    category: "selected",
  },
  //   {
  //     slug: "helix",
  //     title: "Helix",
  //     date: "2021-03-01",
  //     role: "Director of Technology",
  //     client: "Helix / Aleph",
  //     shortDescription:
  //       "A mobile app for clinical trials that helped doctors and clinicians align to strict protocols through notifications, emails, and dashboards.",
  //     longDescription: `<p>Helix is a clinical trial management platform that connects researchers, doctors, and participants. As Director of Technology at Aleph, I led the development of their mobile application and dashboard systems.</p>
  // <p>The app improved protocol compliance by providing real-time notifications and streamlined workflows for clinicians. Our work increased the user acquisition success metric by over 22%.</p>
  // <p>At a time of exponential innovation in biotechnology, a focus on leveraging genomics at the scale of populations made Helix a vital repository of data and information during the COVID-19 pandemic.</p>
  // <p>Aleph delivered on a purposeful project plan, including the migration of content from multiple legacy platforms, a broad approach to content strategy and management, and a complete interactive design system featuring well-documented processes, usage and development recommendations.</p>`,
  //     featuredImage: {
  //       src: "/images/projects/helix/featured.webp",
  //       alt: "Helix clinical trial app",
  //       width: 2456,
  //       height: 1280,
  //     },
  //     images: [
  //       {
  //         src: "/images/projects/helix/01.webp",
  //         alt: "Helix app interface — dashboard",
  //         width: 2456,
  //         height: 1280,
  //       },
  //       {
  //         src: "/images/projects/helix/02.webp",
  //         alt: "Helix app interface — protocol view",
  //         width: 2456,
  //         height: 1280,
  //       },
  //       {
  //         src: "/images/projects/helix/03.webp",
  //         alt: "Helix app interface — notifications",
  //         width: 2456,
  //         height: 1280,
  //       },
  //       {
  //         src: "/images/projects/helix/04-ad.png",
  //         alt: "Helix advertising creative",
  //         width: 3323,
  //         height: 2471,
  //       },
  //       {
  //         src: "/images/projects/helix/05-hero.png",
  //         alt: "Helix hero image — campaign",
  //         width: 3784,
  //         height: 2815,
  //       },
  //       {
  //         src: "/images/projects/helix/06-hero.png",
  //         alt: "Helix hero image — variant 1",
  //         width: 3810,
  //         height: 2834,
  //       },
  //       {
  //         src: "/images/projects/helix/08-empower.png",
  //         alt: "Helix Empower campaign — overview",
  //         width: 2732,
  //         height: 1641,
  //       },
  //       {
  //         src: "/images/projects/helix/09-empower.png",
  //         alt: "Helix Empower campaign — detail",
  //         width: 2732,
  //         height: 1560,
  //       },
  //       {
  //         src: "/images/projects/helix/10-empower.png",
  //         alt: "Helix Empower campaign — mobile",
  //         width: 2732,
  //         height: 1350,
  //       },
  //     ],
  //     tags: ["mobile", "react-native", "healthcare", "ux"],
  //     category: "selected",
  //   },
  {
    slug: "aleph-rebrand",
    title: "Aleph Rebrand",
    date: "2024-01-31",
    role: "Creative Director",
    client: "Aleph",
    shortDescription:
      "A new website and brand evolution that reflects how Aleph provides creative direction and tech guidance to its clients, inspired by smart robots.",
    longDescription: `<p>Aleph's core offerings as a creative technology partner had expanded and shifted over the years as the studio's talents and focus evolved. The rebrand and new website were built to place those capabilities clearly inside a fast-changing technical landscape and make the latest expression of the studio visible.</p>
<p>The new identity was designed to reflect the collective diversity of Aleph's creative influences, the empathy the team brings to collaborators, and the irreverent nature of the work it wants to do. The studio's client work centers on shaping the space around information with a creative vision that is both ambitious and inherently possible.</p>
<p>A core tenet of the project was that coding is a creative act, not simply a byproduct of design. The brand system had to hold both the static logic of printed pages and the dynamic movement of interactive art, treating code as something foundational and transformative rather than downstream.</p>
<p>The work also embraced AI and LLMs as tools for creation. Prompting and generated imagery were used as a way to translate ideas into visual inspiration, accelerate mood boards, and surface surrealist references while keeping human judgment, taste, and experience at the center of the process.</p>
<p>The result was a brand and website that position Aleph as a guide for clients navigating rapid technical change. The supporting film and imagery extend that point of view into motion, framing the studio's identity around fearless experimentation, creative leadership, and new tools.</p>`,
    featuredImage: {
      src: "/images/experiments/refining-the-point/featured.jpg",
      alt: "Aleph rebrand hero composition",
      width: 3500,
      height: 2000,
    },
    images: [
      {
        src: "/images/experiments/refining-the-point/brand-mark.png",
        alt: "Aleph rebrand brand mark",
        width: 2382,
        height: 2336,
        caption:
          "Brand Mark\nA primary identity form from the rebrand, used to anchor the refreshed website and broader visual system.",
      },
      {
        src: "/images/experiments/refining-the-point/flowers.png",
        alt: "Aleph AI-assisted floral study",
        width: 1080,
        height: 541,
        caption:
          "AI Visual Reference\nGenerated imagery used as creative inspiration during the rebrand process, helping translate ideas into mood and atmosphere.",
      },
      {
        src: "/images/experiments/refining-the-point/animals.png",
        alt: "Aleph AI-assisted animal collage",
        width: 1448,
        height: 1056,
        caption:
          "Smart Robot Flourishes\nPart of the surreal visual language described in the essay, where AI acts as a creative partner rather than a replacement for authorship.",
      },
    ],
    embeds: [
      {
        type: "video",
        src: "/videos/okrock.mp4",
        title: "Refining the Point — Aleph Rebrand Process Film",
      },
      {
        type: "instagram",
        src: "https://www.instagram.com/p/C2QU1e5Ocyv/embed/",
        title: "Aleph Rebrand — Instagram",
      },
    ],
    tags: ["branding", "identity", "creative-technology", "ai-art-direction"],
    category: "selected",
  },
  {
    slug: "mercurius",
    title: "Mercurius Beer",
    date: "2023-05-01",
    role: "Creative Director",
    client: "Mercurius",
    shortDescription:
      "Brand identity and packaging design for Mercurius craft beer.",
    longDescription: `<p>Designed the complete brand identity and packaging system for Mercurius, a craft beer brand. The project spanned from naming and logo design through to the final can and bottle label production.</p>`,
    featuredImage: {
      src: "/images/projects/mercurius/featured.jpg",
      alt: "Mercurius beer branding",
      width: 2491,
      height: 2183,
    },
    images: [
      {
        src: "/images/projects/mercurius/01.jpg",
        alt: "Mercurius brand — label design",
        width: 2457,
        height: 1500,
      },
      {
        src: "/images/projects/mercurius/02.jpg",
        alt: "Mercurius brand — final label",
        width: 1179,
        height: 720,
      },
      {
        src: "/images/projects/mercurius/03.jpg",
        alt: "Mercurius brand — logo variant",
        width: 1179,
        height: 720,
      },
      {
        src: "/images/projects/mercurius/04.jpg",
        alt: "Mercurius brand — color palette",
        width: 1600,
        height: 1600,
      },
      {
        src: "/images/projects/mercurius/05.jpg",
        alt: "Mercurius brand — can packaging",
        width: 2457,
        height: 1500,
      },
    ],
    tags: ["branding", "packaging", "identity"],
    category: "selected",
  },
  {
    slug: "exploratorium",
    title: "Exploratorium",
    date: "2015-06-01",
    role: "Design Director",
    client: "Exploratorium",
    shortDescription:
      "The Exploratorium holds a special place for me. My partner and close friends work there, and when I was invited in to lead a redesign, I understood immediately what was at stake. This wasn\u2019t a routine project — it coincided with the museum\u2019s biggest transformation in its history: leaving the Palace of Fine Arts for a new building at Pier 15 on the San Francisco waterfront. The site needed to carry that same energy. Not a refresh. A reimagining.",
    longDescription: `<p>Three things made this project genuinely hard, and genuinely interesting.</p>
<p>The first was scale. The Exploratorium had over a hundred thousand pages — each one individually hand-coded in HTML, built up over decades by people who cared deeply about what they were making but had no unified system underneath it all. Part of our mandate was to migrate all of that into a database-driven architecture without losing the richness of what existed. That\u2019s a different kind of design problem: not just what the new thing looks like, but how you honor the old thing while making it sustainable.</p>
<p>The second was brand. The museum was developing a new visual identity — largely externally — and our job was to translate that into a digital experience. There was some tension there, because the Exploratorium has always been more focused on physical exhibit design than digital presence. Even though they\u2019ve done pioneering work in digital and computational art (they hosted one of the earliest computational art exhibitions ever), the website wasn\u2019t the core experience. Our job was to make it feel native to who they are, not just a digital brochure.</p>
<p>The third was the store. We built a new e-commerce experience that wasn\u2019t just a product catalog — it reflected the Exploratorium\u2019s ethos. The thinking behind each product, the ideas embedded in it, the connection back to the exhibits and the science. Objects as extensions of curiosity.</p>
<p>What unified the redesign visually was something that emerged from a lot of sessions with the internal teams: clean, white, almost lab-like layouts — the kind of precision you\u2019d associate with chemistry slides, or looking closely at something under a microscope. It gave the site a sense of scientific rigor without losing warmth. The information architecture mapped to the museum\u2019s six gallery zones — Tinkering Studio, Light and Sound, Human Behaviour, Living Systems, Outdoor exhibits, and the Bay Observatory — each with its own visual rhythm, all holding together as one coherent system.</p>
<p>The Artists-in-Residence section got particular attention because that program sits at the heart of what makes the Exploratorium unusual: the genuine overlap between artists and scientists, the creative process made visible. We gave it a proper editorial home — profiles, project documentation, a sense of how residencies actually unfold.</p>
<p>Some exhibits demanded their own moment, and the Gender Blender was one of them. A standout piece in the Human Behaviour gallery, it\u2019s the kind of exhibit that stops people in their tracks — playful on the surface, genuinely provocative underneath. Getting that right on the site meant finding a way to convey the experience without flattening it, to let the strangeness and intelligence of the piece come through in photography and framing rather than just description.</p>
<p>The result was a site that felt like walking into the building itself: layered, curious, inviting you to go deeper. If you\u2019ve never been to Pier 15, go. The people in the Tinkering Studio alone are worth the trip.</p>`,
    featuredImage: {
      src: "/images/projects/exploratorium/01.jpg",
      alt: "Exploratorium website — homepage with 'more: science close up' feature",
      width: 1280,
      height: 1212,
    },
    images: [
      {
        src: "/images/projects/exploratorium/01.jpg",
        alt: "Exploratorium homepage — gallery grid with Tinkering Studio, Pier 15 move announcement",
        width: 1280,
        height: 1212,
      },
      {
        src: "/images/projects/exploratorium/02.jpg",
        alt: "Exploratorium Artists-in-Residence — editorial page with program history and current residents",
        width: 1280,
        height: 1640,
      },
      {
        src: "/images/projects/exploratorium/03.jpg",
        alt: "Exploratorium store — product grid",
        width: 1280,
        height: 1107,
      },
      {
        src: "/images/projects/exploratorium/04.jpg",
        alt: "Exploratorium store — detail view",
        width: 1280,
        height: 1107,
      },
      {
        src: "/images/projects/exploratorium/05.jpg",
        alt: "Exploratorium visit page — plan your trip to Pier 15",
        width: 1280,
        height: 1508,
      },
    ],
    tags: ["product", "museum", "education", "information-architecture"],
    category: "selected",
  },
  {
    slug: "moma",
    title: "MoMA \u2014 Design and the Elastic Mind",
    date: "2005-03-01",
    role: "Designer, Developer",
    client: "MoMA",
    shortDescription:
      "A set of kiosks and a companion website for MoMA\u2019s exhibition on speculative design, built with Paola Antonelli. The brief, delivered directly: \u201cthis looks too professional. I want Santa Claus pissing in the snow. I want something radical.\u201d",
    longDescription: `<p>This project started in 2005 with a cold call from Paola Antonelli\u2019s office. She had seen our work in Howe Magazine after it won an award, and out of nowhere they wanted to talk about an exhibition MoMA was organizing on speculative and provocative design.</p>
<p>They asked for an RFP. We didn\u2019t really know how to respond to an RFP at MoMA, so we didn\u2019t write one. We got the whole team together, wrote about our own experiences with risk for a week, and hardbound it into a single copy of a book. We mailed it to her. We all thought it was a joke \u2014 that this was a moment we didn\u2019t have a real shot at. She was very stoked.</p>
<p>We got the project. The first presentation went badly and it made the project. \u201cThis looks too professional,\u201d she told us. \u201cI didn\u2019t pay you guys to come here and do this. This is just design. Go throw this shit away. I want Santa Claus pissing in the snow. I want something radical.\u201d</p>
<p>We came back with a treatment that staged the whole exhibition as a dystopian future landscape you could navigate through. Each zone held a collection. Each object you could click on and surface, as if you were finding it in the wreckage. The navigation wasn\u2019t a menu \u2014 it was an environment. They liked it enough to ask us to build a physical kiosk version of it that sat inside MoMA for three months alongside the exhibition.</p>
<p>This was the first show at the new MoMA after they\u2019d come back from PS1 during the renovation. Being part of that \u2014 the opening show in the new building \u2014 was a big deal for the whole team. Twenty years later it\u2019s still one of the projects I\u2019m proudest of having worked on.</p>`,
    featuredImage: {
      src: "/images/projects/moma/01.jpg",
      alt: "MoMA \u2014 Design Takes on Risk, kiosk and microsite",
      width: 746,
      height: 510,
    },
    images: [
      { src: "/images/projects/moma/02.jpg", alt: "MoMA exhibition detail", width: 800, height: 524 },
      { src: "/images/projects/moma/03.jpg", alt: "MoMA exhibition space", width: 1200, height: 800 },
      { src: "/images/projects/moma/04.jpg", alt: "MoMA interactive display", width: 746, height: 497 },
      { src: "/images/projects/moma/05.jpg", alt: "MoMA design showcase", width: 800, height: 524 },
      { src: "/images/projects/moma/06.jpg", alt: "MoMA exhibition gallery", width: 1200, height: 800 },
      { src: "/images/projects/moma/07.jpg", alt: "MoMA visitor interaction", width: 800, height: 524 },
      { src: "/images/projects/moma/08.jpg", alt: "MoMA exhibition signage", width: 800, height: 524 },
      { src: "/images/projects/moma/09.jpg", alt: "MoMA installation view", width: 800, height: 524 },
      { src: "/images/projects/moma/10.jpg", alt: "MoMA exhibition closing", width: 800, height: 524 },
    ],
    tags: ["interactive", "museum", "exhibition", "kiosk", "MoMA"],
    category: "selected",
  },
  {
    slug: "nike-nsw",
    title: "Nike NSW",
    date: "2010-06-01",
    role: "Creative Director, Director",
    client: "Nike",
    shortDescription:
      "Microsite and 6 short films for Nike Sportswear's flagship collection — merging fashion film, interactive product exploration, and technical storytelling.",
    longDescription: `<p>Nike Sportswear was Nike's bid to take its technical innovation and dress it in something you'd actually want to wear on the street. The NSW collection — Tech Composite Fleece, Featherweight Windrunner, and the rest — needed a digital presence that could hold both the fashion and the engineering.</p>
<p>We built a microsite that worked as both a collection browser and a film portal. The product grid floated garments in three-dimensional space against a cool studio backdrop, letting users navigate by category — MNS, WMNS, Jackets, Shirts, Sweats, Hats, Pants — with each piece linking out to detailed product pages featuring macro photography (riri zippers, ultrasonic seam taping, bonded hood peaks) and technical spec overlays.</p>
<p>Alongside the site, we directed 6 short films that treated the garments as characters rather than products. The films used timecode overlays and tight cinematography to create a sense of movement and precision that matched the engineering ethos of the line. Each film tied directly into the microsite, so the experience flowed between watching and shopping without a hard break.</p>
<p>The project was one of the first to blur the line between fashion film and interactive commerce at Nike — treating the web as a space where storytelling and product could coexist without one subordinating the other.</p>`,
    featuredImage: {
      src: "/images/projects/nike-nsw/02.jpg",
      alt: "Nike NSW — collection browser with floating garments in 3D grid",
      width: 746,
      height: 497,
    },
    images: [
      {
        src: "/images/projects/nike-nsw/01.jpg",
        alt: "Nike NSW — studio wall with production boards, film stills, and garment flats",
        width: 746,
        height: 495,
      },
      {
        src: "/images/projects/nike-nsw/03.jpg",
        alt: "Nike NSW — film still with timecode overlay, neon Windrunner detail",
        width: 746,
        height: 420,
      },
      {
        src: "/images/projects/nike-nsw/04.jpg",
        alt: "Nike NSW — macro detail of riri zipper on Tech Composite Fleece",
        width: 746,
        height: 420,
      },
      {
        src: "/images/projects/nike-nsw/05.jpg",
        alt: "Nike NSW — Tech Composite Fleece product page with technical specs and hotspot annotations",
        width: 746,
        height: 497,
      },
      {
        src: "/images/projects/nike-nsw/06.jpg",
        alt: "Nike NSW — campaign editorial detail",
        width: 746,
        height: 497,
      },
    ],
    embeds: [
      {
        type: "vimeo",
        src: "https://player.vimeo.com/video/10476719?badge=0&autopause=0&player_id=0&app_id=58479",
        title: "NIKE NSW",
      },
    ],
    tags: ["film", "interactive", "fashion", "nike", "e-commerce"],
    category: "selected",
  },
  {
    slug: "dockers-shk",
    title: "Dockers Super Hard Khakis",
    date: "2013-06-01",
    role: "Creative Director",
    client: "Dockers",
    shortDescription:
      "A branded campaign for Dockers SHK that put skateboarders in khakis and asked what happens when workwear meets street culture.",
    longDescription: `<p>Dockers Super Hard Khakis were built to take a beating — reinforced seams, heavy-duty twill, a construction spec borrowed from workwear rather than fashion. The question was how to market a pair of khakis to people who would never self-identify as khaki wearers. The answer was skateboarding.</p>
<p>We produced a full campaign built around skaters wearing SHK in the wild — no studio shoots, no catalog posing. The photography used long exposures and desaturated tones to create a cinematic quality that felt more like an editorial in a skate mag than an ad for pants. One of the hero images composited a frozen skater against his own motion blur, a visual metaphor for the pants themselves: still holding their shape while everything around them moves.</p>
<p>The campaign ran across digital and print, with a lookbook that paired the motion photography with product detail and lifestyle context. The work succeeded because it took Dockers seriously as a material rather than a brand — treating the khaki as a substrate for culture rather than the other way around.</p>`,
    featuredImage: {
      src: "/images/projects/dockers-shk/01.jpg",
      alt: "Dockers SHK — skater frozen against motion blur, Super Hard Khakis lookbook cover",
      width: 792,
      height: 1224,
    },
    images: [
      {
        src: "/images/projects/dockers-shk/01.jpg",
        alt: "Dockers SHK — hero image with frozen skater and motion-blur double exposure",
        width: 792,
        height: 1224,
      },
      {
        src: "/images/projects/dockers-shk/02.jpg",
        alt: "Dockers SHK — skater grinding at SF industrial park, desaturated editorial tone",
        width: 1920,
        height: 1280,
      },
      {
        src: "/images/projects/dockers-shk/03.jpg",
        alt: "Dockers SHK — kickflip in Golden Gate Park, foggy morning light",
        width: 1920,
        height: 1280,
      },
      {
        src: "/images/projects/dockers-shk/04.jpg",
        alt: "Dockers SHK — skating San Francisco streets",
        width: 1920,
        height: 1280,
      },
      {
        src: "/images/projects/dockers-shk/05.jpg",
        alt: "Dockers SHK — lifestyle photography",
        width: 1920,
        height: 1281,
      },
      {
        src: "/images/projects/dockers-shk/06.jpg",
        alt: "Dockers SHK — skate session detail",
        width: 1920,
        height: 1280,
      },
      {
        src: "/images/projects/dockers-shk/07.jpg",
        alt: "Dockers SHK — campaign photography",
        width: 1920,
        height: 1280,
      },
    ],
    tags: ["photography", "skateboarding", "fashion", "campaign"],
    category: "selected",
  },
  {
    slug: "huf-sf",
    title: "HUF",
    date: "2008-01-01",
    role: "Designer, Developer",
    client: "HUF",
    shortDescription:
      "A long-running creative partnership with Keith Hufnagel and HUF — building the digital presence for one of San Francisco's defining streetwear brands.",
    longDescription: `<p>The relationship with HUF and its founder Keith Hufnagel spanned years and touched nearly every aspect of the brand's digital life. HUF was one of those rare brands that didn't need to be explained to its audience — if you knew, you knew — but it still needed a web presence that matched the precision and taste of what Keith was building in the physical world.</p>
<p>We designed and developed hufsf.com through multiple iterations, including the e-commerce platform, seasonal lookbooks, and collaboration launches. The site featured product photography with the kind of obsessive detail Keith brought to everything — the Nike SB x HUF Air Trainer collab got its own interactive showcase, with the shoe rendered from multiple angles against a clean white field, information overlays triggered by cursor position, and the HUF branding sitting quietly in the corner like a signature on a painting.</p>
<p>The seasonal product grids were designed to feel like a curated shop window rather than a catalog — beanies, button-downs, sneakers, and accessories arranged with the same eye that Keith brought to the physical retail space on Bush Street. The site's green accent color and Futura-adjacent type became as recognizable online as the HUF triple-triangle was on the street.</p>
<p>Keith passed in 2020. The work we did together remains some of the most satisfying of my career — not because of scale or awards, but because it was honest. The brand said what it was, and the digital work tried to do the same.</p>`,
    featuredImage: {
      src: "/images/projects/huf-sf/01.jpg",
      alt: "HUF — Nike SB x HUF Air Trainer collaboration product page",
      width: 1200,
      height: 800,
    },
    images: [
      {
        src: "/images/projects/huf-sf/01.jpg",
        alt: "HUF — Nike SB Air Trainer collaboration with product detail overlay",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/02.jpg",
        alt: "HUF — Nike SB Air Trainer top-down view",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/03.jpg",
        alt: "HUF — product page detail",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/04.jpg",
        alt: "HUF — e-commerce product grid",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/05.jpg",
        alt: "HUF — seasonal lookbook grid with product photography",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/06.jpg",
        alt: "HUF — campaign imagery",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/07.jpg",
        alt: "HUF — beanie product display",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/08.jpg",
        alt: "HUF — lookbook editorial",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/09.jpg",
        alt: "HUF — collection page",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/10.jpg",
        alt: "HUF — product photography",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/11.jpg",
        alt: "HUF — retail and brand presence",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["interactive", "streetwear", "branding", "e-commerce"],
    category: "selected",
  },
  {
    slug: "okml",
    title: "OK Media Lab",
    date: "2014-03-01",
    role: "Founder, Instructor",
    client: "OrdinaryKids",
    shortDescription:
      "A 6-week workshop teaching creatives to build Arduino-based interactive installations, culminating in a gallery show at Lowerdeck Gallery in San Francisco.",
    longDescription: `<p>OK Media Lab grew out of a simple observation: designers and artists were surrounded by cheap, powerful hardware — Arduinos, sensors, LEDs, servos — but most of them had no idea how to use any of it. The gap between wanting to make physical interactive work and actually doing it was a soldering iron and six Tuesday nights.</p>
<p>OKML was a 6-week workshop held at the OrdinaryKids studio, open to creatives with zero electronics experience. Each session introduced a new concept — basic circuits, sensor input, servo control, Processing communication, projection mapping — and each participant worked toward a final installation piece. The structure was deliberately low-ceremony: free beer courtesy of the Sea Star, an Arduino starter kit, and a room full of people willing to blow up a few LEDs in the name of learning.</p>
<p>The workshop culminated in a group show at Lowerdeck Gallery in the Mission. Participants exhibited finished Arduino-based installations — interactive projections, sensor-triggered sound pieces, light sculptures — to a public audience. The gallery was dark, the projections were blue, and people brought their kids.</p>
<p>OKML ran for several sessions and represented something important to the studio's identity: the belief that creative technology isn't a specialisation but a literacy, and that the best way to learn it is to build something real and put it in front of people.</p>`,
    featuredImage: {
      src: "/images/projects/okml/01.jpg",
      alt: "OKML — workshop poster with Arduino board, electronic components, and moon",
      width: 1140,
      height: 749,
    },
    images: [
      {
        src: "/images/projects/okml/01.jpg",
        alt: "OKML — opening workshop poster, Lowerdeck Gallery, Feb 12 2010, 'Free Beer' and Arduino components",
        width: 1140,
        height: 749,
      },
      {
        src: "/images/projects/okml/02.jpg",
        alt: "OKML — workshop session in progress",
        width: 746,
        height: 495,
      },
      {
        src: "/images/projects/okml/03.jpg",
        alt: "OKML — gallery show, visitors silhouetted against interactive projection installation",
        width: 746,
        height: 495,
      },
      {
        src: "/images/projects/okml/04.jpg",
        alt: "OKML — children interacting with projected installation at gallery opening",
        width: 746,
        height: 495,
      },
      {
        src: "/images/projects/okml/05.jpg",
        alt: "OKML — gallery show, figure silhouetted against blue LED pixel wall installation",
        width: 746,
        height: 515,
      },
    ],
    tags: ["arduino", "workshop", "installation", "education", "gallery"],
    category: "selected",
  },
  {
    slug: "stussy",
    title: "Stussy",
    date: "2010-01-01",
    role: "Designer, Developer",
    client: "Stussy",
    shortDescription:
      "The last great Flash site. Maybe the last great Flash site anyone built. A full e-commerce experience for Stussy that treated the web browser as a cinematic medium \u2014 video, photography, product, heritage, and commerce woven into a single immersive interface.",
    longDescription: `<p>By 2010, Flash was already dying. Apple had published its open letter. The HTML5 evangelists were sharpening their knives. And we built what might be the finest Flash site ever made for a streetwear brand \u2014 or any brand. Not out of nostalgia, but because the technology still had one last trick: it could make a website feel like a place.</p>
<p>The Stussy site was a complete e-commerce experience built as a full-screen cinematic interface. A video player anchored the top of the homepage, cycling through NYC subway footage, studio portraits, and street photography shot by Jon Naar. Below it, a horizontal stream of product thumbnails, lookbook imagery, and heritage archive material scrolled continuously \u2014 a living document of the brand\u2019s past and present, powered by Magento on the backend.</p>
<p>The navigation was organized around seven sections \u2014 Features, Shop, Deluxe, Audio/Visual, Living Document, Heritage, Locate/Info \u2014 each one opening into a distinct spatial experience. The Shop used oversized product photography with minimal chrome. The Living Document section functioned as a visual blog, pulling in photography, video, and text. Heritage was exactly what it sounds like: a brand archive given the editorial treatment it deserved.</p>
<p>The integration with Magento meant this wasn\u2019t a brochure site dressed up as something interesting \u2014 it was a fully functional storefront where you could browse, add to cart, and check out without ever leaving the immersive frame. The \u201cSearch Stream\u201d feature let users filter product and content simultaneously, treating the entire site as one searchable surface.</p>
<p>Flash died. The site died with it. But for a moment, it showed what the web could feel like when you treated the browser as a canvas instead of a document viewer. We\u2019ve spent the last fifteen years trying to get back to that feeling with HTML, CSS, and JavaScript. We\u2019re not there yet.</p>`,
    featuredImage: {
      src: "/images/projects/stussy/01.jpg",
      alt: "Stussy website \u2014 homepage with NYC subway video, product stream, and full-screen cinematic interface",
      width: 1200,
      height: 800,
    },
    images: [
      {
        src: "/images/projects/stussy/01.jpg",
        alt: "Stussy \u2014 homepage with Jon Naar NYC subway photography and horizontal product stream",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/stussy/02.jpg",
        alt: "Stussy \u2014 Features section with graffiti subway interior and brand typography",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/stussy/03.jpg",
        alt: "Stussy \u2014 lookbook editorial layout",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/stussy/04.jpg",
        alt: "Stussy \u2014 product detail with oversized photography",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/stussy/05.jpg",
        alt: "Stussy \u2014 editorial content section",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/stussy/06.jpg",
        alt: "Stussy \u2014 Living Document visual blog",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/stussy/07.jpg",
        alt: "Stussy \u2014 campaign imagery",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/stussy/08.jpg",
        alt: "Stussy \u2014 Heritage brand archive",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/stussy/09.jpg",
        alt: "Stussy \u2014 Audio/Visual video section",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/stussy/10.jpg",
        alt: "Stussy \u2014 site footer and brand presence",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["interactive", "flash", "streetwear", "e-commerce"],
    category: "selected",
  },
  {
    slug: "nike-fuelband",
    title: "Nike FuelBand",
    date: "2013-01-01",
    role: "Creative Director",
    client: "Nike",
    shortDescription:
      "Built and managed a large content operation for Nike FuelBand \u2014 60+ events in 90 days across New York City, editorial storytelling, and the first public use of real Nike+ activity data as a creative medium.",
    longDescription: `<p>Nike FuelBand was Nike\u2019s first real bet on wearable technology \u2014 a bracelet that tracked movement, converted it to a universal metric called NikeFuel, and turned physical activity into a social currency. Our job was to make that currency feel valuable. Not through advertising, but through culture.</p>
<p>We built and managed a content team that produced over 60 events in 90 days across New York City. Street activations, pop-up fitness challenges, community runs, studio sessions \u2014 each one designed to generate authentic content that could feed back into Nike\u2019s digital channels. The editorial team embedded with athletes, trainers, and everyday New Yorkers, producing photography and video that treated movement as subject matter worthy of real visual attention.</p>
<p>The \u201cRise and Shine\u201d data visualization was the conceptual centerpiece: a real-time map of NYC showing NikeFuel activity across all five boroughs, animated from dawn through morning. It was the first public use of real Nike+ data in a marketing context \u2014 not simulated, not illustrative, but actual human movement rendered as light on a dark map. Staten Island waking up. Manhattan already at it. The Bronx hitting its stride. The piece turned quantified self data into something that looked like a city breathing.</p>
<p>The project demonstrated something that would become central to the next decade of marketing: that the most compelling branded content isn\u2019t content about a product, but content that uses the product\u2019s unique capabilities as a creative tool. The FuelBand was the camera. The city was the subject. We just pointed it in the right direction.</p>`,
    featuredImage: {
      src: "/images/projects/nike-fuelband/01.jpg",
      alt: "Nike FuelBand \u2014 street activation event in New York City",
      width: 1920,
      height: 1080,
    },
    images: [
      {
        src: "/images/projects/nike-fuelband/01.jpg",
        alt: "Nike FuelBand \u2014 street activation with fabric sculpture at NYC event",
        width: 1920,
        height: 1080,
      },
      {
        src: "/images/projects/nike-fuelband/02.jpg",
        alt: "Nike FuelBand \u2014 Rise and Shine data visualization showing real-time NikeFuel activity across NYC boroughs",
        width: 1920,
        height: 968,
      },
      {
        src: "/images/projects/nike-fuelband/03.jpg",
        alt: "Nike FuelBand \u2014 editorial photography, athlete stretching at dawn in New York",
        width: 2499,
        height: 1404,
      },
    ],
    tags: ["content", "events", "data-visualization", "wearable", "nike"],
    category: "selected",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
