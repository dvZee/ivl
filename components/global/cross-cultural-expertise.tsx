"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Globe, Users, LineChart, Shield } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Multi-Language Support",
    features: [
      "Multiple language options",
      "Cultural-specific UX/UI",
      "Local market optimization",
      "Regional compliance expertise",
    ],
  },
  {
    icon: Users,
    title: "International Project Management",
    features: [
      "24/7 global operations",
      "Time zone optimized teams",
      "Cross-border collaboration tools",
      "International quality standards",
    ],
  },
  {
    icon: LineChart,
    title: "Regional Market Insights",
    features: [
      "Local market research",
      "Regional trend analysis",
      "Cultural adaptation strategies",
      "Market-specific solutions",
    ],
  },
  {
    icon: Shield,
    title: "Global Compliance",
    features: [
      "GDPR compliance",
      "International data protection",
      "Regional regulatory adherence",
      "Cross-border security standards",
    ],
  },
];

export function CrossCulturalExpertise() {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-center mb-8">Breaking Digital Boundaries</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAPABILITIES.map((capability, index) => (
          <motion.div
            key={capability.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <capability.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-4">{capability.title}</h4>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}