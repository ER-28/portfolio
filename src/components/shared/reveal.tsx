"use client";

import type {ReactNode} from "react";
import {cn} from "@/lib/utils";
import {useInView} from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale"
}

const directionClasses: Record<string, string> = {
  up: "translate-y-5",
  down: "-translate-y-5",
  left: "translate-x-5",
  right: "-translate-x-5",
  fade: "",
  scale: "scale-95",
};

const Reveal = ({children, className, delay = 0, duration = 600, direction = "up"}: RevealProps) => {
  const {ref, inView} = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        inView ? "opacity-100 translate-x-0 translate-y-0 scale-100" : `opacity-0 ${directionClasses[direction]}`,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
