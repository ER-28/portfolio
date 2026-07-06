import type {ProjectOverview} from "@/types";

export const projectOverview: ProjectOverview = {
    caseStudies: [
        {
            name: "Automated Infrastructure Cluster",
            url: "/infrastructure",
            description: "Fully automated homelab on Proxmox with Talos Kubernetes, CephFS replication, and dedicated NixOS VMs for critical services — featuring GitOps-driven deployments via Gitea and ArgoCD, pfSense firewall, and WireGuard VPN.",
            tags: ["Proxmox", "Kubernetes", "Terraform", "NixOS", "CephFS", "ArgoCD"],
        },
    ],
    sideProjects: [
        {
            name: "PhotoFolio — Photography Portfolio",
            href: "https://er-28.github.io/photofolio/",
            description: "Modern, responsive photography portfolio with a clean minimalist design and optimized image delivery across devices.",
            tags: ["React", "Next.js", "Photography"],
        },
        {
            name: "Reysin — Digital Identity",
            comingSoon: true,
            description: "Personal brand platform and professional landing page serving as a sleek digital identity hub.",
            tags: ["Next.js", "Brand"],
        },
        {
            name: "LumoraPlan — Project Planning",
            comingSoon: true,
            description: "Smart project planning and task management platform designed for teams and individuals.",
            tags: ["SaaS", "Planning"],
        },
    ]
};
