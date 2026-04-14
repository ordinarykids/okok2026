import { notFound } from "next/navigation";
import { getProject, getAllProjectSlugs } from "@/data/projects";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { ProjectContent } from "@/components/project/project-content";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} \u2014 Jason Herring`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <PageWrapper>
      <ProjectContent project={project} />
    </PageWrapper>
  );
}
