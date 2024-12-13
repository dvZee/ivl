"use client";

import { ComparisonMatrix } from "./comparison-matrix";
import { ServiceGuarantees } from "./service-guarantees";
import { ClientTestimonials } from "./client-testimonials";
import { PartnershipShowcase } from "./partnership-showcase";
import { Button } from "@/components/ui/button";

export function WhyUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why We're Your Ideal Digital Partner
          </h2>
          <p className="text-xl text-muted-foreground">
            More than an agency - your strategic partner in digital excellence. 
            Experience the perfect blend of innovation, expertise, and results-driven solutions.
          </p>
        </div>

        <ComparisonMatrix />
        <ServiceGuarantees />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <ClientTestimonials />
          <PartnershipShowcase />
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="mr-4">
            Start Your Digital Transformation
          </Button>
          <Button size="lg" variant="outline">
            Schedule a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}