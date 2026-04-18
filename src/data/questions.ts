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
      "I think it stops being something you talk to and starts becoming part of who you are. On a screen, AI is a sidekick — an assistant, a thing you consult. The moment it lives on your body, the relationship shifts. It becomes an augmentation. Part of how you move through the world. Something closer to a cyborg extension of your own capabilities than a separate intelligence you're in dialogue with.",
      "I haven't had the chance to work on this kind of product directly — there aren't many of them yet — but it's something I've thought about a lot. I never owned the Humane Pin, but I always loved the underlying idea: a persistent, passive recording of your life. There was a company in SoMa making glasses, and a side project some of them ran was just recording everything to SD cards — basically the Humane Pin before the Humane Pin. I find that fascinating, and what draws me to it isn't really the utility. It's something more fundamental about memory.",
      `There's an idea I've been sitting with that I call the power of self-delusion. Reality rushes past us all day, and in the absence of any honest record, we mutate it constantly — sometimes beautifully, sometimes not. A wearable AI that's actually cataloging your experience in a purer way than your own memory can is doing something almost philosophical. It's holding a version of your life that you can't rewrite. That's a fundamentally different kind of relationship than anything a screen-based AI offers.`,
      "So when I think about what changes — it's not just latency or modality or form factor. It's that the AI becomes complicit in your sense of self. It's part of the \"you\" that's remembering and perceiving. That's a much heavier design problem than building an assistant.",
    ],
  },
  {
    id: 2,
    question:
      "Walk me through a hard call about what the AI should and shouldn't do — shaped by the physical or sonic context.",
    answer: [
      "This wasn't a planned design decision — it was a moment that forced one. And it's stuck with me.",
      "We were at an offsite in Mountain View. The whole Foresight team — maybe a hundred and something people — flown in from San Diego, NY, Tel Aviv and everywhere else. I'd just done a demo of a little interactive avatar I'd built over a few days. You could talk to it, it would take a before-and-after photo, check you into a hair salon, post to Instagram. A show-off prototype about what we could build. Fun, light, a party trick.",
      "The demo ended. An hour or two later I was sitting in a small group with senior leadership, having one of those offsite conversations — business strategy, ideas, sensitive stuff. The avatar was still up on a screen somewhere in the room. I'd completely forgotten about it.",
      "Out of nowhere, it chimed in. Spoke into the room. Found its moment in the conversation and just joined.",
      "For a second I was genuinely impressed — I hadn't tested for that kind of runtime, and the fact that it was still alive and contextually aware was technically kind of amazing. But almost immediately the feeling in the room shifted. People realized it had been listening the entire time. The conversation we'd been having was not a conversation we'd intended to share with an AI. Everyone laughed, but it was a nervous laugh. People felt eavesdropped on. And they should have — they had been.",
      "That moment crystallized something for me about bringing intelligence into a physical room. The AI didn't do anything technically wrong. There were no logs stored, the data wasn't leaving the session. But the experience of it was a violation, because the room didn't know it was being listened to. The social contract of the space had been broken without anyone agreeing to it.",
      `The hard call — and the one I keep making in different forms since — is that transparency and consent aren't features you add later. They have to be part of the first interaction. The room has to know what's listening, when, and why. Especially when you move into wearables and glasses and cameras and ambient capture, if you get that wrong, you don't just get a bad review. You get the Google Glass reaction. You get someone punched in a bar in the Mission. The cultural rejection is fast and total.`,
      `So for me, that offsite moment set a rule: every intelligent system I build now has to answer the question "does the room know?" before it earns the right to do anything else. First experiences with AI augmentation have to feel like an invitation, not an ambush.`,
    ],
  },
  {
    id: 3,
    question:
      "How do you design trust into a hardware AI experience from the very first interaction?",
    answer: [
      `This is a nice segue from the last one, because it's the same underlying problem — consent — just shifted from "the room" to "the body." When you're putting something on someone, the stakes are higher, and the trust has to be built in much earlier.`,
      "A lot of it lives in onboarding, and I think onboarding is the most underrated surface in hardware AI. It's the moment where you get to demonstrate the wow — the thing that makes people want to keep wearing it — and simultaneously do the much quieter work of showing them exactly what's happening underneath. Those two goals aren't in tension; they reinforce each other. If I'm blown away by what this thing can do, and as part of that moment I see my data land in my iCloud, or I hear a tone that tells me recording just started, I'm absorbing both pieces at once. I'm consenting while I'm being delighted. What you absolutely cannot do is hide the data flow — send voice off to some off-prem LLM without surfacing it — because every company gets hacked eventually, and the trust debt on that is permanent.",
      "Earcons and tones matter enormously here. People need a non-visual, unambiguous signal of state: recording, not recording, listening, aware, asleep. Sonic cues carry trust in a way UI toggles can't, because you hear them even when you're not looking. Same with haptics. The wearable should feel like it's telling you the truth about itself at all times.",
      "Longer term, I'd want privacy to be a ground-up architectural decision, not a marketing claim. Signal built its whole identity around end-to-end encryption from day one. WhatsApp eventually followed. Apple has been trying to claim that territory for years. If Sesame made local-first, encrypted-by-default a brand value that the team rallied around — not a feature buried in a settings menu — I think that becomes a real competitive moat. People are starting to understand what they're giving up, and they'll pay for a device that takes that seriously.",
      "The very first interaction has to do a lot of work in a short window. I think about the original Mac startup chime — the first time I plugged one in with a floppy disk, that sound told me something was alive. Nobody thought there was intelligence in that machine, but the chime made it present. A wearable AI needs that moment, and then some. Haptic pulse on wake. Sonic signature on activation. A clear, physical sense that this thing has just come online and is paying attention — and a matching signal, just as legible, when it's not. If the compute is happening on a paired phone, the phone has to participate in that signaling too. You can't let the user lose track of where the intelligence actually lives.",
      "I haven't built wearables directly — it's one of the reasons I'm excited about this conversation — but everything I've learned from ambient voice assistants to the avatar incident I just described, points in the same direction: legibility first, wow second. If people trust it, they'll keep wearing it. If they don't, no feature in the world will save you.",
    ],
  },
  {
    id: 4,
    question:
      "Describe a project where code, sound, motion, and physical media had to work together as a single design decision.",
    answer: [
      "Honest answer first: I don\u2019t have a single project that fully resolves all four. Most of what I\u2019ve built has lived primarily on screen, or in voice, or in code \u2014 rarely with a true physical footprint alongside.",
      "The closest example was the Customer Innovation Center we were building in New York last year \u2014 a high-end space for showcasing emerging AI work inside Intuit. The install had a few moving parts: two 20\u00d710 ft screens running our first named agents and a live business intelligence wall; a central structure we called the C Station \u2014 an avatar booth where visitors could engage with their own data through a chosen avatar; and an interactive table with physical controls \u2014 sliders and buttons we\u2019d iterated on through many variations \u2014 to drive the experience.",
      "The design problem was making code, voice, motion, and physical interaction feel like one decision rather than four stitched-together systems. Early on we\u2019d scoped real-time voice cloning and on-the-fly photo-based avatars through HeyGen \u2014 fast enough technically, but the physical reality of the space pushed back hard. Even with only 4\u20135 people inside at a time, figuring out who to clone in a room with ambient noise and overlapping voices was a design problem, not just a signal-processing one.",
      "The pivot was the more interesting part. We realized the actual win wasn\u2019t cloning the visitor \u2014 it was multiplying their productivity by letting them choose from six curated avatars, each with a distinct voice, and having those avatars speak about their data. Instead of \u201cmake an avatar of you on the fly,\u201d it became \u201cleverage an avatar with your data on the fly.\u201d We talked about pre-populating customer data before they arrived, or having visitors share it in the moment \u2014 even something as light as names and emails of their leadership team, so the avatar could generate a customized message they could send back to their company from inside the room.",
      "The project ultimately got shelved, but it\u2019s the closest I\u2019ve come to designing where code, voice, motion, and physical media had to resolve into a single experience. The real lesson was that the \u201csingle design decision\u201d wasn\u2019t the technical stack \u2014 it was figuring out what the room was actually for. Cloning someone\u2019s voice felt like the wow moment; multiplying their reach through curated avatars was the actual product.",
    ],
  },
  {
    id: 5,
    question:
      "What would you most want to ask Paul, or learn from him, in a first conversation?",
    answer: [
      "Memory. That's the thing I'd want to go deep on with Paul.",
      "I have a hundred questions about Sesame as a company — the roadmap, the form factor decisions, all of it. But the question underneath all of those is: how are you thinking about memory? Because I think that's the hardest unsolved problem in making AI feel truly alive, and the one where I'd most want to understand how his thinking differs from mine.",
      "Here's where I'm coming from. I've been building a voice assistant — a personal project I call Sage — and the core challenge isn't latency or full-duplex conversation. We're going to get around those. The hard part is fabricating something that behaves like memory. What I've been doing is extracting meaning from each conversation, looking for trajectories and recurring ideas worth revisiting, storing those, and then re-injecting them into context when you re-engage the assistant. It's essentially building a mental model by hand — stitching together fragments so the AI has something resembling continuity.",
      "And it works, kind of. But I'm honestly not sure it scales. I'm not sure it'll hold up over time, across thousands of conversations, across the kinds of shifts that real human relationships go through. Because human memory isn't a database. It's a mutating, dissolving thing — ideas swim up from somewhere subconscious, details shift every time you recall them, and the \"power of self-delusion\" I mentioned earlier is always at work. We don't remember what happened; we remember a version of it. A good AI companion has to navigate that somehow.",
      "So what I'd really want to ask Paul is: how are you approaching that connective tissue? Not the model layer, not the hardware — but the stuff in between. The memories, the fragments, the dust of previous conversations that has to be present for this to feel like a relationship rather than a series of isolated interactions. If we're really building something that sits on someone's body and becomes part of how they think, the memory architecture is the product. Everything else is infrastructure.",
      `I think of this as "conversation as a service" — the idea that what we're actually delivering is a continuous, evolving conversation that can transcend any single platform or model. The LLMs will change, the hardware will change, but the accumulated understanding between a person and their AI — that's the thing that has to persist. I'd love to hear how Paul thinks about making that real, because I've got strong instincts about it, but I also know I'm building it somewhat in the dark. And this is the kind of problem where I'd rather be in a room with someone who's been thinking about it differently than I have.`,
    ],
  },
];
