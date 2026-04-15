import { PageWrapper } from "@/components/layout/page-wrapper";
import { SesameGate } from "@/components/sesame/sesame-gate";
import { SesameContent } from "@/components/sesame/sesame-content";

export const metadata = {
  title: "Jason Herring",
  robots: { index: false, follow: false },
};

export default function SesamePage() {
  return (
    <PageWrapper>
      <SesameGate>
        <SesameContent />
      </SesameGate>
    </PageWrapper>
  );
}
