"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const TIME_ZONES = [
  {
    region: "Europe (CET)",
    hours: "9:00 AM - 6:00 PM",
    support: "Full Support",
  },
  {
    region: "Americas (EST)",
    hours: "9:00 AM - 6:00 PM",
    support: "Full Support",
  },
  {
    region: "Asia-Pacific (AEST)",
    hours: "9:00 AM - 6:00 PM",
    support: "Full Support",
  },
];

export function GlobalOperations() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">Always On, Always Available</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TIME_ZONES.map((zone) => (
          <Card key={zone.region}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">{zone.region}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{zone.hours}</p>
              <p className="text-sm font-medium text-primary mt-2">{zone.support}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}