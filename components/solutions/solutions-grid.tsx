"use client";

import {
  Code2,
  LineChart,
  Layout,
  Palette,
  Database,
  Network
} from "lucide-react";
import { SolutionCard } from "./solution-card";

const SOLUTIONS = [
  {
    icon: Code2,
    title: "Custom Development & AI Innovation",
    description: "From web applications to AI-powered systems, we build future-ready digital solutions.",
    metric: "40%",
    metricLabel: "Average Efficiency Increase",
    href: "/services/development"
  },
  {
    icon: LineChart,
    title: "Results-Driven Digital Marketing",
    description: "Data-backed strategies that deliver measurable growth and ROI.",
    metric: "3x",
    metricLabel: "Average Traffic Increase",
    href: "/services/marketing"
  },
  {
    icon: Layout,
    title: "Experience-Led Design",
    description: "Creating engaging experiences that convert visitors into loyal customers.",
    metric: "55%",
    metricLabel: "Conversion Rate Improvement",
    href: "/services/ux"
  },
  {
    icon: Palette,
    title: "Creative Excellence",
    description: "Stunning designs and content that capture your brand's unique voice.",
    metric: "90%",
    metricLabel: "Client Satisfaction Rate",
    href: "/services/creative"
  },
  {
    icon: Database,
    title: "Intelligent Data Solutions",
    description: "Transform raw data into actionable business intelligence.",
    metric: "100M+",
    metricLabel: "Data Points Processed",
    href: "/services/data"
  },
  {
    icon: Network,
    title: "AI-Powered Innovation",
    description: "Revolutionize your business with cutting-edge AI solutions.",
    metric: "60%",
    metricLabel: "Operational Efficiency Gain",
    href: "/services/ai"
  }
];

export function SolutionsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SOLUTIONS.map((solution) => (
        <SolutionCard
          key={solution.title}
          {...solution}
        />
      ))}
    </div>
  );
}