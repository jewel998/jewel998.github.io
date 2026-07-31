import { BlurFade } from "@/components/ui/blur-fade";
import personal from "@/data/personal.json";
import { cn } from "@/lib";
import { Github, Linkedin, Mail } from "lucide-react";
import type { ComponentProps, ExoticComponent } from "react";

export function Socials({ className }: ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      <BlurFade delay={0.3} inView className="w-fit">
        <Social href={"mailto:" + personal.email} icon={Mail} label="Email" />
      </BlurFade>
      <BlurFade delay={0.6} inView className="w-fit">
        <Social href={personal.linkedin} icon={Linkedin} label="LinkedIn" />
      </BlurFade>
      <BlurFade delay={0.9} inView className="w-fit">
        <Social href={personal.github} icon={Github} label="GitHub" />
      </BlurFade>
    </div>
  );
}

interface SocialProps {
  className?: string;
  href: string;
  icon: ExoticComponent<ComponentProps<"svg">>;
  label: string;
}

function Social({ href, icon: Icon, className, label }: SocialProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("hover:text-primary", className)}
      aria-label={label}
    >
      {Icon && <Icon className="size-4.5" />}
    </a>
  );
}
