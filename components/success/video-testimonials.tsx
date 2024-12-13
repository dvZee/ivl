"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechCorp Solutions",
    video: "https://example.com/video1.mp4",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    quote: "The team's expertise in AI integration transformed our operations completely.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "EduTech Global",
    video: "https://example.com/video2.mp4",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    quote: "Our learning platform saw unprecedented growth after the implementation.",
  },
  {
    id: 3,
    name: "Emma Davis",
    position: "Founder",
    company: "StartupX",
    video: "https://example.com/video3.mp4",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    quote: "From MVP to scale, they've been instrumental in our success story.",
  },
];

export function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsPlaying(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">Hear from Our Partners</h3>
      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <img
            src={currentTestimonial.thumbnail}
            alt={currentTestimonial.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 backdrop-blur-sm"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        <CardContent className="p-6">
          <blockquote className="text-lg italic mb-4">
            "{currentTestimonial.quote}"
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{currentTestimonial.name}</div>
              <div className="text-sm text-muted-foreground">
                {currentTestimonial.position}, {currentTestimonial.company}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prev}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}