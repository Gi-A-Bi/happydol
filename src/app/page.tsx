import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <div>
      <section>
        <h1 className="text-2xl font-bold sm:text-3xl">
          [placeholder] 한 줄 소개
        </h1>
        <p className="mt-3 text-zinc-600">[placeholder] 부가 소개 문장</p>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Featured</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-block text-sm underline underline-offset-4 transition-colors hover:text-zinc-600"
        >
          모든 프로젝트 보기 →
        </Link>
      </section>
    </div>
  );
}
