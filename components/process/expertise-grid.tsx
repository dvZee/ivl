"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, Code, LineChart, Cloud, Shield, Brain } from "lucide-react";
import { motion } from "framer-motion";

const CERTIFICATIONS = [
  {
    icon: Code,
    title: "Development",
    certs: ["AWS Certified Developer", "Google Cloud Developer", "Microsoft Certified Developer"]
  },
  {
    icon: LineChart,
    title: "Digital Marketing",
    certs: ["Google Analytics", "HubSpot Marketing", "Facebook Blueprint"]
  },
  {
    icon: Cloud,
    title: "Cloud Platform",
    certs: ["AWS Solutions Architect", "Azure Administrator", "GCP Architect"]
  },
  {
    icon: Award,
    title: "Agile Methodology",
    certs: ["Scrum Master", "PMP", "PRINCE2 Agile"]
  },
  {
    icon: Shield,
    title: "Security",
    certs: ["CompTIA Security+", "CISSP", "CEH"]
  },
  {
    icon: Brain,
    title: "AI/ML",
    certs: ["TensorFlow Developer", "AWS ML Specialty", "Azure AI Engineer"]
  }
];

export function ExpertiseGrid() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">
        Certified Excellence at Your Service
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cert.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">{cert.title}</h4>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {cert.certs.map((certification) => (
                    <li key={certification} className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>{certification}</span>
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