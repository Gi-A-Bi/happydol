import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";

const TITLE = "Projects";
const DESCRIPTION = "[placeholder] 프로젝트 목록 소개";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Projects
      </h1>
      <p className="text-ink-soft mt-3 text-sm">{DESCRIPTION}</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
