import { Marquee, MarqueeFade } from "@/components/ui/marquee";
import { ExternalLink, Sparkle } from "lucide-react";
import personal from "@/data/personal.json";
import { HomeSection } from "@/layouts/home/section";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
        <h1 className="hero-title font-clash font-medium text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
          Building <span className="text-primary">systems</span>
          <br />
          that <span className="text-primary">scale & perform</span>.
        </h1>

        {/* Description */}
        <div className="hero-description mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <Separator className="flex-auto" />
            <p className="w-full md:max-w-lg text-sm text-muted-foreground leading-relaxed">
              Turning complex challenges into elegant, scalable software
              solutions that not only deliver measurable impact but also drive
              long-term growth and innovation.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="hero-buttons flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Social Links */}
          <div className="flex flex-wrap gap-6">
            <Link
              to={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-sm uppercase tracking-wider">LinkedIn</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-sm uppercase tracking-wider">GitHub</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-sm uppercase tracking-wider">Email</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* CTA Button */}
          <Link to="/about">
            <Button className="bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-3 font-medium transition-all duration-300">
              Know me better
            </Button>
          </Link>
        </div>
      </div>
      <section className="relative mt-16">
        <div className="border-y py-3 md:pb-4">
          <Marquee
            scrollerClassName="items-center opacity-15 font-clash font-medium md:text-[4.4rem] md:leading-[5.2rem]"
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
        <MarqueeFade side="left" className="from-background" />
        <MarqueeFade side="right" className="from-background" />
      </section>
    </HomeSection>
  );
}
