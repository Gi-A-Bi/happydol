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
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-2 text-zinc-600">{project.description}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-600"
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
          className="mt-6 aspect-video w-full rounded-lg object-cover"
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
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          {project.ctaText}
        </a>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:border-zinc-500"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
