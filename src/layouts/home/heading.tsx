import { ShinyText } from "@/components/ui/shiny-text";
import { Sparkle } from "lucide-react";
import { type ReactNode } from "react";

interface HomeHeadingProps {
  children: ReactNode;
}

export function HomeHeading({ children }: HomeHeadingProps) {
  return (
    <div className="w-fit font-clash flex items-center gap-2 text-primary/60 uppercase text-xs md:text-sm">
      <Sparkle className="size-4 md:size-4.5" />
      <ShinyText>{children}</ShinyText>
    </div>
  );
}
