import { PageWrapper } from "@/components/layout/page-wrapper";
import { CVContent } from "@/components/cv/home-content";

export const metadata = {
  title: "Jason Herring",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <CVContent />
    </PageWrapper>
  );
}
