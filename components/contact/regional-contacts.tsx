"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

const REGIONS = [
  {
    name: "Europe",
    hours: "9:00 AM - 6:00 PM CET",
    cities: ["London", "Berlin", "Paris"],
  },
  {
    name: "Americas",
    hours: "9:00 AM - 6:00 PM EST",
    cities: ["New York", "Toronto", "Mexico City"],
  },
  {
    name: "Asia-Pacific",
    hours: "9:00 AM - 6:00 PM AEST",
    cities: ["Sydney", "Singapore", "Tokyo"],
  },
];

export function RegionalContacts() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Global Presence</h3>
      <div className="grid gap-4">
        {REGIONS.map((region) => (
          <Card key={region.name}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Globe className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">{region.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{region.hours}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {region.cities.join(" • ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}