import { HomeLayoutPage } from "@/layouts/home";
import { HomeSection } from "@/layouts/home/section";
import { HomeFooter } from "@/pages/home/footer";
import CircularText from "@/components/ui/circular-text";
import { Socials } from "./socials";
import { HomeHeading } from "@/layouts/home/heading";
import { Trans } from "@lingui/react";
import { useI18n } from "@/components/providers/i18n";
import { useEffect } from "react";

export function Contact() {
  const { locale, loadMessages } = useI18n();

  useEffect(() => {
    loadMessages(locale, import(`@/pages/contact/i18n/${locale}.json`));
  }, [loadMessages, locale]);

  return (
    <HomeLayoutPage>
      <HomeSection className="m-auto max-w-2xl">
        <div className="relative size-48 p-4 rounded-full m-auto">
          <img src="/assets/icons/apple-icon.png" alt="profile-picture" />
          <CircularText
            text="ENGINEER*ENTREPRENEUR*"
            onHover="slowDown"
            spinDuration={20}
            className="absolute font-clash font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground size-[240px]"
          />
        </div>
        <div className="mt-12">
          <HomeHeading>
            <Trans id="contact.title" message="Get in touch" />
          </HomeHeading>
          <div className="text-3xl md:text-4xl font-clash font-medium mt-2">
            <p>
              <Trans
                id="contact.sub-title"
                message="Let’s build something that scales and performs."
              />
            </p>
          </div>
          <div className="mt-4 space-y-4 text-sm/6 md:text-base/8">
            <p>
              <Trans
                id="contact.description"
                message="I partner with founders and product teams to turn complex ideas into elegant, reliable systems. Whether you’re validating an MVP, unblocking a critical feature, or tuning performance, I focus on shipping outcomes—fast—and setting foundations that last."
              />
            </p>
            <p>
              <Trans
                id="contact.description2"
                message="Typical engagements range from 4–12 weeks. I can lead hands-on implementation, run an architecture review, or embed with your team to accelerate delivery and improve developer experience."
              />
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>
                <Trans
                  id="contact.work.point1"
                  message="Architecture and system design reviews"
                />
              </li>
              <li>
                <Trans
                  id="contact.work.point2"
                  message="Performance & reliability audits"
                />
              </li>
              <li>
                <Trans
                  id="contact.work.point3"
                  message="Shipping MVPs and high-impact features"
                />
              </li>
            </ul>
            <p>
              <Trans
                id="contact.description3"
                message="Prefer async? Send a brief—I’ll reply within 1–2 business days with next steps."
              />
            </p>
          </div>
          <Socials className="mt-6" />
        </div>
      </HomeSection>
      <HomeFooter />
    </HomeLayoutPage>
  );
}
