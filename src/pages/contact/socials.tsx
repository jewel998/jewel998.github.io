import personal from "@/data/personal.json";
import { cn } from "@/lib";
import { Github, Linkedin, Mail } from "lucide-react";
import type { ComponentProps, ExoticComponent } from "react";

export function Socials({ className }: ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      <Social href={"mailto:" + personal.email} icon={Mail} />
      <Social href={personal.linkedin} icon={Linkedin} />
      <Social href={personal.github} icon={Github} />
    </div>
  );
}

interface SocialProps {
  className?: string;
  href: string;
  icon: ExoticComponent<ComponentProps<"svg">>;
}

function Social({ href, icon: Icon, className }: SocialProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("hover:text-primary", className)}
      aria-label="social"
    >
      {Icon && <Icon className="size-4 md:size-5" />}
    </a>
  );
}
