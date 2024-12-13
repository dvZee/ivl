"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    text: "InnoVibeLabs transformed our digital presence, delivering a solution that exceeded our expectations in both functionality and ROI.",
    author: "Alex Thompson",
    position: "CEO",
    company: "Leading E-commerce Brand",
    industry: "E-commerce",
  },
  {
    text: "Their AI-driven approach to education technology has revolutionized how we deliver content to students.",
    author: "Dr. Sarah Chen",
    position: "CTO",
    company: "Global Education Platform",
    industry: "EdTech",
  },
  {
    text: "From concept to launch, InnoVibeLabs has been instrumental in our success story.",
    author: "Michael Rodriguez",
    position: "Founder",
    company: "Tech Startup",
    industry: "Technology",
  },
];

export function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-6">What Our Partners Say</h3>
        <div className="relative h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <blockquote className="text-lg mb-4">
                "{TESTIMONIALS[currentIndex].text}"
              </blockquote>
              <footer>
                <div className="font-semibold">
                  {TESTIMONIALS[currentIndex].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {TESTIMONIALS[currentIndex].position}, {TESTIMONIALS[currentIndex].company}
                </div>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" size="icon" onClick={prev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={next}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}