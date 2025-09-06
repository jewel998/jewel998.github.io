import { Timeline, TimelineItem } from "@/components/ui/timeline";
import Experience from "@/data/experience.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";
import { HomeSection } from "@/layouts/home/section";
import {
  HomeDescription,
  HomeHeading,
  HomeSubHeading,
} from "@/layouts/home/heading";
import { Trans } from "@lingui/react";
import { useI18n } from "@/components/providers/i18n";
import { useEffect } from "react";

export function AboutExperience() {
  const { locale, loadMessages } = useI18n();

  useEffect(() => {
    loadMessages(
      locale,
      import(`@/pages/about/experience/i18n/${locale}.json`)
    );
  }, [loadMessages, locale]);

  return (
    <HomeSection className="px-6 md:px-12 m-auto max-w-6xl flex flex-col md:flex-row justify-between items-start gap-8">
      <BlurFade delay={0.3} inView className="md:max-w-sm">
        <HomeHeading>
          <Trans id="about.experience.title" message="Work History" />
        </HomeHeading>
        <HomeSubHeading>
          <Trans id="about.experience.sub-title" message="Experience" />
        </HomeSubHeading>
        <HomeDescription className="mt-4">
          <Trans
            id="about.experience.description"
            message="I have worked with some of the most innovative industry leaders to help build their top-notch products."
          />
        </HomeDescription>
      </BlurFade>
      <Accordion type="single" collapsible asChild>
        <Timeline className="flex-auto w-full md:max-w-2xl">
          {Experience.map((e, idx) => (
            <BlurFade key={idx} delay={0.6 + idx * 0.2} inView>
              <TimelineItem
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
                          <h3 className="text-sm md:text-base font-medium">
                            {e.title}
                          </h3>
                        </div>
                        <div className="flex justify-between items-start gap-2 text-xs md:text-sm opacity-60">
                          <a
                            className="font-medium hover:underline "
                            href={e.website}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label={e.company}
                            title={e.company}
                            onClick={(e) => e.stopPropagation()}
                          >
                            @{e.company}
                          </a>
                          <p>{e.period}</p>
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
            </BlurFade>
          ))}
        </Timeline>
      </Accordion>
    </HomeSection>
  );
}
