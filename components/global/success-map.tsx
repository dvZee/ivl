"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

const SUCCESS_STORIES = [
  {
    location: "Berlin, Germany",
    project: "E-commerce Platform",
    result: "300% growth in online sales",
    client: "Fashion Retailer",
  },
  {
    location: "London, UK",
    project: "EdTech Solution",
    result: "1M+ active students",
    client: "Education Provider",
  },
  {
    location: "New York, USA",
    project: "AI Integration",
    result: "50% efficiency increase",
    client: "Tech Startup",
  },
];

export function SuccessMap() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">Global Impact, Real Results</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        {SUCCESS_STORIES.map((story, index) => (
          <motion.div
            key={story.location}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-4 bg-secondary/50 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{story.location}</h4>
                <p className="text-sm text-muted-foreground">{story.project}</p>
              </div>
              <div className="text-right">
                <p className="text-primary font-medium">{story.result}</p>
                <p className="text-sm text-muted-foreground">{story.client}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}