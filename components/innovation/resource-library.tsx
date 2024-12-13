"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calculator, BarChart } from "lucide-react";

const RESOURCES = [
  {
    icon: FileText,
    title: "Whitepapers",
    items: [
      "AI Transformation Guide",
      "Future of Digital Commerce",
      "EdTech Innovation Trends",
    ],
    action: "Download Now",
  },
  {
    icon: Calculator,
    title: "Tools & Calculators",
    items: [
      "ROI Calculator",
      "Performance Analyzer",
      "Cost Estimator",
    ],
    action: "Try Now",
  },
  {
    icon: BarChart,
    title: "Industry Reports",
    items: [
      "Market Analysis",
      "Technology Trends",
      "Success Metrics",
    ],
    action: "Access Now",
  },
];

export function ResourceLibrary() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">Empowering Digital Knowledge</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        {RESOURCES.map((resource) => (
          <div key={resource.title} className="p-4 bg-secondary/50 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <resource.icon className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">{resource.title}</h4>
            </div>
            <ul className="space-y-2 mb-4">
              {resource.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  • {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" size="sm">
              {resource.action} →
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}