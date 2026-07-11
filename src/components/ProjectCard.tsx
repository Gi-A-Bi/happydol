import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import StatusBadge from "./StatusBadge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={project.thumbnail}
          alt={`${project.title} 썸네일`}
          width={640}
          height={360}
          className="aspect-video w-full object-cover"
        />
        <div className="absolute right-3 bottom-3 left-3 flex flex-wrap items-center gap-1.5">
          <h2 className="bg-surface/95 text-ink rounded-full px-3.5 py-1.5 text-sm font-semibold">
            {project.title}
          </h2>
          <StatusBadge status={project.status} />
        </div>
      </div>
      <p className="text-ink-soft mt-3 px-1 text-sm leading-relaxed">
        {project.description}
      </p>
      <ul className="mt-2 flex flex-wrap gap-1.5 px-1">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="bg-rose-soft text-rose-deep rounded-full px-2.5 py-0.5 text-xs"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
