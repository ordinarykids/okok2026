import { PageWrapper } from "@/components/layout/page-wrapper";
import { QuestionsContent } from "@/components/sesame/questions-content";

export const metadata = {
  title: "Jason Herring",
};

export default function QuestionsPage() {
  return (
    <PageWrapper>
      <QuestionsContent />
    </PageWrapper>
  );
}
