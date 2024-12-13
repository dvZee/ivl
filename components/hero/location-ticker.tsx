"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LOCATIONS = [
  "Germany",
  "UK",
  "US",
  "Mexico",
  "France",
  "Canada",
  "Netherlands",
  "Italy",
  "Ireland",
  "Pakistan",
  "Australia",
];

export function LocationTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LOCATIONS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden h-6">
      <div
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${currentIndex * 24}px)` }}
      >
        {LOCATIONS.map((location, index) => (
          <div key={location} className="h-6">
            {location}
          </div>
        ))}
      </div>
    </div>
  );
}