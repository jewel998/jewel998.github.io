import { Marquee } from "@/components/ui/marquee";
import { HomeLayoutPage } from "@/layouts/home";
import { HomeSection } from "@/layouts/home/section";
import { HomeFooter } from "@/pages/home/footer";
import { Chip } from "@/components/ui/chip";
import { MarqueeFade } from "@/components/ui/marquee";
import technologies from "@/data/technologies.json";
import { useMemo } from "react";
import { HomeContact } from "@/pages/home/contact";
import { AboutExperience } from "./experience";

export function About() {
  const techs = useMemo(
    () => [
      ...technologies.cloud,
      ...technologies.languages,
      ...technologies.backend,
      ...technologies.frontend,
      ...technologies.collaboration,
      ...technologies.quality,
    ],
    []
  );
  return (
    <HomeLayoutPage>
      <HomeSection>
        <section className="relative mt-16">
          <div className="border-y py-6">
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
        <AboutExperience />
      </HomeSection>
      <HomeContact />
      <HomeFooter />
    </HomeLayoutPage>
  );
}
