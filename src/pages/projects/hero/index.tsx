import { HomeSection } from "@/layouts/home/section";
import { HomeHeading, HomeSubHeading } from "@/layouts/home/heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { Trans } from "@lingui/react";
import { useI18n } from "@/components/providers/i18n";
import { useEffect } from "react";

export function ProjectsHero() {
  const { locale, loadMessages } = useI18n();

  useEffect(() => {
    loadMessages(locale, import(`@/pages/projects/hero/i18n/${locale}.json`));
  }, [loadMessages, locale]);

  return (
    <HomeSection className="pt-28 pb-8">
      <div className="max-w-5xl mx-auto">
        <BlurFade inView>
          <HomeHeading>
            <Trans id="projects.hero.title" message="My Work" />
          </HomeHeading>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <HomeSubHeading className="mt-4">
            <Trans
              id="projects.hero.subtitle"
              message="Creating next level digital products"
            />
          </HomeSubHeading>
        </BlurFade>
      </div>
    </HomeSection>
  );
}
