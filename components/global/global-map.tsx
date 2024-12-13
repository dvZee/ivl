"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const REGIONS = [
  {
    name: "Europe",
    countries: ["Germany", "UK", "France", "Netherlands", "Italy", "Ireland"],
    highlight: "European Digital Excellence Hub",
    projects: "75+",
    industries: ["E-commerce", "EdTech", "Tech Startups"],
  },
  {
    name: "North America",
    countries: ["US", "Canada"],
    highlight: "Innovation & Technology Center",
    projects: "50+",
    industries: ["Tech Startups", "Enterprise Solutions"],
  },
  {
    name: "Asia Pacific",
    countries: ["Pakistan", "Australia"],
    highlight: "Development & Support Hub",
    projects: "40+",
    industries: ["E-commerce", "Education"],
  },
  {
    name: "Latin America",
    countries: ["Mexico"],
    highlight: "Emerging Market Solutions",
    projects: "35+",
    industries: ["E-commerce", "NGOs"],
  },
];

export function GlobalMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {REGIONS.map((region, index) => (
        <motion.div
          key={region.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">{region.name}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-primary">{region.highlight}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {region.countries.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Key Projects</p>
                  <p className="text-2xl font-bold text-primary">{region.projects}</p>
                </div>
                <div>
                  <p className="font-medium">Industries Served</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {region.industries.map((industry) => (
                      <span
                        key={industry}
                        className="text-xs bg-secondary px-2 py-1 rounded-full"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}