"use client";

import Link from "next/link";
import Reveal from "@/components/shared/reveal";
import Stagger from "@/components/shared/stagger";
import MermaidDiagram from "@/components/shared/mermaid";
import {useLocale} from "@/lib/i18n/context";

const chart = `graph TB
    Internet(("Internet<br/>8Gbps"))
    Livebox["Livebox Pro<br/>8Gbps"]
    Switch["Switch<br/>6× 2.5Gbps · 2× 10Gbps SFP+"]

    Internet --- Livebox --- Switch

    subgraph Cluster[Proxmox Cluster]
        direction LR
        S1["Server 1<br/>2.5Gbps"]
        S2["Server 2<br/>2.5Gbps"]
        S3["Server 3<br/>2.5Gbps"]
        S4["Server 4<br/>10Gbps"]
    end

    Switch --> S1 & S2 & S3
    Switch ==> S4

    subgraph K8s["Talos Kubernetes · VMs"]
        K8sNode["Kubernetes"]
        Traefik["Traefik"]
        Ceph["CephFS"]
        Helm["Helm"]
        Terraform["Terraform"]
        Plane["Plane"]
    end

    subgraph Infra["Infrastructure VMs · NixOS"]
        Gitea["Gitea"]
        Argo["ArgoCD"]
        PfSense["pfSense"]
        WG["WireGuard VPN"]
    end

    Cluster --> K8s
    Cluster --> Infra

    PfSense ---|Firewall / NAT| Internet
    WG ---|Admin VPN| PfSense
    PfSense ---|Ingress| Traefik
    Gitea -.->|Webhook| Argo
    Argo -.->|GitOps Deploy| K8sNode`;

const specs = [
  {label: "Internet", value: "8 Gbps"},
  {label: "Switching", value: "6× 2.5Gbps + 2× 10Gbps"},
  {label: "Compute", value: "4× Ryzen 7 3700X"},
  {label: "Memory", value: "128 GB (4× 32 GB)"},
  {label: "Storage Total", value: "30 TB"},
  {label: "Hypervisor", value: "Proxmox VE"},
  {label: "Orchestrator", value: "Talos Kubernetes"},
  {label: "Replication", value: "CephFS"},
  {label: "Infra VMs", value: "NixOS"},
  {label: "VPN", value: "WireGuard"},
];

const InfrastructureContent = () => {
  const {t} = useLocale();

  return (
    <>
      <section className="border-b border-border/40">
        <div className="container">
          <div className="max-w-5xl mx-auto px-4 sm:px-7 py-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5m7-7-7 7 7 7"/></svg>
              {t.infrastructure.backToHome}
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Infrastructure Hero">
        <div className="container">
          <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">{t.infrastructure.label}</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                {t.infrastructure.title}
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {t.infrastructure.subtitle}
              </p>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-0.5 py-3 px-3 rounded-lg bg-muted/50 border border-border/40">
                    <span className="text-xs text-muted-foreground tracking-wider uppercase">{spec.label}</span>
                    <span className="text-sm font-semibold text-primary">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="Architecture Diagram" className="border-t border-border/40">
        <div className="container">
          <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
            <Reveal direction="up">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">{t.infrastructure.diagramTitle}</h2>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <p className="text-sm text-muted-foreground mb-8 max-w-xl">
                {t.infrastructure.diagramDesc}
              </p>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <div className="w-full overflow-x-auto rounded-xl bg-muted/10 border border-border/40 p-4 sm:p-6">
                <MermaidDiagram chart={chart} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="Infrastructure Details" className="border-t border-border/40">
        <div className="container">
          <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">{t.infrastructure.breakdownLabel}</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-12">
                {t.infrastructure.breakdownTitle}
              </h2>
            </Reveal>
            <Stagger staggerDelay={120} direction="up" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.infrastructure.sections.map((section) => (
                <Reveal key={section.title} direction="up">
                  <div className="p-6 rounded-xl bg-muted/20 border border-border/40 h-full">
                    <h3 className="text-lg font-semibold text-primary mb-3">{section.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfrastructureContent;
