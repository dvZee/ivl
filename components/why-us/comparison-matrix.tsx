"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Brain, Users, GitBranch, Globe } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Brain,
    title: "Cutting-Edge Excellence",
    description: "AI-first approach with continuous innovation",
    features: [
      "AI-first approach to solutions",
      "Certified experts across technologies",
      "Continuous innovation lab",
      "Regular team upskilling",
    ],
    proofPoint: "50+ certified experts across 15+ technologies",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your success is our top priority",
    features: [
      "Dedicated project manager",
      "24/7 support availability",
      "Regular progress updates",
      "Flexible engagement models",
    ],
    proofPoint: "95% client satisfaction rate",
  },
  {
    icon: GitBranch,
    title: "Proven Methodology",
    description: "Transparent & efficient process",
    features: [
      "Agile development methodology",
      "Clear milestone tracking",
      "Regular client communications",
      "Quality-assured deliverables",
    ],
    proofPoint: "200+ successful project deliveries",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description: "International excellence & reach",
    features: [
      "Multi-cultural team",
      "Cross-border project experience",
      "Local market insights",
      "Global best practices",
    ],
    proofPoint: "Successfully serving 10 countries",
  },
];

export function ComparisonMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {FEATURES.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardHeader className="space-y-1 pb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feature.features.map((item) => (
                  <li key={item} className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm font-medium text-primary">{feature.proofPoint}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}