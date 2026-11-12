import ProjectCard from "@/components/ProjectCard";
import { groupByCategory, type Project } from "@/lib/projects";

/** 프로젝트를 유형(category)별 소제목 아래 카드 그리드로 묶어 보여준다 */
export default function ProjectGroups({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-14 sm:space-y-16">
      {groupByCategory(projects).map((group) => (
        <section key={group.key} aria-labelledby={`group-${group.key}`}>
          <div className="flex items-baseline justify-between">
            <h3
              id={`group-${group.key}`}
              className="text-xl font-bold tracking-tight sm:text-2xl"
            >
              {group.label}
            </h3>
            <p className="text-ink-soft text-sm">{group.projects.length}개</p>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
