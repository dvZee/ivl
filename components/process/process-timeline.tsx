"use client";

import { Compass, FileCode2, RefreshCw, ShieldCheck, Rocket } from "lucide-react";
import { TimelineStep } from "./timeline-step";

const PROCESS_STEPS = [
  {
    icon: Compass,
    title: "Strategic Discovery",
    description: "Deep dive into your goals, challenges, and opportunities through expert consultation.",
    deliverables: [
      "Comprehensive project roadmap",
      "Technical requirements",
      "Resource allocation plan"
    ],
    timeline: "2-5 Days"
  },
  {
    icon: FileCode2,
    title: "Solution Architecture",
    description: "Creating the perfect blend of technology and functionality for your unique needs.",
    deliverables: [
      "Technical architecture",
      "Project milestones",
      "Risk mitigation strategy"
    ],
    timeline: "5-10 Days"
  },
  {
    icon: RefreshCw,
    title: "Iterative Excellence",
    description: "Regular updates, transparent progress, and continuous improvement cycles.",
    deliverables: [
      "Sprint deliverables",
      "Progress dashboard",
      "Quality assurance reports"
    ],
    timeline: "Customized to Project Scope"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous testing and optimization for flawless performance.",
    deliverables: [
      "Performance metrics",
      "Security validation",
      "Optimization report"
    ],
    timeline: "Ongoing"
  },
  {
    icon: Rocket,
    title: "Seamless Deployment",
    description: "Expert launch execution and continuous support for sustainable success.",
    deliverables: [
      "Launch checklist",
      "Training documentation",
      "Support SLA"
    ],
    timeline: "Continuous"
  }
];

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[27px] top-8 bottom-8 w-px bg-border" />
      <div className="space-y-8 pl-12">
        {PROCESS_STEPS.map((step, index) => (
          <TimelineStep
            key={step.title}
            {...step}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}