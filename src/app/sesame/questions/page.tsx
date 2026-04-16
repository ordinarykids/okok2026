import { PageWrapper } from "@/components/layout/page-wrapper";
import { SesameGate } from "@/components/sesame/sesame-gate";
import { QuestionsContent } from "@/components/sesame/questions-content";

export const metadata = {
  title: "Jason Herring",
  robots: { index: false, follow: false },
};

export default function QuestionsPage() {
  return (
    <PageWrapper>
      <SesameGate>
        <QuestionsContent />
      </SesameGate>
    </PageWrapper>
  );
}
