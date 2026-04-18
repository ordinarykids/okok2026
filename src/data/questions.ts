export interface Question {
  id: number;
  question: string;
  answer: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      "What changes fundamentally when AI moves off a screen and into something someone wears or holds?",
    answer: [
      "For a long time, the relationship between people and computers has been one of proximity — you walk up to the thing and use it. Terminal, abacus, sewing machine, laptop. Even a phone in your pocket is something you pull out, interact with, and put away. The iPhone shifted that — it started to feel like an extension of who we are — and the Apple Watch pushed it further, melding into how we actually operate moment to moment.",
      "But I think the really interesting part of this question isn't about technology moving onto the body. It's about intelligence moving onto the body. That's a different shift entirely. Now it's not just a tool that's always with you — it's a real-time aid that's helping you make choices, cataloging your experience, acting as a reference point that amplifies the way you think and work. The intelligence is there, persistently, in a way it never was when it lived on a screen you had to pick up.",
      "I used to imagine this as snap-on intelligence — personal models you could load for different domains. Here's a layer for skateboarding. Here's one for philosophy. That idea has gotten less relevant as models have gotten large enough to hold everything, but the underlying instinct was right: you could extend and reshape who you are by attaching different kinds of intelligence to yourself.",
      "And that's what fundamentally changes. It stops being something you do and starts becoming something you are. When AI lives on a screen, it's a tool you consult. When it's on your body, it changes how you perceive, how you remember, how you decide. That's not an interface upgrade — it's a paradigm shift. We haven't fully seen it yet, but I think everyone working in this space knows it's coming. The teams at Meta working on the Oculus side, Apple with Vision Pro, and what's happening here at Sesame — everyone's chasing the same fundamental transition. The question isn't whether it happens. It's who designs it well enough that people actually trust it on their bodies.",
    ],
  },
  {
    id: 2,
    question:
      "Walk me through a hard call about what the AI should and shouldn't do — shaped by the physical or sonic context.",
    answer: [
      "My first attempt to respond drifted to another moment.",
      "This wasn't a planned design decision — it was a moment that forced one. And it's stuck with me.",
      "We were at an offsite in Mountain View. The whole Foresight team — maybe a hundred and something people — flown in from San Diego, NY, Tel Aviv and everywhere else. I'd just done a demo of an interactive avatar I'd built to the team. You could talk to it, it would take a before-and-after photo, check you into a hair salon, post to Instagram. A show-off prototype about what we could build. Fun, light, a party trick.",
      "The demo ended. A half an hour later I was sitting in a small group with senior leadership, having one of those offsite conversations — business strategy, ideas, sensitive stuff. The avatar was still up on a screen somewhere in the room. I'd completely forgotten about it.",
      "Out of nowhere, it chimed in. Spoke into the room. Found its moment in the conversation and just joined.",
      "For a second I was genuinely stoked, I hadn't tested for that kind of long running session, and the fact that it was still alive and contextually aware was technically kind of amazing. But almost immediately the feeling in the room shifted. People realized it had been listening the entire time. The conversation we'd been having was not a conversation we'd intended to share with an AI. Everyone laughed, but it was a nervous laugh. People felt eavesdropped on. And they should have. They had been.",
      "That moment crystallized something for me about bringing intelligence into a physical room. The AI didn't do anything technically wrong. There were no logs stored, the data wasn't leaving the session. But the experience of it was a violation, because the room didn't know it was being listened to. The social contract of the space had been broken without anyone agreeing to it.",
      `The hard call and the one I keep making in different forms since, is that transparency and consent aren't features you add later. They have to be part of the first interaction. The room has to know what's listening, when, and why. Especially when you move into wearables and glasses and cameras and ambient capture, if you get that wrong, you don't just get a bad review. You get the Google Glass reaction. You get someone punched in a bar in the Lower Haight. The cultural rejection is fast and total.`,
      `So for me, that offsite moment set a rule: every intelligent system I build now has to answer the question "does the room know?" before it earns the right to do anything else. First experiences with AI augmentation have to feel like an invitation, not an ambush.`,
    ],
  },
  {
    id: 3,
    question:
      "How do you design trust into a hardware AI experience from the very first interaction?",
    answer: [
      "Trust in a hardware AI doesn't start with features — it starts with the feeling that something on the other side actually understands the moment you're in.",
      `The easy answer is thoughtful onboarding: feature demos, earcons, consent flows, the usual Apple-grade walkthrough. That stuff matters. But it misses what trust really is with an AI product. Trust isn't built by instruction — it's built by emotional attunement, and by the device doing something harder: showing up as a real presence that's honest about itself.`,
      `The frame I come back to is: greet, consent, ask, answer, validate. Greet and acknowledge the user so they feel seen. Ask their consent — not as a legal formality, but as a genuine check that this is a good moment, that they want this, that the terms of the relationship are clear. If they're distracted, come back later. If they're ready, be fully there. Let them ask and give them a real answer. Then validate what happened together so they leave knowing something changed between you. That loop, done well from the first second, is trust.`,
      `Hardware adds a layer that pure software doesn't have to solve: physical signals of awareness. A small light that tells you the device is listening. A tone when it starts recording. A tactile shift when it moves from passive to active. These aren't decoration — they're the device telling the truth about itself in a medium the user can feel without looking. In most consumer experiences we hide this machinery; with AI we have to do the opposite. The trust ladder is real. People are new to this. What feels invasive today will feel normal in two years, and what feels magical today will feel patronizing in two years — so the physical affordances have to do the work of making state legible right now, even if that slows the "everything's perfect" moment down. Bringing people along is part of the design problem, not a pre-launch afterthought.`,
      `The thing that makes or breaks all of it, though, is openness about limits. A hardware AI has to be transparent about what it is, what it's doing, and — most importantly — what it doesn't know. No matter how capable the model gets, it's never going to have the full context a human has in the physical world. There's always a gap. The AI will miss things. It will misread rooms. It will not know the thing I just noticed out of the corner of my eye. Pretending otherwise is how trust dies. Saying "I didn't catch that" or "I can't see what you're seeing" — that's how trust gets built.`,
      `The deeper thing I believe is that we're about to cross a threshold where AI stops being a feature and starts being experienced as a presence. When that happens, people won't judge trust the way they judge a product — they'll judge it the way they judge a person. Did it hear me, or just listen? Did it understand, or just respond? Was it honest about its limits, or did it bluff? This is closer to scriptwriting than interaction design, except the scripts come alive and the characters step off the page and into your kitchen. Designing trust from the first interaction means writing that character well: attentive, honest, present without being intrusive, and humble about the edges of what it can know. If the user finishes the first minute thinking "this thing actually gets me — and it tells me when it doesn't," the product has already won.`,
    ],
  },
  {
    id: 4,
    question:
      "Describe a project where code, sound, motion, and physical media had to work together as a single design decision.",
    answer: [
      "Honest answer first: I don't have a single project that fully resolves all four. Most of what I've built has lived primarily on screen, or in voice, or in code — rarely with a true physical footprint alongside.",
      "The closest example was the Customer Innovation Center we were building in New York last year — a high-end space for showcasing emerging AI work inside Intuit. The install had a few moving parts: two 20×10 ft screens running our first named agents and a live business intelligence wall; a central structure we called the C Station — an avatar booth where visitors could engage with their own data through a chosen avatar; and an interactive table with physical controls — sliders and buttons we'd iterated on through many variations — to drive the experience.",
      "The design problem was making code, voice, motion, and physical interaction feel like one decision rather than four stitched-together systems. Early on we'd scoped real-time voice cloning and on-the-fly photo-based avatars through HeyGen — fast enough technically, but the physical reality of the space pushed back hard. Even with only 4–5 people inside at a time, figuring out who to clone in a room with ambient noise and overlapping voices was a design problem, not just a signal-processing one.",
      `The pivot was the more interesting part. We realized the actual win wasn't cloning the visitor — it was multiplying their productivity by letting them choose from six curated avatars, each with a distinct voice, and having those avatars speak about their data. Instead of "make an avatar of you on the fly," it became "leverage an avatar with your data on the fly." We talked about pre-populating customer data before they arrived, or having visitors share it in the moment — even something as light as names and emails of their leadership team, so the avatar could generate a customized message they could send back to their company from inside the room.`,
      "We partnered with Downstream in Portland for the physical install, and I brought in a former collaborator — an AI generative photography artist in New York — for about six months to push the avatar and 3D work.",
      `The project ultimately got shelved, but it's the closest I've come to designing where code, voice, motion, and physical media had to resolve into a single experience. The real lesson was that the "single design decision" wasn't the technical stack — it was figuring out what the room was actually for. Cloning someone's voice felt like the wow moment; multiplying their reach through curated avatars was the actual product.`,
    ],
  },
  {
    id: 5,
    question:
      "What would you most want to ask Paul, or learn from him, in a first conversation?",
    answer: [
      "First thing — Was open sourcing CSM always the plan? Like was that always baked in, always the intent — or did that evolve? It feels like it became a centerpiece of what Sesame is putting out into the world, the research, the whole vibe of the site. And I love that. A for-profit company just giving that away, marching toward something bigger. I'm just curious how that decision actually happened.",
      "And then the language piece, the conversation layer — it feels like it's kind of falling away a little? Like it seemed like that was the centerpiece early on, and now it feels more like the hardware is pulling focus. The Oculus stuff, the wearables, small glasses, fast LLMs, augmenting the world. So I'm just curious — where does he actually see the company sitting? Is the hardware the thing that cracks it open, or is the real play still the conversation with intelligence piece?",
      "Because to me that second one is the bigger question. Like intelligence is just moving, and we're going to be an order of magnitude beyond where we are in ten months or so. And when that happens the thing that matters isn't just capability — it's the relationship. How do you actually navigate a conversation with something that reasons beyond what you can follow or articulate or even have time to understand. That emotional interface, that sort of ongoing relationship we're going to have with super intelligence — yeah I said it — I think that becomes one of the most important design problems there is. Does he feel that? Where does he put it?",
      "I've been messing around with a lot of this myself — memory systems, offline reasoning, cron-driven stuff, subagents just constantly crawling and chewing. The idea being not just feeding a user information but anticipating it. I'm curious if he sees that as a real path to good AR. How is he thinking about learning and memory and these sort of trajectories of momentum inside intelligence. How do you bring that.",
      "And then honestly I just want to know who he is. Not the work answer. I'm kind of an oddball, not really a typical Valley guy, and I need to actually connect with people I work with. So what's really driving him. What's actually charging inside of him when he thinks about where this is all going.",
      "Because if we're just building agents that make orchestrators that make subagents that automate and iterate forever — what are we doing. What does he think intelligence even is. What does it mean to be alive inside of all this. That's what I actually want to talk about.",
    ],
  },
];
