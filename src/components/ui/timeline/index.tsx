import { cn } from "@/lib";
import type { ComponentProps } from "react";
import { Dot } from "@/components/ui/dot";
import { Separator } from "@/components/ui/separator";

export function Timeline({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

interface TimelineItemProps extends ComponentProps<"div"> {
  next?: boolean;
  dot?: ComponentProps<typeof Dot>;
  lineClassName?: string;
}

export function TimelineItem({
  className,
  children,
  next,
  dot,
  lineClassName,
  ...props
}: TimelineItemProps) {
  return (
    <div
      className={cn("flex flex-row items-stretch gap-4", className)}
      {...props}
    >
      <div className="flex flex-col relative self-stretch">
        <Dot
          {...dot}
          color={dot?.color ?? "bg-primary"}
          size={dot?.size ?? "sm"}
          className="flex-none relative left-1 top-2.25 -translate-y-1/2 -translate-x-1/2"
        />
        {next && (
          <Separator
            orientation="vertical"
            className={cn(
              "relative left-1 translate-x-1/2 top-4.25 opacity-80",
              lineClassName
            )}
          />
        )}
      </div>
      <div className="flex-auto">{children}</div>
    </div>
  );
}
