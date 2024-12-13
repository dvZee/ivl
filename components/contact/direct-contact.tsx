"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock } from "lucide-react";

const CONTACT_OPTIONS = [
  {
    title: "General Inquiries",
    email: "hello@innovibelabs.com",
    response: "< 4 hours",
    icon: Mail,
  },
  {
    title: "Technical Support",
    email: "support@innovibelabs.com",
    response: "< 2 hours",
    icon: Mail,
  },
  {
    title: "Emergency Support",
    phone: "+1 (555) 123-4567",
    response: "Immediate",
    icon: Phone,
  },
];

export function DirectContactOptions() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Connect Your Way</h3>
      <div className="grid gap-4">
        {CONTACT_OPTIONS.map((option) => (
          <Card key={option.title}>
            <CardContent className="p-4 flex items-start space-x-4">
              <option.icon className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">{option.title}</h4>
                {option.email && (
                  <a
                    href={`mailto:${option.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {option.email}
                  </a>
                )}
                {option.phone && (
                  <a
                    href={`tel:${option.phone}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {option.phone}
                  </a>
                )}
                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  Response Time: {option.response}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}