import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import {
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
  useMemo,
  useRef,
} from "react";
import { cn } from "@/lib";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  wordClassName?: string;
  letterClassName?: string;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  wordClassName,
  letterClassName,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const startIndex = useRef(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "end center"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = useMemo(() => children.split(" "), [children]);

  return (
    <span
      ref={targetRef}
      className={cn(
        "flex flex-wrap p-5 lg:p-10 font-bold text-black/20 dark:text-white/20 md:p-8",
        "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
        className
      )}
    >
      {words.map((word, i) => {
        if (i === 0) startIndex.current = 0;
        else startIndex.current += words[i - 1].length + 1;
        return (
          <Word
            key={i}
            startIndex={startIndex.current}
            length={children.length}
            progress={scrollYProgress}
            className={wordClassName}
            letterClassName={letterClassName}
          >
            {word}
          </Word>
        );
      })}
    </span>
  );
};

interface WordProps {
  startIndex: number;
  length: number;
  children: ReactNode;
  progress: MotionValue<number>;
  className?: string;
  letterClassName?: string;
}

function Word({
  startIndex,
  length,
  children,
  progress,
  className,
  letterClassName,
}: WordProps) {
  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const letters = useMemo(() => children.split(""), [children]);
  return (
    <span className={cn("relative mx-1", className)}>
      {letters.map((letter, i) => {
        const start = (startIndex + i) / length;
        const end = (startIndex + i + 1) / length;
        return (
          <Letter
            key={i}
            progress={progress}
            range={[start, end]}
            className={letterClassName}
          >
            {letter === " " ? <>&nbsp;</> : letter}
          </Letter>
        );
      })}
    </span>
  );
}

interface LetterProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}

function Letter({ children, progress, range, className }: LetterProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className={cn("absolute opacity-30", className)}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={cn("text-black dark:text-white", className)}
      >
        {children}
      </motion.span>
    </span>
  );
}
