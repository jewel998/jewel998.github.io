import { ShinyText } from "@/components/ui/shiny-text";
import { Sparkle } from "lucide-react";

interface HomeHeadingProps {
  children: string;
}

export function HomeHeading({ children }: HomeHeadingProps) {
  return (
    <div className="font-clash flex items-center gap-2 text-primary/60 uppercase text-xs md:text-sm">
      <Sparkle className="size-4 md:size-4.5" />
      <ShinyText>{children}</ShinyText>
    </div>
  );
}
