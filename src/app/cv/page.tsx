import { PageWrapper } from "@/components/layout/page-wrapper";
import { CVContent } from "@/components/cv/home-content";

export const metadata = {
  title: "Jason Herring \u2014 CV",
};

export default function CVPage() {
  return (
    <PageWrapper>
      <CVContent />
    </PageWrapper>
  );
}
