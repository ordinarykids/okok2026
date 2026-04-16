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
      "We were at an offsite in New York. The whole Foresight team — maybe a hundred and something people — flown in from Mountain View and everywhere else. I'd just done a demo of a little interactive avatar I'd built over a few days. You could talk to it, it would take a before-and-after photo, check you into a hair salon, post to Instagram. A show-off prototype about what we could build. Fun, light, a party trick.",
      "The demo ended. An hour or two later I was sitting in a small group with senior leadership, having one of those offsite conversations — business strategy, ideas, sensitive stuff. The avatar was still up on a screen somewhere in the room. I'd completely forgotten about it.",
      "Out of nowhere, it chimed in. Spoke into the room. Found its moment in the conversation and just joined.",
      `For a second I was genuinely impressed — I hadn't tested for that kind of runtime, and the fact that it was still alive and contextually aware was technically kind of amazing. But almost immediately the feeling in the room shifted. People realized it had been listening the entire time. And this is the sonic part — it wasn't passively logging text somewhere. It was an open microphone in a shared physical room, absorbing everything: tone, side conversations, the ambient texture of a private meeting. It was functionally a sentient presence in the space, and nobody had consented to that presence being there. Everyone laughed, but it was a nervous laugh. People felt eavesdropped on. And they should have — they had been.`,
      "That moment crystallized something for me. The AI didn't do anything technically wrong. There were no logs stored, the data wasn't leaving the session. But the experience of it was a violation, because the room didn't know it was being listened to. The social contract of the space had been broken without anyone agreeing to it.",
      `The hard call we made afterward was to re-enable auto-timeouts on the voice connection — and not for cost reasons. It was a consent decision. A room changes over time. The people in it change, the conversation changes, the sensitivity changes. The consent someone gave when they walked up to a demo doesn't extend to the private strategy discussion happening two hours later in the same space. The connection had to have a natural lifespan, because the context it was born into doesn't last forever.`,
      `That became a design principle I keep coming back to: ambient AI has to respect the fact that spaces have evolving levels of consent. The room you turned the mic on in is not the same room an hour later. Every intelligent system I build now has to answer the question "does the room still know?" — not just "did the room know once." First experiences with AI augmentation have to feel like an invitation, not an ambush. And they have to know when the invitation has expired.`,
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
      "First, some context about how I work: I don't usually hand these things to separate people. Of course, on bigger projects, I'll hand it to other people. We hire people or photographers, directors, whatever. I like to get my hands dirty, so most of the stuff I'm talking about and thinking about are things I can put together. I love working with a team where we are all doing it together, but I also like that everybody also knows what they're doing. It's not like I'm handing off the audio to somebody; instead, we're collaborating with somebody on the audio.",
      "The project that best illustrates this is something I built at Intuit. We had a portrait-mode TV screen in the office — originally just for demos, talking to avatars, that sort of thing. But I started getting frustrated with the standard visual vocabulary for AI: the glowing orb, the animated face, the chat bubble. I wanted something more expressive.",
      "So I built an experiment around kinetic typography as the voice of the AI. Instead of an avatar or a waveform, the AI's responses were rendered as large-scale, expressive type — scaling up and down with emphasis, pacing with the rhythm of speech, using size and motion to convey the emotional register of what was being said. The voice layer was hyper-low-latency, running on a fast model. The system prompt was designed with deliberate internal tensions — I'd build characters with contradictions baked in, like the precision of a professional crossed with New York street slang, or Alan Watts fused with Marc Andreessen. Those tensions created personality in rapid-fire responses that felt genuinely alive.",
      "The reason this was a single design decision rather than separate disciplines is that the typography was the sound made visible. You couldn't change the voice pacing without changing the motion of the type. You couldn't adjust the visual scale without it feeling disconnected from the tone. The character in the system prompt, the cadence of the speech, the kinetic behavior of the letterforms, and the physical presence of the screen in the room — all of it was one system.",
      "And here's what surprised me: every time I turned that thing on, the whole floor would walk over. Not to talk to the AI — to stand there and watch. People were drawn to it the way my kids are drawn to closed captions on Netflix. There's something about expressive, moving text that captures your gaze and lets you think without thinking, focus without trying. It became this ambient presence in the space that people gravitated toward, and that wasn't something I designed intentionally — it emerged from the integration.",
      "That's the thing about working across these disciplines as one decision: the best outcomes aren't the ones you plan. They're the ones that surface because the code, the sound, the motion, and the physical context are all downstream of the same idea.",
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
