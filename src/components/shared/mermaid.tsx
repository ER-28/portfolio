"use client";

import {useEffect, useRef, useId} from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#7C5CFC",
    primaryTextColor: "#fff",
    primaryBorderColor: "#7C5CFC",
    lineColor: "#7C5CFC",
    secondaryColor: "#1a1a24",
    tertiaryColor: "#0B0B0F",
    clusterBkg: "#0f0f15",
    clusterBorder: "#2a2a3a",
    nodeBorder: "#2a2a3a",
    nodeTextColor: "#e0e0e0",
    edgeLabelBackground: "#0B0B0F",
    mainBkg: "#0B0B0F",
  },
});

interface MermaidDiagramProps {
  chart: string;
}

const MermaidDiagram = ({chart}: MermaidDiagramProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!ref.current) return;
    mermaid.render(`mermaid-${id.replace(/[^a-zA-Z0-9]/g, "")}`, chart).then(({svg}) => {
      if (ref.current) ref.current.innerHTML = svg;
    });
  }, [chart, id]);

  return <div ref={ref} className="w-full" />;
};

export default MermaidDiagram;
