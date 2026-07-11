import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
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
        <div className="flex flex-wrap items-center gap-2.5">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-ink-soft mt-3 text-lg">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="bg-rose-soft text-rose-deep rounded-full px-2.5 py-0.5 text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Image
          src={project.thumbnail}
          alt={`${project.title} 썸네일`}
          width={1280}
          height={720}
          className="mt-8 aspect-video w-full rounded-3xl object-cover"
        />
      </header>

      <div className="mdx-body mt-8">
        <MDXRemote source={project.content} />
      </div>

      {/* CTA — 링크는 frontmatter(liveUrl/repoUrl)로만 제어 */}
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cocoa text-cream hover:bg-cocoa-deep rounded-full px-6 py-3 text-sm font-medium transition-colors"
        >
          {project.ctaText}
        </a>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-line hover:border-rose hover:text-rose-deep rounded-full border px-6 py-3 text-sm font-medium transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
