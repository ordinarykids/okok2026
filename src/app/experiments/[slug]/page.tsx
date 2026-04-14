import { notFound, redirect } from "next/navigation";
import { getExperiment, getAllExperimentSlugs } from "@/data/experiments";
import { getProject } from "@/data/projects";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { ExperimentContent } from "@/components/experiment/experiment-content";

interface ExperimentPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllExperimentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ExperimentPageProps) {
  const { slug } = await params;

  if (slug === "refining-the-point") {
    const project = getProject("aleph-rebrand");

    if (project) {
      return {
        title: `${project.title} — Jason Herring`,
        description: project.shortDescription,
      };
    }
  }

  const experiment = getExperiment(slug);
  if (!experiment) return { title: "Not Found" };
  return {
    title: `${experiment.title} \u2014 Jason Herring`,
    description: experiment.description,
  };
}

export default async function ExperimentPage({ params }: ExperimentPageProps) {
  const { slug } = await params;

  if (slug === "refining-the-point") {
    redirect("/projects/aleph-rebrand");
  }

  const experiment = getExperiment(slug);

  if (!experiment) notFound();

  return (
    <PageWrapper narrow>
      <ExperimentContent experiment={experiment} />
    </PageWrapper>
  );
}
