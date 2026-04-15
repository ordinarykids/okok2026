import { notFound } from "next/navigation";
import { sesameProjects } from "@/data/sesame";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { ProjectContent } from "@/components/project/project-content";
import { SesameGate } from "@/components/sesame/sesame-gate";

interface SesameProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sesameProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: SesameProjectPageProps) {
  const { slug } = await params;
  const project = sesameProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `Jason Herring`,
    robots: { index: false, follow: false },
  };
}

export default async function SesameProjectPage({
  params,
}: SesameProjectPageProps) {
  const { slug } = await params;
  const project = sesameProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <PageWrapper>
      <SesameGate>
        <ProjectContent project={project} />
      </SesameGate>
    </PageWrapper>
  );
}
