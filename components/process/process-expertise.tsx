"use client";

import { Button } from "@/components/ui/button";
import { ProcessTimeline } from "./process-timeline";
import { TechStack } from "./tech-stack";
import { ExpertiseGrid } from "./expertise-grid";

export function ProcessExpertise() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Proven Path to Digital Excellence
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparent, efficient, and result-driven: Experience a development process 
            that transforms complexity into clarity.
          </p>
        </div>

        <ProcessTimeline />

        <div className="mt-20">
          <TechStack />
        </div>

        <div className="mt-20">
          <ExpertiseGrid />
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="mr-4">
            Schedule Process Overview Call
          </Button>
          <Button size="lg" variant="outline">
            Download Methodology Guide
          </Button>
        </div>
      </div>
    </section>
  );
}