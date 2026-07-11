import type { ProjectStatus } from "@/lib/projects";

const BADGE_STYLES: Record<ProjectStatus, string> = {
  live: "bg-rose-soft text-rose-deep",
  beta: "bg-surface/95 text-rose-deep border-rose border",
  archived: "bg-cream/95 text-ink-soft border-line border",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${BADGE_STYLES[status]}`}
    >
      {status}
    </span>
  );
}
