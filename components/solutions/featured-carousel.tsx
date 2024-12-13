"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedSolution {
  title: string;
  subtitle: string;
  metric: string;
  image: string;
}

const FEATURED_SOLUTIONS: FeaturedSolution[] = [
  {
    title: "E-commerce Excellence",
    subtitle: "AI-powered retail solutions",
    metric: "200% average revenue growth",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "EdTech Innovation",
    subtitle: "Digital learning platforms",
    metric: "500,000+ students served",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Startup Acceleration",
    subtitle: "Rapid MVP development",
    metric: "30+ successful launches",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
  }
];

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_SOLUTIONS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? FEATURED_SOLUTIONS.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Trending Digital Solutions
      </h3>
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {FEATURED_SOLUTIONS.map((solution, index) => (
            <div
              key={solution.title}
              className="w-full flex-shrink-0 px-4"
            >
              <Card className="relative overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{solution.title}</h4>
                    <p className="text-sm opacity-90 mb-1">{solution.subtitle}</p>
                    <p className="text-lg font-semibold">{solution.metric}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}