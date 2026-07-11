import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import StatusBadge from "./StatusBadge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-400"
    >
      <Image
        src={project.thumbnail}
        alt={`${project.title} 썸네일`}
        width={640}
        height={360}
        className="mb-4 aspect-video w-full rounded-md object-cover"
      />
      <div className="flex items-center gap-2">
        <h2 className="font-semibold">{project.title}</h2>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-1 text-sm text-zinc-600">{project.description}</p>
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
    </Link>
  );
}
