import { HomeSection } from "@/layouts/home/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { Chip } from "@/components/ui/chip";
import { cn } from "@/lib";
import projects from "@/data/projects.json";
import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Github, FolderOpen, Package } from "lucide-react";
import { Trans } from "@lingui/react";
import { useI18n } from "@/components/providers/i18n";

type Category = "All" | "Frontend" | "Backend";

const categories: Category[] = ["All", "Frontend", "Backend"];
const categoryTranslationIds: Record<Category, string> = {
  All: "projects.filter.all",
  Frontend: "projects.filter.frontend",
  Backend: "projects.filter.backend",
};

export function ProjectsGrid() {
  const { locale, loadMessages } = useI18n();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    loadMessages(locale, import(`@/pages/projects/grid/i18n/${locale}.json`));
  }, [loadMessages, locale]);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(activeCategory)),
    [activeCategory]
  );

  return (
    <HomeSection className="py-8">
      <div className="max-w-5xl mx-auto">
        {/* Filter tabs */}
        <BlurFade inView>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer",
                  activeCategory === cat
                    ? "bg-primary text-background shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                <Trans id={categoryTranslationIds[cat]} message={cat} />
              </button>
            ))}
          </div>
        </BlurFade>

        {/* Projects grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, idx) => (
            <BlurFade
              key={project.title}
              delay={idx * 0.05}
              inView
              className={cn(
                "transition-all duration-300",
                hoveredIdx === idx && "relative z-50"
              )}
            >
              <ProjectCard
                project={project}
                isHighlighted={hoveredIdx === idx}
                isAnyHovered={hoveredIdx !== null}
                onHover={() => setHoveredIdx(idx)}
                onLeave={() => setHoveredIdx(null)}
              />
            </BlurFade>
          ))}
        </div>

        {filtered.length === 0 && (
          <BlurFade inView>
            <p className="text-center text-muted-foreground py-12">
              <Trans
                id="projects.empty"
                message="No projects found in this category."
              />
            </p>
          </BlurFade>
        )}
      </div>

      {/* Full-page blur overlay — only visible when a card is hovered */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/70 backdrop-blur-sm pointer-events-none",
          "transition-[opacity] duration-300",
          hoveredIdx !== null ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      />
    </HomeSection>
  );
}

interface Project {
  title: string;
  description: string;
  tools: string[];
  categories: string[];
  year: number;
  image: string | null;
  github: string | null;
  npmjs?: string | null;
  live: string | null;
}

function ProjectCard({
  project,
  isHighlighted,
  isAnyHovered,
  onHover,
  onLeave,
}: {
  project: Project;
  isHighlighted: boolean;
  isAnyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "group/card relative flex flex-col overflow-hidden rounded-xl border bg-card",
        "transition-all duration-300 ease-out",
        isHighlighted && "shadow-xl z-50",
        isAnyHovered && !isHighlighted && "opacity-60"
      )}
    >
      {/* Image area */}
      <div className="relative aspect-video bg-muted/50 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform group-hover/card:scale-105"
          />
        ) : (
          <FolderOpen className="size-12 text-muted-foreground/30" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-clash font-medium text-lg leading-tight">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
            {project.year}
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mt-auto py-2">
          {project.tools.map((tool) => (
            <Chip
              key={tool}
              className="text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-foreground"
            >
              {tool}
            </Chip>
          ))}
        </div>

        {/* Links */}
        {(project.github || project.npmjs || project.live) && (
          <div className="flex gap-3 pt-4 border-t border-border/50">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="size-3.5" />
                <Trans id="projects.link.source" message="Source" />
              </a>
            )}
            {project.npmjs && (
              <a
                href={project.npmjs}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Package className="size-3.5" />
                <Trans id="projects.link.npm" message="npm" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="size-3.5" />
                <Trans id="projects.link.view" message="View" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
