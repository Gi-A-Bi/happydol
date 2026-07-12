import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import {
  HERO_QUOTE,
  HERO_QUOTE_SOURCE,
  HERO_SUBTITLE,
  HERO_TAGLINE,
  HERO_TITLE,
} from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden rounded-[2.5rem]">
        <Image
          src="/hero-prince.jpg"
          alt="어린왕자와 여우가 작은 행성 위에서 별밤 하늘을 바라보는 파스텔 수채화"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover object-right"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative px-6 py-14 sm:px-14 sm:py-20 md:min-h-[520px] md:max-w-[56%]">
          <p className="bg-rose-soft text-rose-deep inline-block rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide">
            {HERO_TAGLINE}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl md:text-6xl">
            {HERO_TITLE}
          </h1>
          <p className="text-ink-soft mt-6 max-w-md text-lg leading-relaxed">
            {HERO_SUBTITLE}
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
              className="bg-surface hover:bg-rose-soft hover:text-rose-deep rounded-full px-6 py-3 text-sm font-medium transition-colors"
            >
              소개 보기
            </Link>
          </div>
          {HERO_QUOTE && (
            <p className="text-ink-soft mt-10 text-xs tracking-wide italic">
              “{HERO_QUOTE}”
              {HERO_QUOTE_SOURCE ? ` — ${HERO_QUOTE_SOURCE}` : ""}
            </p>
          )}
        </div>
      </section>

      <section className="mt-14 sm:mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-ink-soft text-xs font-semibold tracking-[0.2em] uppercase">
            Featured
          </h2>
          <Link
            href="/projects"
            className="hover:text-cocoa text-sm underline underline-offset-4 transition-colors"
          >
            모든 프로젝트 보기 →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
