"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function StatCounter({ end, label, suffix = "", duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const step = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      countRef.current = Math.floor(progress * end);
      setCount(countRef.current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}