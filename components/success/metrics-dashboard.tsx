"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DollarSign, CheckCircle2, Globe, Users } from "lucide-react";

const METRICS = [
  {
    icon: DollarSign,
    value: "500M+",
    label: "Revenue Generated for Clients",
  },
  {
    icon: CheckCircle2,
    value: "200+",
    label: "Successful Projects",
  },
  {
    icon: Globe,
    value: "10",
    label: "Countries Served",
  },
  {
    icon: Users,
    value: "95%",
    label: "Client Retention Rate",
  },
];

export function MetricsDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {METRICS.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <metric.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">{metric.value}</div>
            <div className="text-sm text-muted-foreground">{metric.label}</div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}