import type { ProjectStatus } from "@/lib/projects";

const BADGE_STYLES: Record<ProjectStatus, string> = {
  live: "bg-emerald-100 text-emerald-800",
  beta: "bg-amber-100 text-amber-800",
  archived: "bg-zinc-100 text-zinc-600",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${BADGE_STYLES[status]}`}
    >
      {status}
    </span>
  );
}
