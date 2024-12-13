"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Lock } from "lucide-react";

const CERTIFICATIONS = [
  "ISO 27001 Certified",
  "GDPR Compliant",
  "SOC 2 Type II",
  "PCI DSS Compliant",
];

const TESTIMONIAL = {
  text: "Their team's expertise and professionalism exceeded our expectations. The project was delivered on time and within budget.",
  author: "Sarah Johnson",
  position: "CTO, TechCorp Solutions",
};

export function TrustSignals() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">Why Trust Us</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Industry Recognition</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((cert) => (
              <Badge key={cert} variant="secondary">
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Security & Compliance</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Enterprise-grade security measures and full regulatory compliance for your peace of mind.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Client Testimonial</h4>
          </div>
          <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
            "{TESTIMONIAL.text}"
            <footer className="mt-2 text-sm">
              <strong>{TESTIMONIAL.author}</strong>
              <br />
              {TESTIMONIAL.position}
            </footer>
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
}