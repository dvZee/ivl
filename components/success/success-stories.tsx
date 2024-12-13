"use client";

import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "./case-study-card";
import { MetricsDashboard } from "./metrics-dashboard";
import { VideoTestimonials } from "./video-testimonials";
import { ROICalculator } from "./roi-calculator";

const CASE_STUDIES = [
  {
    client: "Leading European Fashion Retailer",
    challenge: "Scaling digital operations across 10 countries",
    solution: "AI-powered inventory management + Custom e-commerce platform",
    results: [
      "300% increase in online sales",
      "60% reduction in operational costs",
      "45% improvement in customer satisfaction"
    ],
    technologies: ["AI/ML", "React", "Node.js", "AWS"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    client: "Global Education Platform",
    challenge: "Creating scalable learning solution for 100,000+ students",
    solution: "Custom LMS + AI-based learning paths",
    results: [
      "500,000+ active users",
      "95% student engagement rate",
      "40% better learning outcomes"
    ],
    technologies: ["Python", "React", "TensorFlow", "Azure"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    client: "Tech Startup (Now Valued at $50M)",
    challenge: "Rapid MVP development and scaling",
    solution: "Full-stack development + Growth marketing",
    results: [
      "8-week MVP launch",
      "1M+ users in first year",
      "400% year-over-year growth"
    ],
    technologies: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Visions into Digital Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover how we drive exceptional results across industries and continents. 
            Real projects, real impact, real growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.client} {...study} />
          ))}
        </div>

        <div className="mb-20">
          <MetricsDashboard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <VideoTestimonials />
          <ROICalculator />
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            Start Your Success Story
          </Button>
          <Button size="lg" variant="outline">
            Schedule a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}