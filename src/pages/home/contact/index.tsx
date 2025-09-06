import { Chip } from "@/components/ui/chip";
import { HomeSection } from "@/layouts/home/section";
import { Plus } from "@/components/ui/plus";
import { Dot } from "@/components/ui/dot";
import { Link } from "@tanstack/react-router";
import { BlurFade } from "@/components/ui/blur-fade";
import { Trans } from "@lingui/react";
import { useI18n } from "@/components/providers/i18n";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export function HomeContact() {
  const { locale, loadMessages } = useI18n();

  useEffect(() => {
    loadMessages(locale, import(`@/pages/home/contact/i18n/${locale}.json`));
  }, [loadMessages, locale]);

  return (
    <HomeSection>
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <BlurFade inView className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Chip
                variant="dashed"
                className="border-primary/40 text-emerald-800 dark:text-emerald-200 bg-lime-50 dark:bg-lime-950"
              >
                <Dot
                  color="bg-emerald-500 dark:bg-emerald-400"
                  ping
                  pingColor="bg-emerald-400 dark:bg-emerald-500"
                />
                <span className="font-medium text-xs">
                  <Trans
                    id="home.contact.available"
                    message="Available for work"
                  />
                </span>
                <Plus position="top-left" />
                <Plus position="top-right" />
                <Plus position="bottom-left" />
                <Plus position="bottom-right" />
              </Chip>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              <Trans id="home.contact.title" message="Let's Work Together" />
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView className="flex justify-center pt-4">
            <Link to="/contact">
              <Button
                variant="outline"
                className="px-8 py-3 font-medium"
                aria-label="Contact"
              >
                <Trans id="home.contact.cta" message="Get In Touch" />
              </Button>
            </Link>
          </BlurFade>
        </div>
      </div>
    </HomeSection>
  );
}
