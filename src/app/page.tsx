import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <div>
      <section className="py-14 sm:py-24">
        <h1 className="text-4xl leading-[1.12] font-bold tracking-tight sm:text-6xl md:text-7xl">
          [placeholder] 한 줄 소개
        </h1>
        <p className="text-ink-soft mt-6 max-w-xl text-lg leading-relaxed">
          [placeholder] 부가 소개 문장
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="bg-cocoa text-cream hover:bg-cocoa-deep rounded-full px-6 py-3 text-sm font-medium transition-colors"
          >
            프로젝트 보기
          </Link>
          <Link
            href="/about"
            className="border-line hover:border-rose hover:text-rose-deep rounded-full border px-6 py-3 text-sm font-medium transition-colors"
          >
            소개 보기
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Featured</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="hover:text-cocoa mt-8 inline-block text-sm underline underline-offset-4 transition-colors"
        >
          모든 프로젝트 보기 →
        </Link>
      </section>
    </div>
  );
}
