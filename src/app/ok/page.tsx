import { PageWrapper } from "@/components/layout/page-wrapper";
import { OkGate } from "@/components/ok/ok-gate";
import { CVContent } from "@/components/cv/home-content";

export const metadata = {
  title: "Jason Herring",
  robots: { index: false, follow: false },
};

export default function OkPage() {
  return (
    <PageWrapper>
      <OkGate>
        <CVContent />
      </OkGate>
    </PageWrapper>
  );
}
