"use client";

import { Button } from "@/components/ui/button";
import { StatCounter } from "./stat-counter";
import { LocationTicker } from "./location-ticker";
import { ClientLogos } from "./client-logos";
import { ArrowRight, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Transform Your Digital Future with AI-Powered Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            From Europe to Australia, we deliver cutting-edge digital transformation.
            Custom development, AI innovation, strategic marketing, and creative solutions
            that drive measurable business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group">
              Start Your Digital Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Our Success Stories
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <StatCounter end={200} label="Successful Projects" suffix="+" />
            <StatCounter end={95} label="Client Retention Rate" suffix="%" />
            <StatCounter end={10} label="Countries Served" suffix="+" />
            <StatCounter end={50} label="Certified Experts" suffix="+" />
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <Globe className="h-5 w-5" />
            <span>Currently serving clients in:</span>
            <LocationTicker />
          </div>

          <ClientLogos />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  );
}