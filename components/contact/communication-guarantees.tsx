"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Phone, Users, Check } from "lucide-react";

const GUARANTEES = [
  {
    icon: Clock,
    title: "4-Hour Response Guarantee",
    description: "Quick response to all inquiries within 4 business hours",
  },
  {
    icon: Phone,
    title: "24/7 Emergency Support",
    description: "Round-the-clock assistance for critical issues",
  },
  {
    icon: Users,
    title: "Dedicated Project Manager",
    description: "Your single point of contact throughout the project",
  },
  {
    icon: Check,
    title: "Free Initial Consultation",
    description: "Comprehensive project assessment at no cost",
  },
];

export function CommunicationGuarantees() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-center mb-8">Our Promise to You</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {GUARANTEES.map((guarantee) => (
          <Card key={guarantee.title}>
            <CardContent className="p-6 text-center">
              <guarantee.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{guarantee.title}</h4>
              <p className="text-sm text-muted-foreground">
                {guarantee.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}