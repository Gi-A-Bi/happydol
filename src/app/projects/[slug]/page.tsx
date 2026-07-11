import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import StatusBadge from "@/components/StatusBadge";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

// 빌드 시점에 content/projects/*.mdx 전체를 정적 생성, 없는 slug는 404
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article>
      <header>
        <ul className="flex flex-wrap items-center gap-1.5">
          <li>
            <StatusBadge status={project.status} />
          </li>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="bg-rose-soft text-rose-deep rounded-full px-2.5 py-1 text-xs font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tighter sm:text-6xl">
          {project.title}
        </h1>
        <p className="text-ink-soft mt-4 max-w-2xl text-lg leading-relaxed sm:text-xl">
          {project.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cocoa text-cream hover:bg-cocoa-deep rounded-full px-8 py-4 text-base font-semibold transition-colors"
          >
            {project.ctaText}
          </a>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-line hover:border-rose hover:text-rose-deep rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
        <Image
          src={project.thumbnail}
          alt={`${project.title} 썸네일`}
          width={1200}
          height={900}
          priority
          className="mt-12 aspect-[4/3] w-full rounded-3xl object-cover"
        />
      </header>

      <div className="mdx-body mt-12 max-w-3xl">
        <MDXRemote source={project.content} components={mdxComponents} />
      </div>
    </article>
  );
}
