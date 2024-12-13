"use client";

import { GlobalMap } from "./global-map";
import { CrossCulturalExpertise } from "./cross-cultural-expertise";
import { SuccessMap } from "./success-map";
import { LanguageSupport } from "./language-support";
import { GlobalOperations } from "./global-operations";
import { Button } from "@/components/ui/button";

export function GlobalPresenceSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Global Reach, Local Excellence
          </h2>
          <p className="text-xl text-muted-foreground">
            Delivering digital excellence across continents. Experience the power of 
            global expertise with local market understanding.
          </p>
        </div>

        <GlobalMap />
        <CrossCulturalExpertise />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <SuccessMap />
          <LanguageSupport />
        </div>

        <div className="mt-16">
          <GlobalOperations />
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="mr-4">
            Start Your Global Journey
          </Button>
          <Button size="lg" variant="outline">
            Explore Regional Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}