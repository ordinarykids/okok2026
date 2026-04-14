import { PageWrapper } from "@/components/layout/page-wrapper";
import { RandomsContent } from "@/components/randoms/randoms-content";

export const metadata = {
  title: "Random Projects \u2014 Jason Herring",
  description: "A random selection from the archive.",
};

export default function RandomsPage() {
  return (
    <PageWrapper>
      <RandomsContent />
    </PageWrapper>
  );
}
