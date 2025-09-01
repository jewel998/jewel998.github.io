import { Marquee, MarqueeFade } from "@/components/ui/marquee";
import { HomeSection } from "@/layouts/home/section";
import technologies from "@/data/technologies.json";
import { useMemo } from "react";
import { Chip } from "@/components/ui/chip";

export function HomeExpertise() {
  const techs = useMemo(
    () => [
      ...technologies.cloud,
      ...technologies.languages,
      ...technologies.backend,
      ...technologies.frontend,
      ...technologies.quality,
    ],
    []
  );
  return (
    <HomeSection>
      <section className="relative mt-16">
        <div className="py-3">
          <Marquee
            scrollerClassName="items-center font-normal text-xs md:text-sm md:leading-sm drop-shadow-none"
            texts={[
              <div className="flex flex-row gap-6 items-center px-3">
                {techs.map((tech, idx) => (
                  <Chip
                    key={tech.name + idx}
                    className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-foreground"
                  >
                    {tech.logo && (
                      <img
                        className="size-4 object-contain"
                        src={tech.logo}
                        alt={tech.name}
                      />
                    )}
                    <span>{tech.name}</span>
                  </Chip>
                ))}
              </div>,
            ]}
          />
        </div>
        <MarqueeFade side="left" className="from-background" />
        <MarqueeFade side="right" className="from-background" />
      </section>
    </HomeSection>
  );
}
