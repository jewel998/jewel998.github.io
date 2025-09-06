import { Marquee } from "@/components/ui/marquee";
import { HomeSection } from "@/layouts/home/section";
import { Chip } from "@/components/ui/chip";
import { MarqueeFade } from "@/components/ui/marquee";
import technologies from "@/data/technologies.json";
import { useEffect, useMemo } from "react";
import {
  HomeDescription,
  HomeHeading,
  HomeSubHeading,
} from "@/layouts/home/heading";
import { useI18n } from "@/components/providers/i18n";
import { Trans } from "@lingui/react";
import personal from "@/data/personal.json";
import { Code2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import CircularText from "@/components/ui/circular-text";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  const { locale, loadMessages } = useI18n();
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

  useEffect(() => {
    loadMessages(locale, import(`@/pages/about/hero/i18n/${locale}.json`));
  }, [loadMessages, locale]);

  return (
    <HomeSection className="py-12 flex flex-col justify-center">
      <div className="mt-24 w-full flex flex-col md:flex-row gap-8 md:gap-12 justify-between max-w-3xl mx-auto">
        <div className="flex-none">
          <BlurFade inView className="relative size-48 p-4 rounded-full m-auto">
            <img src="/assets/icons/apple-icon.png" alt="profile-picture" />
            <CircularText
              text="ENGINEER*ENTREPRENEUR*"
              onHover="slowDown"
              spinDuration={20}
              className="absolute font-clash font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground size-[240px]"
            />
          </BlurFade>
        </div>
        <div className="flex-auto max-w-md">
          <BlurFade inView>
            <HomeHeading icon={Code2}>
              <Trans id="about.hero.title" message="Fullstack Engineer" />
            </HomeHeading>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <HomeSubHeading>{personal.name}</HomeSubHeading>
          </BlurFade>
          <BlurFade delay={0.6} inView>
            <HomeDescription className="mt-4">
              <Trans
                id="about.hero.description"
                message="Turning complex challenges into elegant, scalable software solutions that not only deliver measurable impact but also drive long-term growth and innovation."
              />
            </HomeDescription>
          </BlurFade>
          <BlurFade delay={0.6} inView className="mt-6">
            <a
              href="/Jyotirmoy Barman.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Trans id="about.hero.resume" message="My resume" />
              </Button>
            </a>
          </BlurFade>
        </div>
      </div>
      <div className="relative mt-24">
        <div className="border-y border-border/40 py-6">
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
      </div>
    </HomeSection>
  );
}
