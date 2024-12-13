"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Cloud, Cpu } from "lucide-react";

const TECHNOLOGIES = [
  {
    icon: Brain,
    title: "AI-Powered Transformation",
    areas: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Automated Decision Systems",
    ],
    useCase: "60% efficiency boost in e-commerce operations",
  },
  {
    icon: Cloud,
    title: "Next-Gen Cloud Solutions",
    areas: [
      "Serverless Architecture",
      "Multi-Cloud Strategy",
      "Edge Computing",
      "Cloud-Native Development",
    ],
    useCase: "99.99% uptime for global platforms",
  },
  {
    icon: Cpu,
    title: "Future-Ready Solutions",
    areas: [
      "Blockchain",
      "IoT Integration",
      "AR/VR Solutions",
      "Web 3.0",
    ],
    useCase: "Revolutionary NFT marketplace development",
  },
];

export function TechnologyShowcase() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-center">Leading the Digital Evolution</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TECHNOLOGIES.map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <tech.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-4">{tech.title}</h4>
                <ul className="space-y-2 mb-4">
                  {tech.areas.map((area) => (
                    <li key={area} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {area}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium text-primary">{tech.useCase}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}