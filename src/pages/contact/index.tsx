import { HomeLayoutPage } from "@/layouts/home";
import { HomeSection } from "@/layouts/home/section";
import { HomeFooter } from "@/pages/home/footer";
import CircularText from "@/components/ui/circular-text";
import { Socials } from "./socials";
import {
  HomeDescription,
  HomeHeading,
  HomeSubHeading,
} from "@/layouts/home/heading";
import { Trans } from "@lingui/react";
import { useI18n } from "@/components/providers/i18n";
import { useEffect } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

export function Contact() {
  const { locale, loadMessages } = useI18n();

  useEffect(() => {
    loadMessages(locale, import(`@/pages/contact/i18n/${locale}.json`));
  }, [loadMessages, locale]);

  return (
    <HomeLayoutPage>
      <HomeSection className="m-auto max-w-2xl">
        <BlurFade inView className="relative size-48 p-4 rounded-full m-auto">
          <img src="/assets/icons/apple-icon.png" alt="profile-picture" />
          <CircularText
            text="ENGINEER*ENTREPRENEUR*"
            onHover="slowDown"
            spinDuration={20}
            className="absolute font-clash font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground size-[240px]"
          />
        </BlurFade>
        <div className="mt-12">
          <BlurFade inView>
            <HomeHeading>
              <Trans id="contact.title" message="Get in touch" />
            </HomeHeading>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <HomeSubHeading>
              <Trans
                id="contact.sub-title"
                message="Let’s build something that scales and performs."
              />
            </HomeSubHeading>
          </BlurFade>
          <div className="mt-4 space-y-4 text-sm/6 md:text-base/8">
            <BlurFade delay={0.2} inView>
              <HomeDescription>
                <Trans
                  id="contact.description"
                  message="I partner with founders and product teams to turn complex ideas into elegant, reliable systems. Whether you’re validating an MVP, unblocking a critical feature, or tuning performance, I focus on shipping outcomes—fast—and setting foundations that last."
                />
              </HomeDescription>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <HomeDescription>
                <Trans
                  id="contact.description2"
                  message="Typical engagements range from 4–12 weeks. I can lead hands-on implementation, run an architecture review, or embed with your team to accelerate delivery and improve developer experience."
                />
              </HomeDescription>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <ul className="list-disc list-inside">
                <li>
                  <HomeDescription>
                    <Trans
                      id="contact.work.point1"
                      message="Architecture and system design reviews"
                    />
                  </HomeDescription>
                </li>
                <li>
                  <HomeDescription>
                    <Trans
                      id="contact.work.point2"
                      message="Performance & reliability audits"
                    />
                  </HomeDescription>
                </li>
                <li>
                  <HomeDescription>
                    <Trans
                      id="contact.work.point3"
                      message="Shipping MVPs and high-impact features"
                    />
                  </HomeDescription>
                </li>
              </ul>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <HomeDescription>
                <Trans
                  id="contact.description3"
                  message="Prefer async? Send a brief—I’ll reply within 1–2 business days with next steps."
                />
              </HomeDescription>
            </BlurFade>
          </div>
          <Socials className="mt-6" />
        </div>
      </HomeSection>
      <HomeFooter />
    </HomeLayoutPage>
  );
}
