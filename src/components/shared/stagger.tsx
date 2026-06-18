import type {ReactNode, ReactElement} from "react";
import {Children, cloneElement, isValidElement} from "react";

interface StaggerProps {
  children: ReactNode
  staggerDelay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale"
  className?: string
}

interface RevealProps {
  delay?: number
  duration?: number
  direction?: string
}

const Stagger = ({children, staggerDelay = 100, duration = 600, direction = "up", className}: StaggerProps) => (
  <div className={className}>
    {Children.map(children, (child, index) => {
      if (!isValidElement<RevealProps>(child)) return child;
      return cloneElement<RevealProps>(child as ReactElement<RevealProps>, {
        delay: index * staggerDelay,
        duration,
        direction,
      });
    })}
  </div>
);

export default Stagger;
