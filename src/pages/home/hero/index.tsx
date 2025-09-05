import { Marquee, MarqueeFade } from "@/components/ui/marquee";
import { ExternalLink, Sparkle } from "lucide-react";
import personal from "@/data/personal.json";
import { HomeSection } from "@/layouts/home/section";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";
import { Trans } from "@lingui/react";
import { useI18n } from "@/components/providers/i18n";
import { useEffect } from "react";

export function HomeHero() {
  const { locale, loadMessages } = useI18n();

  useEffect(() => {
    loadMessages(locale, import(`@/pages/home/hero/i18n/${locale}.json`));
  }, [loadMessages, locale]);

  return (
    <HomeSection className="relative min-h-dvh flex flex-col justify-center py-8 px-0!">
      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <BlurFade inView className="hero-subtitle flex items-center gap-2 mb-6">
          <span className="text-2xl">👋</span>
          <span className="text-lg text-muted-foreground">
            <Trans
              id="home.hero.title"
              message="Hey! It's me {firstName}"
              values={{ firstName: personal.name.split(" ")[0] }}
            />
          </span>
        </BlurFade>

        {/* Main Heading */}
        <BlurFade
          delay={0.3}
          inView
          className="hero-title font-clash font-medium text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight"
        >
          <Trans
            id="home.hero.sub-title"
            message="Building <0>systems </0><1></1>that <0>scale & perform</0>."
            components={[<span className="text-primary" />, <br />]}
          />
        </BlurFade>

        {/* Description */}
        <BlurFade delay={0.6} inView className="hero-description mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <Separator className="flex-auto" />
            <p className="w-full md:max-w-lg text-sm text-muted-foreground leading-relaxed">
              <Trans
                id="home.hero.description"
                message="Turning complex challenges into elegant, scalable software solutions that not only deliver measurable impact but also drive long-term growth and innovation."
              />
            </p>
          </div>
        </BlurFade>

        {/* Bottom Section */}
        <div className="hero-buttons flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Social Links */}
          <div className="flex flex-wrap gap-6">
            <BlurFade delay={0.6} inView>
              <Link
                to={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-sm uppercase tracking-wider">
                  <Trans id="home.socials.linkedin" message="LinkedIn" />
                </span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </BlurFade>
            <BlurFade delay={0.9} inView>
              <Link
                to={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-sm uppercase tracking-wider">
                  <Trans id="home.socials.github" message="GitHub" />
                </span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </BlurFade>
            <BlurFade delay={1.2} inView>
              <Link
                to={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-sm uppercase tracking-wider">
                  <Trans id="home.socials.email" message="Email" />
                </span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </BlurFade>
          </div>

          {/* CTA Button */}
          <BlurFade delay={0.6} inView>
            <Link to="/about">
              <Button variant="outline" className="px-8 py-3 font-medium">
                <Trans id="home.hero.cta" message="Know me better" />
              </Button>
            </Link>
          </BlurFade>
        </div>
      </div>
      <section className="relative mt-16">
        <div className="border-y py-3 md:pb-4">
          <Marquee
            scrollerClassName="items-center opacity-15 font-clash font-medium md:text-[4.4rem] md:leading-[5.2rem]"
            texts={[
              <div className="flex flex-row gap-8 items-center px-4">
                <span>
                  <Trans
                    id="home.expertise.architecture"
                    message="Architecture"
                  />
                </span>
                <Sparkle className="size-9" />
                <span>
                  <Trans id="home.expertise.leadership" message="Leadership" />
                </span>
                <Sparkle className="size-9" />
                <span>
                  <Trans id="home.expertise.ux" message="UX" />
                </span>
                <Sparkle className="size-9" />
                <span>
                  <Trans
                    id="home.expertise.engineering"
                    message="Engineering"
                  />
                </span>
                <Sparkle className="size-9" />
                <span>
                  <Trans id="home.expertise.innovation" message="Innovation" />
                </span>
                <Sparkle className="size-9" />
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
