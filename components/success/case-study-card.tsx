"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
}

export function CaseStudyCard({
  client,
  challenge,
  solution,
  results,
  technologies,
  image,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full">
        <div className="aspect-video relative">
          <img
            src={image}
            alt={client}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <CardHeader>
          <h3 className="text-2xl font-bold">{client}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Challenge</h4>
            <p className="text-muted-foreground">{challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Solution</h4>
            <p className="text-muted-foreground">{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key Results</h4>
            <ul className="space-y-2">
              {results.map((result) => (
                <li key={result} className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
          <Button className="w-full mt-4">View Detailed Case Study</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}