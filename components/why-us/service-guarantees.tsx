"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Phone, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const GUARANTEES = [
  {
    icon: CheckCircle2,
    title: "Quality Guarantee",
    items: [
      "100% satisfaction guaranteed",
      "Rigorous quality testing",
      "Best practice compliance",
    ],
  },
  {
    icon: Clock,
    title: "Timeline Guarantee",
    items: [
      "On-time delivery promise",
      "Regular progress updates",
      "Proactive delay prevention",
    ],
  },
  {
    icon: Phone,
    title: "Communication Guarantee",
    items: [
      "Response within 4 hours",
      "24/7 emergency support",
      "Dedicated project manager",
    ],
  },
  {
    icon: DollarSign,
    title: "Value Guarantee",
    items: [
      "Transparent pricing",
      "No hidden costs",
      "ROI-focused solutions",
    ],
  },
];

export function ServiceGuarantees() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-center">Our Commitments to Excellence</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {GUARANTEES.map((guarantee, index) => (
          <motion.div
            key={guarantee.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <guarantee.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-4">{guarantee.title}</h4>
                <ul className="space-y-2">
                  {guarantee.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {item}
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