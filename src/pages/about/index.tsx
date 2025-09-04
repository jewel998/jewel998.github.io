import { Marquee } from "@/components/ui/marquee";
import { HomeLayoutPage } from "@/layouts/home";
import { HomeSection } from "@/layouts/home/section";
import { HomeFooter } from "@/pages/home/footer";
import { Chip } from "@/components/ui/chip";
import { MarqueeFade } from "@/components/ui/marquee";
import technologies from "@/data/technologies.json";
import { useMemo } from "react";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import Experience from "@/data/experience.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { HomeHeading } from "@/layouts/home/heading";

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
        <HomeSection className="px-0 md:px-0 m-auto max-w-5xl flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:max-w-sm">
            <HomeHeading>Work History</HomeHeading>
            <div className="text-3xl md:text-4xl font-clash font-medium mt-2">
              <p>Experience</p>
            </div>
            <div className="mt-4 space-y-4 text-sm md:text-base">
              <p>
                I have worked with some of the most innovative industry leaders
                to help build their top-notch products.
              </p>
            </div>
          </div>
          <Accordion type="single" collapsible asChild>
            <Timeline className="flex-auto w-full md:max-w-lg">
              {Experience.map((e, idx) => (
                <TimelineItem
                  key={idx}
                  className="py-2"
                  next={idx + 1 !== Experience.length}
                >
                  <AccordionItem value={idx.toString()}>
                    <div className="flex flex-col">
                      <AccordionTrigger
                        className="flex items-center gap-4 w-full p-0"
                        down={false}
                        hover={false}
                      >
                        <div className="size-8 border rounded-full overflow-hidden bg-white">
                          <img
                            className="h-full w-full object-contain"
                            src={e.logo}
                            alt={e.company}
                          />
                        </div>
                        <div className="flex-auto">
                          <div className="flex gap-4 justify-between items-center">
                            <h3 className="font-medium">{e.title}</h3>
                          </div>
                          <div className="flex justify-between items-start gap-2 text-xs md:text-sm">
                            <a
                              className="font-medium hover:underline"
                              href={e.website}
                              rel="noopener noreferrer"
                              target="_blank"
                              aria-label={e.company}
                              title={e.company}
                              onClick={(e) => e.stopPropagation()}
                            >
                              @{e.company}
                            </a>
                            <p className="text-xs md:text-sm opacity-60">
                              {e.period}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-0">
                        <p className="pt-4 text-xs md:text-sm opacity-80">
                          {e.description}
                        </p>
                      </AccordionContent>
                      {idx + 1 !== Experience.length && (
                        <Separator className="mt-4 opacity-60" />
                      )}
                    </div>
                  </AccordionItem>
                </TimelineItem>
              ))}
            </Timeline>
          </Accordion>
        </HomeSection>
      </HomeSection>
      <HomeFooter />
    </HomeLayoutPage>
  );
}
