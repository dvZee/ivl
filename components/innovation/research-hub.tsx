"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const RESEARCH_PROJECTS = [
  "AI in Customer Experience",
  "Sustainable Digital Solutions",
  "Advanced Data Analytics",
  "Smart Automation Systems",
];

const METRICS = [
  { label: "Research Projects", value: "15+" },
  { label: "Technology Patents", value: "10+" },
  { label: "Innovation Awards", value: "25+" },
  { label: "Industry Collaborations", value: "30+" },
];

export function ResearchHub() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-4">
        <Lightbulb className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold">Shaping the Future</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3">Current Research Projects</h4>
          <div className="flex flex-wrap gap-2">
            {RESEARCH_PROJECTS.map((project) => (
              <Badge key={project} variant="secondary">
                {project}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {METRICS.map((metric) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 bg-secondary/50 rounded-lg text-center"
            >
              <div className="text-2xl font-bold text-primary">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}