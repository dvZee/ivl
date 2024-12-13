"use client";

import { Button } from "@/components/ui/button";
import { SolutionsGrid } from "./solutions-grid";
import { FeaturedCarousel } from "./featured-carousel";

export function SolutionsMatrix() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored Digital Solutions Across Industries
          </h2>
          <p className="text-xl text-muted-foreground">
            Where expertise meets innovation: Discover our comprehensive suite of services 
            customized for your industry's unique challenges.
          </p>
        </div>

        <SolutionsGrid />

        <div className="mt-20">
          <FeaturedCarousel />
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="mr-4">
            Schedule Your Solution Discovery Call
          </Button>
          <Button size="lg" variant="outline">
            Download Solutions Guide
          </Button>
        </div>
      </div>
    </section>
  );
}