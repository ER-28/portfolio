import type {Metadata} from "next";
import Link from "next/link";
import Reveal from "@/components/shared/reveal";
import Stagger from "@/components/shared/stagger";
import MermaidDiagram from "@/components/shared/mermaid";

export const metadata: Metadata = {
  title: "Infrastructure - Lylian Guerra--Rago",
  description: "Professional automated infrastructure architecture — Proxmox, Talos Kubernetes, CephFS, and CI/CD pipeline.",
};

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
  {label: "Infra VMs", value: "NixOS / Talos Kubernetes"},
  {label: "VPN", value: "WireGuard"},
];

const sections = [
  {
    title: "Resilient Infrastructure VMs",
    content: "Gitea, ArgoCD, pfSense, and WireGuard run on dedicated NixOS VMs isolated from the Kubernetes cluster. If the K8s control plane or workloads fail, these critical services remain fully operational — ensuring Git, CI/CD, and network access are always available.",
  },
  {
    title: "GitOps Pipeline",
    content: "Gitea hosts Git repositories and pushes webhooks to ArgoCD for automated, declarative deployments into the K8s cluster. Terraform manages infrastructure state, and Helm charts package manifests for reproducible rollouts — all triggered from the isolated infrastructure layer.",
  },
  {
    title: "Networking & VPN",
    content: "pfSense runs on a dedicated NixOS VM as the firewall, router, and NAT gateway. WireGuard provides encrypted VPN access for administrators to securely reach the infrastructure from anywhere, routing through pfSense for policy enforcement.",
  },
  {
    title: "High Availability",
    content: "CephFS replicates data across all four Proxmox nodes, ensuring no single point of failure. Kubernetes with Talos provides self-healing pod scheduling, rolling updates, and automated failover for cluster workloads.",
  },
];

const InfrastructurePage = () => (
  <>
    <section className="border-b border-border/40">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 sm:px-7 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5m7-7-7 7 7 7"/></svg>
            Back to home
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
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">Architecture</p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Professional Automated Infrastructure
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A fully automated, self-healing homelab built on Proxmox, Talos Kubernetes, and CephFS — from internet to application.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Architecture Overview</h2>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <p className="text-sm text-muted-foreground mb-8 max-w-xl">
              End-to-end topology from the Livebox Pro through the Proxmox cluster, Talos Kubernetes, and cluster services.
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
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">Breakdown</p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-12">
              How It Works
            </h2>
          </Reveal>
          <Stagger staggerDelay={120} direction="up" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
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

export default InfrastructurePage;
