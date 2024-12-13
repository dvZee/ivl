"use client";

import { TechnologyShowcase } from "./technology-showcase";
import { ResearchHub } from "./research-hub";
import { ResourceLibrary } from "./resource-library";
// import { InnovationBlog } from "./innovation-blog";
// import { LearningHub } from "./learning-hub";
// import { InnovationPartners } from "./innovation-partners";
import { Button } from "@/components/ui/button";

export function InnovationHubSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pioneering Tomorrow's Digital Solutions Today
          </h2>
          <p className="text-xl text-muted-foreground">
            At InnoVibeLabs, innovation isn't just a buzzword—it's our core. 
            Discover how we're shaping the future of digital transformation.
          </p>
        </div>

        <TechnologyShowcase />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <ResearchHub />
          <ResourceLibrary />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* <InnovationBlog /> */}
          {/* <LearningHub /> */}
        </div>

        <div className="mt-16">
          {/* <InnovationPartners /> */}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="mr-4">
            Explore Innovation Solutions
          </Button>
          <Button size="lg" variant="outline">
            Access Free Resources
          </Button>
        </div>
      </div>
    </section>
  );
}