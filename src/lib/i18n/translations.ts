export type Locale = "en" | "fr" | "de" | "it" | "es";

export interface Translations {
  hero: {
    role: string
    tagline: string
    contact: string
    exportPdf: string
    stats: {experience: string; projects: string; openSource: string; location: string}
    badge: string
  }
  about: {label: string; greeting: string; p1: string; p2: string; metrics: {years: string; projects: string; openSource: string; certifications: string}}
  skills: {label: string; title: string}
  projects: {label: string; title: string; comingSoon: string}
  experience: {label: string; title: string}
  education: {label: string; title: string}
  contributions: {label: string; title: string; pullRequests: string}
  openSource: {label: string; title: string}
  contact: {label: string; title: string; subtitle: string}
  footer: {builtBy: string}
  infrastructure: {
    label: string
    title: string
    subtitle: string
    diagramTitle: string
    diagramDesc: string
    breakdownLabel: string
    breakdownTitle: string
    backToHome: string
    sections: {title: string; content: string}[]
  }
  data: {
    skillCategories: {label: string; skills: string[]}[]
    experience: {role: string; location: string; bulletPoints: string[]}[]
    education: {title: string; subtitle: string}[]
    projects: {name: string; description: string; tags: string[]}[]
  }
}

export const translations: Record<Locale, Translations> = {
  en: {
    hero: {
      role: "Developer & Sys-admin",
      tagline: "Developer | Dev Ops | Sys-admin",
      contact: "Contact",
      exportPdf: "Export PDF",
      stats: {experience: "Experience", projects: "Projects", openSource: "Open Source", location: "Location"},
      badge: "Developer & Sys-admin",
    },
    about: {
      label: "About",
      greeting: "Hey, I'm Lylian.",
      p1: "A Developer, DevOps and Sysadmin based in Lyon, currently making frontend development at DGFIP, the French Directorate General of Public Finance.",
      p2: "New technology enthusiast, love refactoring and creation of modern architecture. I build enterprise-grade software, open-source tools, and occasionally capture street photography.",
      metrics: {years: "Years of Experience", projects: "Projects Delivered", openSource: "Open Source", certifications: "Certifications"},
    },
    skills: {label: "Skills", title: "Tech Stack"},
    projects: {label: "Work", title: "Projects", comingSoon: "Coming Soon"},
    experience: {label: "Career", title: "Experience"},
    education: {label: "Learning", title: "Education"},
    contributions: {label: "Contributions", title: "Open Source Contributions", pullRequests: "Pull Requests"},
    openSource: {label: "Libraries", title: "Open Source Libraries"},
    contact: {
      label: "Contact",
      title: "Let's work together",
      subtitle: "Lyon, FR — Open for opportunities and collaboration.",
    },
    footer: {builtBy: "Built by"},
    infrastructure: {
      label: "Architecture",
      title: "Professional Automated Infrastructure",
      subtitle: "A fully automated, self-healing homelab built on Proxmox, Talos Kubernetes, and CephFS — from internet to application.",
      diagramTitle: "Architecture Overview",
      diagramDesc: "End-to-end topology from the Livebox Pro through the Proxmox cluster, Talos Kubernetes, and cluster services.",
      breakdownLabel: "Breakdown",
      breakdownTitle: "How It Works",
      backToHome: "Back to home",
      sections: [
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
      ],
    },
    data: {
      skillCategories: [
        {label: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]},
        {label: "Backend", skills: ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"]},
        {label: "DevOps", skills: ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"]},
        {label: "Design & Practices", skills: ["Graphic Design", "UI/UX", "TDD", "Refactoring", "Architecture"]},
      ],
      experience: [
        {
          role: "Founder, Reysin",
          location: "Lyon, FR",
          bulletPoints: [
            "Create enterprise-grade software solutions including planning management systems and electronic document management platforms tailored for business operations",
            "Built and maintained open-source libraries to foster community collaboration and accelerate developer adoption across multiple projects",
            "Designed and implemented nestjs-response-wrapper to standardize API response formatting, reducing integration complexity and improving developer experience across microservices architecture",
          ],
        },
        {
          role: "Photographer & Visual Content Creator, Freelance",
          location: "Lyon, FR",
          bulletPoints: [
            "Capture dynamic street photography and nightlife scenes at bars and nightclubs across Lyon, producing compelling visual narratives for public display",
            "Design and create engaging graphics content optimized for social media platforms including Instagram, TikTok, and Facebook to maximize audience engagement",
            "Edit and mount video content from event coverage, combining raw footage with music, transitions, and effects for professional social media storytelling",
          ],
        },
        {
          role: "Frontend Developer (Apprenticeship), DGFIP",
          location: "Lyon, FR",
          bulletPoints: [
            "Engineered a comprehensive automated testing suite across the frontend application to ensure robust quality assurance and rapid deployment confidence",
            "Systematically refactored and optimized existing codebases to eliminate technical debt, enhance readability, and improve long-term maintainability",
          ],
        },
        {
          role: "Frontend Lead Developer (Apprenticeship), Xefi",
          location: "Lyon, FR",
          bulletPoints: [
            "Architected and deployed a modern software infrastructure to replace an outdated legacy application",
            "Made agile-based project estimation, task breakdown, and sprint planning to ensure timely delivery",
            "Achieved measurable improvements in system performance and maintainability",
          ],
        },
      ],
      education: [
        {title: "Bachelor Responsable Projet Informatique (opt developer)", subtitle: "Isitech — Lyon, FR"},
        {title: "Piscine 42", subtitle: "42 — Lyon, FR"},
        {title: "Baccalaureat STI2D", subtitle: "Lycee Jean-Lurcat — Martigues, FR"},
      ],
      projects: [
        {
          name: "Automated Infrastructure Cluster",
          description: "Fully automated homelab on Proxmox with Talos Kubernetes, CephFS replication, and dedicated NixOS VMs for critical services — featuring GitOps-driven deployments via Gitea and ArgoCD, pfSense firewall, and WireGuard VPN.",
          tags: ["Proxmox", "Kubernetes", "Terraform", "NixOS", "CephFS", "ArgoCD"],
        },
        {
          name: "PhotoFolio — Photography Portfolio",
          description: "Modern, responsive photography portfolio with a clean minimalist design and optimized image delivery across devices.",
          tags: ["React", "Next.js", "Photography"],
        },
        {
          name: "Reysin — Digital Identity",
          description: "Personal brand platform and professional landing page serving as a sleek digital identity hub.",
          tags: ["Next.js", "Brand"],
        },
        {
          name: "LumoraPlan — Project Planning",
          description: "Smart project planning and task management platform designed for teams and individuals.",
          tags: ["SaaS", "Planning"],
        },
      ],
    },
  },

  fr: {
    hero: {
      role: "Développeur & Sys-admin",
      tagline: "Développeur | Dev Ops | Sys-admin",
      contact: "Contact",
      exportPdf: "Exporter en PDF",
      stats: {experience: "Expérience", projects: "Projets", openSource: "Open Source", location: "Localisation"},
      badge: "Développeur & Sys-admin",
    },
    about: {
      label: "À propos",
      greeting: "Salut, je suis Lylian.",
      p1: "Développeur, DevOps et Sysadmin basé à Lyon, actuellement développeur frontend à la DGFIP, la Direction Générale des Finances Publiques.",
      p2: "Passionné de nouvelles technologies, j'aime le refactoring et la création d'architectures modernes. Je construis des logiciels professionnels, des outils open-source, et je capture occasionnellement la photographie de rue.",
      metrics: {years: "Années d'expérience", projects: "Projets réalisés", openSource: "Open Source", certifications: "Certifications"},
    },
    skills: {label: "Compétences", title: "Stack Technique"},
    projects: {label: "Réalisations", title: "Projets", comingSoon: "Bientôt disponible"},
    experience: {label: "Carrière", title: "Expérience"},
    education: {label: "Formation", title: "Éducation"},
    contributions: {label: "Contributions", title: "Contributions Open Source", pullRequests: "Pull Requests"},
    openSource: {label: "Bibliothèques", title: "Bibliothèques Open Source"},
    contact: {
      label: "Contact",
      title: "Travaillons ensemble",
      subtitle: "Lyon, FR — Ouvert aux opportunités et collaborations.",
    },
    footer: {builtBy: "Construit par"},
    infrastructure: {
      label: "Architecture",
      title: "Infrastructure Automatisée Professionnelle",
      subtitle: "Un homelab entièrement automatisé et auto-réparateur basé sur Proxmox, Talos Kubernetes et CephFS — d'Internet à l'application.",
      diagramTitle: "Vue d'ensemble de l'architecture",
      diagramDesc: "Topologie de bout en bout, de la Livebox Pro au cluster Proxmox, Talos Kubernetes et aux services du cluster.",
      breakdownLabel: "Analyse",
      breakdownTitle: "Fonctionnement",
      backToHome: "Retour à l'accueil",
      sections: [
        {
          title: "VMs d'infrastructure résilientes",
          content: "Gitea, ArgoCD, pfSense et WireGuard fonctionnent sur des VMs NixOS dédiées, isolées du cluster Kubernetes. En cas de panne du plan de contrôle K8s ou des charges de travail, ces services critiques restent pleinement opérationnels — garantissant un accès permanent à Git, CI/CD et au réseau.",
        },
        {
          title: "Pipeline GitOps",
          content: "Gitea héberge les dépôts Git et envoie des webhooks à ArgoCD pour des déploiements automatisés et déclaratifs dans le cluster K8s. Terraform gère l'état de l'infrastructure et Helm empaquète les manifests pour des déploiements reproductibles — le tout déclenché depuis la couche d'infrastructure isolée.",
        },
        {
          title: "Réseau & VPN",
          content: "pfSense fonctionne sur une VM NixOS dédiée en tant que pare-feu, routeur et passerelle NAT. WireGuard fournit un accès VPN chiffré permettant aux administrateurs d'atteindre l'infrastructure en toute sécurité depuis n'importe où, en transitant par pfSense pour l'application des politiques.",
        },
        {
          title: "Haute disponibilité",
          content: "CephFS réplique les données sur les quatre nœuds Proxmox, éliminant tout point unique de défaillance. Kubernetes avec Talos assure l'auto-réparation du pod scheduling, les mises à jour rolling et le basculement automatisé des charges de travail du cluster.",
        },
      ],
    },
    data: {
      skillCategories: [
        {label: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]},
        {label: "Backend", skills: ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"]},
        {label: "DevOps", skills: ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"]},
        {label: "Conception & Pratiques", skills: ["Design Graphique", "UI/UX", "TDD", "Refactoring", "Architecture"]},
      ],
      experience: [
        {
          role: "Fondateur, Reysin",
          location: "Lyon, FR",
          bulletPoints: [
            "Création de solutions logicielles professionnelles incluant des systèmes de gestion de planification et des plateformes de gestion documentaire adaptées aux opérations commerciales",
            "Développement et maintenance de bibliothèques open-source pour favoriser la collaboration communautaire et accélérer l'adoption par les développeurs sur plusieurs projets",
            "Conception et implémentation de nestjs-response-wrapper pour standardiser le formatage des réponses API, réduisant la complexité d'intégration et améliorant l'expérience développeur sur une architecture microservices",
          ],
        },
        {
          role: "Photographe & Créateur de contenu visuel, Freelance",
          location: "Lyon, FR",
          bulletPoints: [
            "Capture de photographie de rue dynamique et de scènes de vie nocturne dans les bars et clubs de Lyon, produisant des récits visuels percutants pour l'affichage public",
            "Conception et création de contenu graphique engageant optimisé pour les plateformes sociales notamment Instagram, TikTok et Facebook pour maximiser l'engagement",
            "Montage de contenu vidéo à partir de couverture d'événements, combinant images brutes avec musique, transitions et effets pour un storytelling professionnel sur les réseaux sociaux",
          ],
        },
        {
          role: "Développeur Frontend (Alternance), DGFIP",
          location: "Lyon, FR",
          bulletPoints: [
            "Développement d'une suite complète de tests automatisés sur l'application frontend pour garantir une assurance qualité robuste et une confiance dans les déploiements rapides",
            "Refactoring et optimisation systématiques des bases de code existantes pour éliminer la dette technique, améliorer la lisibilité et la maintenabilité à long terme",
          ],
        },
        {
          role: "Développeur Frontend Principal (Alternance), Xefi",
          location: "Lyon, FR",
          bulletPoints: [
            "Architecture et déploiement d'une infrastructure logicielle moderne pour remplacer une application legacy obsolète",
            "Estimation de projet agile, découpage des tâches et planification de sprint pour garantir une livraison dans les délais",
            "Améliorations mesurables des performances système et de la maintenabilité",
          ],
        },
      ],
      education: [
        {title: "Bachelor Responsable Projet Informatique (opt développeur)", subtitle: "Isitech — Lyon, FR"},
        {title: "Piscine 42", subtitle: "42 — Lyon, FR"},
        {title: "Baccalauréat STI2D", subtitle: "Lycée Jean-Lurçat — Martigues, FR"},
      ],
      projects: [
        {
          name: "Cluster d'infrastructure automatisé",
          description: "Homelab entièrement automatisé sur Proxmox avec Talos Kubernetes, réplication CephFS et VMs NixOS dédiées pour les services critiques — déploiements GitOps via Gitea et ArgoCD, pare-feu pfSense et VPN WireGuard.",
          tags: ["Proxmox", "Kubernetes", "Terraform", "NixOS", "CephFS", "ArgoCD"],
        },
        {
          name: "PhotoFolio — Portfolio Photographie",
          description: "Portfolio photographique moderne et responsive avec un design minimaliste et une livraison d'images optimisée sur tous les appareils.",
          tags: ["React", "Next.js", "Photographie"],
        },
        {
          name: "Reysin — Identité numérique",
          description: "Plateforme de marque personnelle et page d'accueil professionnelle servant de hub d'identité numérique élégant.",
          tags: ["Next.js", "Marque"],
        },
        {
          name: "LumoraPlan — Planification de projets",
          description: "Plateforme intelligente de planification de projets et de gestion des tâches conçue pour les équipes et les particuliers.",
          tags: ["SaaS", "Planification"],
        },
      ],
    },
  },

  de: {
    hero: {
      role: "Entwickler & Sysadmin",
      tagline: "Entwickler | Dev Ops | Sysadmin",
      contact: "Kontakt",
      exportPdf: "Als PDF exportieren",
      stats: {experience: "Erfahrung", projects: "Projekte", openSource: "Open Source", location: "Standort"},
      badge: "Entwickler & Sysadmin",
    },
    about: {
      label: "Über mich",
      greeting: "Hallo, ich bin Lylian.",
      p1: "Entwickler, DevOps und Sysadmin mit Sitz in Lyon, derzeit Frontend-Entwickler bei der DGFIP, der französischen Generaldirektion für öffentliche Finanzen.",
      p2: "Ich bin begeistert von neuen Technologien, liebe Refactoring und die Entwicklung moderner Architekturen. Ich entwickle professionelle Software, Open-Source-Tools und halte gelegentlich Street Photography fest.",
      metrics: {years: "Berufserfahrung", projects: "Abgeschlossene Projekte", openSource: "Open Source", certifications: "Zertifizierungen"},
    },
    skills: {label: "Fähigkeiten", title: "Tech-Stack"},
    projects: {label: "Arbeiten", title: "Projekte", comingSoon: "Demnächst verfügbar"},
    experience: {label: "Werdegang", title: "Erfahrung"},
    education: {label: "Bildung", title: "Ausbildung"},
    contributions: {label: "Beiträge", title: "Open-Source-Beiträge", pullRequests: "Pull Requests"},
    openSource: {label: "Bibliotheken", title: "Open-Source-Bibliotheken"},
    contact: {
      label: "Kontakt",
      title: "Lass uns zusammenarbeiten",
      subtitle: "Lyon, FR — Offen für Möglichkeiten und Zusammenarbeit.",
    },
    footer: {builtBy: "Erstellt von"},
    infrastructure: {
      label: "Architektur",
      title: "Professionelle Automatisierte Infrastruktur",
      subtitle: "Ein vollständig automatisiertes, selbstheilendes Homelab basierend auf Proxmox, Talos Kubernetes und CephFS — vom Internet bis zur Anwendung.",
      diagramTitle: "Architekturübersicht",
      diagramDesc: "End-to-End-Topologie von der Livebox Pro über den Proxmox-Cluster, Talos Kubernetes bis zu den Cluster-Diensten.",
      breakdownLabel: "Aufschlüsselung",
      breakdownTitle: "Funktionsweise",
      backToHome: "Zurück zur Startseite",
      sections: [
        {
          title: "Resiliente Infrastruktur-VMs",
          content: "Gitea, ArgoCD, pfSense und WireGuard laufen auf dedizierten NixOS-VMs, isoliert vom Kubernetes-Cluster. Bei einem Ausfall der K8s-Steuerungsebene oder der Workloads bleiben diese kritischen Dienste voll funktionsfähig — permanenter Zugriff auf Git, CI/CD und Netzwerk ist gewährleistet.",
        },
        {
          title: "GitOps-Pipeline",
          content: "Gitea hostet Git-Repositories und sendet Webhooks an ArgoCD für automatisierte, deklarative Bereitstellungen im K8s-Cluster. Terraform verwaltet den Infrastrukturzustand und Helm kapselt Manifests für reproduzierbare Rollouts — alles ausgelöst von der isolierten Infrastrukturschicht.",
        },
        {
          title: "Netzwerk & VPN",
          content: "pfSense läuft auf einer dedizierten NixOS-VM als Firewall, Router und NAT-Gateway. WireGuard bietet verschlüsselten VPN-Zugang für Administratoren, um die Infrastruktur von überall sicher zu erreichen, wobei der Datenverkehr über pfSense zur Richtliniendurchsetzung geleitet wird.",
        },
        {
          title: "Hochverfügbarkeit",
          content: "CephFS repliziert Daten über alle vier Proxmox-Knoten und eliminiert so einzelne Ausfallpunkte. Kubernetes mit Talos bietet selbstheilendes Pod-Scheduling, Rolling-Updates und automatisches Failover für Cluster-Workloads.",
        },
      ],
    },
    data: {
      skillCategories: [
        {label: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]},
        {label: "Backend", skills: ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"]},
        {label: "DevOps", skills: ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"]},
        {label: "Design & Praktiken", skills: ["Grafikdesign", "UI/UX", "TDD", "Refactoring", "Architektur"]},
      ],
      experience: [
        {
          role: "Gründer, Reysin",
          location: "Lyon, FR",
          bulletPoints: [
            "Entwicklung professioneller Softwarelösungen, einschließlich Planungsmanagementsysteme und Plattformen für elektronische Dokumentenverwaltung, zugeschnitten auf Geschäftsprozesse",
            "Aufbau und Pflege von Open-Source-Bibliotheken zur Förderung der Community-Zusammenarbeit und Beschleunigung der Entwicklerakzeptanz in mehreren Projekten",
            "Konzeption und Implementierung von nestjs-response-wrapper zur Standardisierung der API-Antwortformatierung, Reduzierung der Integrationskomplexität und Verbesserung der Entwicklererfahrung in einer Microservices-Architektur",
          ],
        },
        {
          role: "Fotograf & Ersteller visueller Inhalte, Freelance",
          location: "Lyon, FR",
          bulletPoints: [
            "Aufnahme dynamischer Street Photography und Nachtszenen in Bars und Clubs in Lyon, Erstellung überzeugender visueller Erzählungen für die öffentliche Präsentation",
            "Gestaltung und Erstellung ansprechender Grafikinhalte, optimiert für Social-Media-Plattformen wie Instagram, TikTok und Facebook zur Maximierung des Publikumsengagements",
            "Schnitt und Montage von Videoinhalten aus Veranstaltungsberichterstattung, Kombination von Rohmaterial mit Musik, Übergängen und Effekten für professionelles Social-Media-Storytelling",
          ],
        },
        {
          role: "Frontend-Entwickler (Ausbildung), DGFIP",
          location: "Lyon, FR",
          bulletPoints: [
            "Entwicklung einer umfassenden automatisierten Testsuite für die Frontend-Anwendung zur Gewährleistung robuster Qualitätssicherung und schneller Bereitstellungssicherheit",
            "Systematisches Refactoring und Optimierung bestehender Codebasen zur Beseitigung technischer Schulden, Verbesserung der Lesbarkeit und langfristigen Wartbarkeit",
          ],
        },
        {
          role: "Leitender Frontend-Entwickler (Ausbildung), Xefi",
          location: "Lyon, FR",
          bulletPoints: [
            "Architektur und Bereitstellung einer modernen Softwareinfrastruktur als Ersatz für eine veraltete Legacy-Anwendung",
            "Agile Projektplanung, Aufgabenzerlegung und Sprintplanung zur termingerechten Lieferung",
            "Messbare Verbesserungen der Systemleistung und Wartbarkeit",
          ],
        },
      ],
      education: [
        {title: "Bachelor in IT-Projektmanagement (Entwickler-Option)", subtitle: "Isitech — Lyon, FR"},
        {title: "Piscine 42", subtitle: "42 — Lyon, FR"},
        {title: "Baccalaureat STI2D", subtitle: "Lycee Jean-Lurcat — Martigues, FR"},
      ],
      projects: [
        {
          name: "Automatisierter Infrastruktur-Cluster",
          description: "Vollständig automatisiertes Homelab auf Proxmox mit Talos Kubernetes, CephFS-Replikation und dedizierten NixOS-VMs für kritische Dienste — GitOps-gesteuerte Bereitstellungen über Gitea und ArgoCD, pfSense-Firewall und WireGuard-VPN.",
          tags: ["Proxmox", "Kubernetes", "Terraform", "NixOS", "CephFS", "ArgoCD"],
        },
        {
          name: "PhotoFolio — Fotografie-Portfolio",
          description: "Modernes, responsives Fotografie-Portfolio mit einem klaren, minimalistischen Design und optimierter Bildauslieferung auf allen Geräten.",
          tags: ["React", "Next.js", "Fotografie"],
        },
        {
          name: "Reysin — Digitale Identität",
          description: "Persönliche Markenplattform und professionelle Landingpage als eleganter digitaler Identitäts-Hub.",
          tags: ["Next.js", "Marke"],
        },
        {
          name: "LumoraPlan — Projektplanung",
          description: "Intelligente Plattform für Projektplanung und Aufgabenmanagement, entwickelt für Teams und Einzelpersonen.",
          tags: ["SaaS", "Planung"],
        },
      ],
    },
  },

  it: {
    hero: {
      role: "Sviluppatore & Sysadmin",
      tagline: "Sviluppatore | Dev Ops | Sysadmin",
      contact: "Contatto",
      exportPdf: "Esporta in PDF",
      stats: {experience: "Esperienza", projects: "Progetti", openSource: "Open Source", location: "Località"},
      badge: "Sviluppatore & Sysadmin",
    },
    about: {
      label: "Chi sono",
      greeting: "Ciao, sono Lylian.",
      p1: "Sviluppatore, DevOps e Sysadmin con sede a Lione, attualmente impegnato nello sviluppo frontend presso la DGFIP, la Direzione Generale delle Finanze Pubbliche francese.",
      p2: "Appassionato di nuove tecnologie, amo il refactoring e la creazione di architetture moderne. Realizzo software a livello enterprise, strumenti open-source e occasionalmente catturo fotografia di strada.",
      metrics: {years: "Anni di esperienza", projects: "Progetti realizzati", openSource: "Open Source", certifications: "Certificazioni"},
    },
    skills: {label: "Competenze", title: "Stack Tecnologico"},
    projects: {label: "Lavori", title: "Progetti", comingSoon: "Prossimamente"},
    experience: {label: "Carriera", title: "Esperienza"},
    education: {label: "Formazione", title: "Istruzione"},
    contributions: {label: "Contributi", title: "Contributi Open Source", pullRequests: "Pull Requests"},
    openSource: {label: "Librerie", title: "Librerie Open Source"},
    contact: {
      label: "Contatto",
      title: "Lavoriamo insieme",
      subtitle: "Lione, FR — Aperto a opportunità e collaborazioni.",
    },
    footer: {builtBy: "Realizzato da"},
    infrastructure: {
      label: "Architettura",
      title: "Infrastruttura Automatizzata Professionale",
      subtitle: "Un homelab completamente automatizzato e auto-riparante basato su Proxmox, Talos Kubernetes e CephFS — da Internet all'applicazione.",
      diagramTitle: "Panoramica dell'architettura",
      diagramDesc: "Topologia end-to-end dalla Livebox Pro attraverso il cluster Proxmox, Talos Kubernetes e i servizi del cluster.",
      breakdownLabel: "Analisi",
      breakdownTitle: "Come funziona",
      backToHome: "Torna alla home",
      sections: [
        {
          title: "VM infrastrutturali resilienti",
          content: "Gitea, ArgoCD, pfSense e WireGuard funzionano su VM NixOS dedicate, isolate dal cluster Kubernetes. Se il piano di controllo K8s o i carichi di lavoro dovessero fallire, questi servizi critici rimangono pienamente operativi — garantendo accesso permanente a Git, CI/CD e rete.",
        },
        {
          title: "Pipeline GitOps",
          content: "Gitea ospita i repository Git e invia webhook ad ArgoCD per deploy automatici e dichiarativi nel cluster K8s. Terraform gestisce lo stato dell'infrastruttura e Helm impacchetta i manifest per rollout riproducibili — il tutto attivato dallo strato infrastrutturale isolato.",
        },
        {
          title: "Rete & VPN",
          content: "pfSense funziona su una VM NixOS dedicata come firewall, router e gateway NAT. WireGuard fornisce accesso VPN crittografato per gli amministratori per raggiungere l'infrastruttura in modo sicuro da qualsiasi luogo, instradando attraverso pfSense per l'applicazione delle policy.",
        },
        {
          title: "Alta disponibilità",
          content: "CephFS replica i dati su tutti e quattro i nodi Proxmox, eliminando singoli punti di guasto. Kubernetes con Talos fornisce scheduling auto-riparante dei pod, aggiornamenti rolling e failover automatico per i carichi di lavoro del cluster.",
        },
      ],
    },
    data: {
      skillCategories: [
        {label: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]},
        {label: "Backend", skills: ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"]},
        {label: "DevOps", skills: ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"]},
        {label: "Design & Pratiche", skills: ["Graphic Design", "UI/UX", "TDD", "Refactoring", "Architettura"]},
      ],
      experience: [
        {
          role: "Fondatore, Reysin",
          location: "Lyon, FR",
          bulletPoints: [
            "Creazione di soluzioni software enterprise inclusi sistemi di gestione della pianificazione e piattaforme di gestione documentale elettronica su misura per le operazioni aziendali",
            "Costruzione e manutenzione di librerie open-source per favorire la collaborazione della community e accelerare l'adozione da parte degli sviluppatori in molteplici progetti",
            "Progettazione e implementazione di nestjs-response-wrapper per standardizzare la formattazione delle risposte API, riducendo la complessità di integrazione e migliorando l'esperienza sviluppatore in un'architettura a microservizi",
          ],
        },
        {
          role: "Fotografo & Creatore di contenuti visivi, Freelance",
          location: "Lyon, FR",
          bulletPoints: [
            "Cattura di fotografia di strada dinamica e scene notturne in bar e club di Lione, producendo narrazioni visive coinvolgenti per l'esposizione pubblica",
            "Progettazione e creazione di contenuti grafici accattivanti ottimizzati per piattaforme social tra cui Instagram, TikTok e Facebook per massimizzare il coinvolgimento del pubblico",
            "Montaggio di contenuti video da copertura di eventi, combinando filmati grezzi con musica, transizioni ed effetti per uno storytelling professionale sui social media",
          ],
        },
        {
          role: "Sviluppatore Frontend (Apprendistato), DGFIP",
          location: "Lyon, FR",
          bulletPoints: [
            "Sviluppo di una suite completa di test automatizzati sull'applicazione frontend per garantire una solida garanzia di qualità e fiducia nei deploy rapidi",
            "Refactoring e ottimizzazione sistematici delle codebase esistenti per eliminare il debito tecnico, migliorare la leggibilità e la manutenibilità a lungo termine",
          ],
        },
        {
          role: "Sviluppatore Frontend Lead (Apprendistato), Xefi",
          location: "Lyon, FR",
          bulletPoints: [
            "Architettura e deploy di un'infrastruttura software moderna per sostituire un'applicazione legacy obsoleta",
            "Stima agile dei progetti, suddivisione dei compiti e pianificazione degli sprint per garantire la consegna puntuale",
            "Miglioramenti misurabili delle prestazioni del sistema e della manutenibilità",
          ],
        },
      ],
      education: [
        {title: "Bachelor in Gestione Progetti IT (opzione sviluppatore)", subtitle: "Isitech — Lyon, FR"},
        {title: "Piscine 42", subtitle: "42 — Lyon, FR"},
        {title: "Baccalaureat STI2D", subtitle: "Lycee Jean-Lurcat — Martigues, FR"},
      ],
      projects: [
        {
          name: "Cluster Infrastruttura Automatizzato",
          description: "Homelab completamente automatizzato su Proxmox con Talos Kubernetes, replica CephFS e VM NixOS dedicate per i servizi critici — deploy GitOps tramite Gitea e ArgoCD, firewall pfSense e VPN WireGuard.",
          tags: ["Proxmox", "Kubernetes", "Terraform", "NixOS", "CephFS", "ArgoCD"],
        },
        {
          name: "PhotoFolio — Portfolio Fotografico",
          description: "Portfolio fotografico moderno e responsive con un design minimalista e consegna ottimizzata delle immagini su tutti i dispositivi.",
          tags: ["React", "Next.js", "Fotografia"],
        },
        {
          name: "Reysin — Identità Digitale",
          description: "Piattaforma di brand personale e landing page professionale che funge da elegante hub di identità digitale.",
          tags: ["Next.js", "Brand"],
        },
        {
          name: "LumoraPlan — Pianificazione Progetti",
          description: "Piattaforma intelligente di pianificazione progetti e gestione attività progettata per team e individui.",
          tags: ["SaaS", "Pianificazione"],
        },
      ],
    },
  },

  es: {
    hero: {
      role: "Desarrollador & Sysadmin",
      tagline: "Desarrollador | Dev Ops | Sysadmin",
      contact: "Contacto",
      exportPdf: "Exportar a PDF",
      stats: {experience: "Experiencia", projects: "Proyectos", openSource: "Open Source", location: "Ubicación"},
      badge: "Desarrollador & Sysadmin",
    },
    about: {
      label: "Sobre mí",
      greeting: "Hola, soy Lylian.",
      p1: "Desarrollador, DevOps y Sysadmin con sede en Lyon, actualmente desarrollador frontend en DGFIP, la Dirección General de Finanzas Públicas francesa.",
      p2: "Entusiasta de las nuevas tecnologías, me encanta el refactoring y la creación de arquitecturas modernas. Construyo software de nivel empresarial, herramientas open-source y ocasionalmente capturo fotografía callejera.",
      metrics: {years: "Años de experiencia", projects: "Proyectos realizados", openSource: "Open Source", certifications: "Certificaciones"},
    },
    skills: {label: "Habilidades", title: "Stack Tecnológico"},
    projects: {label: "Trabajos", title: "Proyectos", comingSoon: "Próximamente"},
    experience: {label: "Carrera", title: "Experiencia"},
    education: {label: "Formación", title: "Educación"},
    contributions: {label: "Contribuciones", title: "Contribuciones Open Source", pullRequests: "Pull Requests"},
    openSource: {label: "Bibliotecas", title: "Bibliotecas Open Source"},
    contact: {
      label: "Contacto",
      title: "Trabajemos juntos",
      subtitle: "Lyon, FR — Abierto a oportunidades y colaboración.",
    },
    footer: {builtBy: "Construido por"},
    infrastructure: {
      label: "Arquitectura",
      title: "Infraestructura Automatizada Profesional",
      subtitle: "Un homelab completamente automatizado y auto-curativo basado en Proxmox, Talos Kubernetes y CephFS — desde Internet hasta la aplicación.",
      diagramTitle: "Vista general de la arquitectura",
      diagramDesc: "Topología de extremo a extremo desde la Livebox Pro hasta el clúster Proxmox, Talos Kubernetes y los servicios del clúster.",
      breakdownLabel: "Desglose",
      breakdownTitle: "Cómo funciona",
      backToHome: "Volver al inicio",
      sections: [
        {
          title: "Máquinas virtuales de infraestructura resilientes",
          content: "Gitea, ArgoCD, pfSense y WireGuard se ejecutan en VMs NixOS dedicadas, aisladas del clúster de Kubernetes. Si el plano de control de K8s o las cargas de trabajo fallan, estos servicios críticos permanecen totalmente operativos — garantizando acceso permanente a Git, CI/CD y red.",
        },
        {
          title: "Pipeline GitOps",
          content: "Gitea aloja repositorios Git y envía webhooks a ArgoCD para despliegues automatizados y declarativos en el clúster K8s. Terraform gestiona el estado de la infraestructura y Helm empaqueta los manifiestos para despliegues reproducibles — todo activado desde la capa de infraestructura aislada.",
        },
        {
          title: "Red y VPN",
          content: "pfSense se ejecuta en una VM NixOS dedicada como cortafuegos, enrutador y puerta de enlace NAT. WireGuard proporciona acceso VPN cifrado para que los administradores accedan de forma segura a la infraestructura desde cualquier lugar, enrutando a través de pfSense para la aplicación de políticas.",
        },
        {
          title: "Alta disponibilidad",
          content: "CephFS replica datos en los cuatro nodos Proxmox, eliminando puntos únicos de fallo. Kubernetes con Talos proporciona programación auto-curativa de pods, actualizaciones continuas y conmutación por error automatizada para las cargas de trabajo del clúster.",
        },
      ],
    },
    data: {
      skillCategories: [
        {label: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]},
        {label: "Backend", skills: ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"]},
        {label: "DevOps", skills: ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"]},
        {label: "Diseño y Prácticas", skills: ["Diseño Gráfico", "UI/UX", "TDD", "Refactoring", "Arquitectura"]},
      ],
      experience: [
        {
          role: "Fundador, Reysin",
          location: "Lyon, FR",
          bulletPoints: [
            "Creación de soluciones de software empresarial, incluyendo sistemas de gestión de planificación y plataformas de gestión documental electrónica adaptadas a operaciones comerciales",
            "Desarrollo y mantenimiento de bibliotecas open-source para fomentar la colaboración comunitaria y acelerar la adopción por desarrolladores en múltiples proyectos",
            "Diseño e implementación de nestjs-response-wrapper para estandarizar el formato de respuestas API, reduciendo la complejidad de integración y mejorando la experiencia del desarrollador en una arquitectura de microservicios",
          ],
        },
        {
          role: "Fotógrafo y Creador de Contenido Visual, Freelance",
          location: "Lyon, FR",
          bulletPoints: [
            "Captura de fotografía callejera dinámica y escenas nocturnas en bares y clubes de Lyon, produciendo narrativas visuales convincentes para exhibición pública",
            "Diseño y creación de contenido gráfico atractivo optimizado para plataformas sociales como Instagram, TikTok y Facebook para maximizar la participación de la audiencia",
            "Edición y montaje de contenido video a partir de cobertura de eventos, combinando material bruto con música, transiciones y efectos para storytelling profesional en redes sociales",
          ],
        },
        {
          role: "Desarrollador Frontend (Aprendizaje), DGFIP",
          location: "Lyon, FR",
          bulletPoints: [
            "Desarrollo de un suite completo de pruebas automatizadas en la aplicación frontend para garantizar un control de calidad sólido y confianza en despliegues rápidos",
            "Refactorización y optimización sistemáticas de bases de código existentes para eliminar deuda técnica, mejorar la legibilidad y el mantenimiento a largo plazo",
          ],
        },
        {
          role: "Desarrollador Frontend Principal (Aprendizaje), Xefi",
          location: "Lyon, FR",
          bulletPoints: [
            "Arquitectura e implementación de una infraestructura de software moderna para reemplazar una aplicación heredada obsoleta",
            "Estimación ágil de proyectos, desglose de tareas y planificación de sprints para garantizar la entrega puntual",
            "Mejoras medibles en el rendimiento del sistema y la mantenibilidad",
          ],
        },
      ],
      education: [
        {title: "Bachelor en Gestión de Proyectos Informáticos (opt desarrollador)", subtitle: "Isitech — Lyon, FR"},
        {title: "Piscine 42", subtitle: "42 — Lyon, FR"},
        {title: "Baccalaureat STI2D", subtitle: "Lycee Jean-Lurcat — Martigues, FR"},
      ],
      projects: [
        {
          name: "Clúster de Infraestructura Automatizado",
          description: "Homelab completamente automatizado en Proxmox con Talos Kubernetes, replicación CephFS y VMs NixOS dedicadas para servicios críticos — despliegues GitOps mediante Gitea y ArgoCD, cortafuegos pfSense y VPN WireGuard.",
          tags: ["Proxmox", "Kubernetes", "Terraform", "NixOS", "CephFS", "ArgoCD"],
        },
        {
          name: "PhotoFolio — Portfolio de Fotografía",
          description: "Portfolio fotográfico moderno y responsive con un diseño minimalista y entrega optimizada de imágenes en todos los dispositivos.",
          tags: ["React", "Next.js", "Fotografía"],
        },
        {
          name: "Reysin — Identidad Digital",
          description: "Plataforma de marca personal y landing page profesional que sirve como un elegante centro de identidad digital.",
          tags: ["Next.js", "Marca"],
        },
        {
          name: "LumoraPlan — Planificación de Proyectos",
          description: "Plataforma inteligente de planificación de proyectos y gestión de tareas diseñada para equipos e individuos.",
          tags: ["SaaS", "Planificación"],
        },
      ],
    },
  },
};

export const defaultLocale: Locale = "en";
