import { ShinyText } from "@/components/ui/shiny-text";
import { Sparkle } from "lucide-react";
import {
  type ComponentProps,
  type ExoticComponent,
  type ReactNode,
} from "react";
import { cn } from "@/lib";

interface HomeHeadingProps {
  className?: string;
  icon?: ExoticComponent<ComponentProps<"svg">>;
  children: ReactNode;
}

export function HomeHeading({
  className,
  icon: Icon = Sparkle,
  children,
}: HomeHeadingProps) {
  return (
    <div
      className={cn(
        "w-fit font-clash dark:font-medium flex items-center gap-2 text-primary dark:text-primary/60 uppercase text-sm md:text-base",
        className
      )}
    >
      <Icon className="size-4 md:size-4.5" />
      <ShinyText>
        <h3>{children}</h3>
      </ShinyText>
    </div>
  );
}

export function HomeSubHeading({ children, className }: HomeHeadingProps) {
  return (
    <p
      className={cn(
        "text-4xl md:text-5xl font-clash font-medium mt-2",
        className
      )}
    >
      {children}
    </p>
  );
}

export function HomeDescription({ className, children }: HomeHeadingProps) {
  return (
    <p
      className={cn(
        "inline-block space-y-4 text-sm md:text-base opacity-60",
        className
      )}
    >
      {children}
    </p>
  );
}
