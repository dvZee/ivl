"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Code2, Server, Database as DbIcon, Cloud, Brain, Tool } from "lucide-react";

const TECH_CATEGORIES = {
  frontend: {
    icon: Code2,
    title: "Front-End",
    technologies: ["React", "Angular", "Vue.js"]
  },
  backend: {
    icon: Server,
    title: "Back-End",
    technologies: ["Node.js", "Python", "PHP"]
  },
  database: {
    icon: DbIcon,
    title: "Database",
    technologies: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  cloud: {
    icon: Cloud,
    title: "Cloud",
    technologies: ["AWS", "Google Cloud", "Azure"]
  },
  ai: {
    icon: Brain,
    title: "AI/ML",
    technologies: ["TensorFlow", "PyTorch", "OpenAI"]
  },
  tools: {
    icon: Tool,
    title: "Tools",
    technologies: ["Jira", "GitHub", "Docker"]
  }
};

export function TechStack() {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <h3 className="text-2xl font-bold text-center mb-6">
          Powered by Industry-Leading Technologies
        </h3>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8">
            {Object.entries(TECH_CATEGORIES).map(([key, { title }]) => (
              <TabsTrigger key={key} value={key} className="text-sm">
                {title}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(TECH_CATEGORIES).map(([key, { icon: Icon, technologies }]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {technologies.map((tech) => (
                  <Card key={tech} className="p-4 flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{tech}</span>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}