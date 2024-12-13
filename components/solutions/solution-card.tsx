"use client";

import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  href: string;
}

export function SolutionCard({
  icon: Icon,
  title,
  description,
  metric,
  metricLabel,
  href,
}: SolutionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{metric}</div>
            <div className="text-sm text-muted-foreground">{metricLabel}</div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full group" asChild>
            <a href={href}>
              Explore {title} →
              <span className="inline-block transition-transform group-hover:translate-x-1">
              </span>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}