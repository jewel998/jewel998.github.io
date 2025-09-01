import { HomeLayoutPage } from "@/layouts/home";
import { Sparkle } from "lucide-react";
import { HomeSection } from "@/layouts/home/section";
import { HomeFooter } from "@/pages/home/footer";
import CircularText from "@/components/ui/circular-text";
import { Socials } from "./socials";

export function Contact() {
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
          <div className="font-clash flex items-center gap-2 text-primary uppercase text-xs md:text-sm">
            <Sparkle className="size-2.5 md:size-3" />
            <p>Get in touch</p>
          </div>
          <div className="text-3xl md:text-4xl font-clash mt-2">
            <p>Let’s build something that scales and performs.</p>
          </div>
          <div className="mt-4 space-y-4 text-sm/6 md:text-base/8">
            <p>
              I partner with founders and product teams to turn complex ideas
              into elegant, reliable systems. Whether you’re validating an MVP,
              unblocking a critical feature, or tuning performance, I focus on
              shipping outcomes—fast—and setting foundations that last.
            </p>
            <p>
              Typical engagements range from 4–12 weeks. I can lead hands-on
              implementation, run an architecture review, or embed with your
              team to accelerate delivery and improve developer experience.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Architecture and system design reviews</li>
              <li>Performance & reliability audits</li>
              <li>Shipping MVPs and high-impact features</li>
            </ul>
            <p>
              Prefer async? Send a brief—I’ll reply within 1–2 business days
              with next steps.
            </p>
          </div>
          <Socials className="mt-6" />
        </div>
      </HomeSection>
      <HomeFooter />
    </HomeLayoutPage>
  );
}
