"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TimelineStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
  index: number;
}

export function TimelineStep({
  icon: Icon,
  title,
  description,
  deliverables,
  timeline,
  index,
}: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="relative">
        <div className="absolute top-6 -left-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
        </div>
        <CardHeader className="space-y-1 pb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{timeline}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{description}</p>
          <div className="space-y-2">
            <p className="font-medium">Deliverables:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}