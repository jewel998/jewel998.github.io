import { TextReveal } from "@/components/ui/text-reveal";
import { HomeHeading } from "@/layouts/home/heading";
import { HomeSection } from "@/layouts/home/section";
import { useEffect, useMemo } from "react";
import personal from "@/data/personal.json";
import { Trans, useLingui } from "@lingui/react";
import { useI18n } from "@/components/providers/i18n";

export function HomeAbout() {
  const { isReady, locale, loadMessages } = useI18n();
  const { i18n } = useLingui();
  const years = useMemo(
    () =>
      Math.floor(
        (new Date().getTime() - new Date(personal.careerStart).getTime()) /
          (365 * 24 * 60 * 60 * 1000)
      ),
    []
  );
  const description = useMemo(
    () => {
      const str = i18n._({
        id: "home.about.description",
        message:
          "I'm {name}, a full-stack developer and entrepreneur with {years}+ years of experience building products that merge technology with creativity. From startups to established companies, I’ve helped craft digital solutions that scale, inspire, and leave an impact.",
        values: { name: personal.name, years },
      });
      return str;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isReady, years]
  );

  useEffect(() => {
    loadMessages(locale, import(`@/pages/home/about/i18n/${locale}.json`));
  }, [loadMessages, locale]);

  return (
    <HomeSection className="py-0 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-center items-center">
        <HomeHeading>
          <Trans id="home.about.title" message="About Me" />
        </HomeHeading>
      </div>
      <TextReveal className="justify-center text-center font-medium text-xl/8 md:text-2xl/10 lg:text-3xl/12 xl:text-4xl/14">
        {description}
      </TextReveal>
    </HomeSection>
  );
}
