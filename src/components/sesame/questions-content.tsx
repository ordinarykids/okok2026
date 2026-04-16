"use client";

import { questions } from "@/data/questions";
import { XeroxText } from "@/components/motion/xerox-text";
import { PaperFeed } from "@/components/motion/paper-feed";
import { Pretext } from "@/components/motion/pretext";
import { PretextWords } from "@/components/motion/pretext-words";

export function QuestionsContent() {
  return (
    <article>
      <div className="mb-[var(--spacing-3xl)]">
        <XeroxText
          text="Questions"
          as="h1"
          className="mb-[var(--spacing-md)] text-[clamp(28px,3.5vw,48px)] leading-none"
          glitch
        />
        <PaperFeed delay={0.2}>
          <p className="text-[10px] uppercase tracking-[0.15em] text-ink-faint">
            <PretextWords text="Work Samples and Experiments" />
          </p>
        </PaperFeed>
      </div>

      {questions.map((q, i) => (
        <section
          key={q.id}
          className="mb-[var(--spacing-3xl)] border-t border-rule pt-[var(--spacing-xl)]"
        >
          <PaperFeed delay={0.1 * i}>
            <h2 className="mb-[var(--spacing-xl)] font-heading text-[clamp(16px,2vw,22px)] leading-[1.3]">
              <PretextWords text={q.question} />
            </h2>
          </PaperFeed>

          <PaperFeed delay={0.1 * i + 0.15}>
            <Pretext
              paragraphs={q.answer}
              className="text-ink-light"
            />
          </PaperFeed>
        </section>
      ))}
    </article>
  );
}
