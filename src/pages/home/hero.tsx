import { Marquee } from "@/components/ui/marquee";
import { ExternalLink, Sparkle } from "lucide-react";
import personal from "@/data/personal.json";
import { HomeSection } from "./section";

export function HomeHero() {
  return (
    <HomeSection className="relative min-h-dvh flex flex-col justify-center py-8 px-0!">
      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="hero-subtitle flex items-center gap-2 mb-6">
          <span className="text-2xl">👋</span>
          <span className="text-lg text-muted-foreground">
            Hey! It's me {personal.name.split(" ")[0]},
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Building <span className="text-emerald-500">systems</span>
          <br />
          that <span className="text-emerald-500">scale & perform</span>.
        </h1>

        {/* Description */}
        <div className="hero-description mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="flex-auto h-0.25 w-full bg-slate-200"></div>
            <p className="w-full md:max-w-lg text-sm text-muted-foreground leading-relaxed">
              Turning complex challenges into elegant software solutions that
              scale and deliver impact.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="hero-buttons flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Social Links */}
          <div className="flex flex-wrap gap-6">
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-sm uppercase tracking-wider">LinkedIn</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href={`https://${personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-sm uppercase tracking-wider">GitHub</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-sm uppercase tracking-wider">Email</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* CTA Button */}
          <button className="bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-3 font-medium transition-all duration-300">
            <a href="/about">Know me better</a>
          </button>
        </div>
      </div>
      <section className="relative mt-16">
        <div className="border-y pt-3 pb-6">
          <Marquee
            scrollerClassName="items-center opacity-15 md:text-[4.4rem] md:leading-[5.2rem]"
            texts={[
              <div className="flex flex-row gap-8 items-center px-4">
                <span>Architecture</span>
                <Sparkle className="size-9" />
                <span>Leadership</span>
                <Sparkle className="size-9" />
                <span>UX</span>
                <Sparkle className="size-9" />
                <span>Engineering</span>
                <Sparkle className="size-9" />
                <span>Innovation</span>
                <Sparkle className="size-9" />
              </div>,
            ]}
          />
        </div>
        <div className="absolute top-0 left-0 w-[35%] h-full bg-linear-to-r from-background to-transparent"></div>
        <div className="absolute top-0 right-0 w-[35%] h-full bg-linear-to-l from-background to-transparent"></div>
      </section>
    </HomeSection>
  );
}
