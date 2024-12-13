"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award, Shield, Trophy } from "lucide-react";

const CERTIFICATIONS = [
  "AWS Advanced Partner",
  "Google Cloud Partner",
  "Microsoft Gold Partner",
  "ISO 27001 Certified",
];

const ASSOCIATIONS = [
  "Digital Innovation Alliance",
  "Tech Leaders Forum",
  "AI Ethics Board",
  "Cloud Security Alliance",
];

export function PartnershipShowcase() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">Trusted by Industry Leaders</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Technology Partners</h4>
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
            <h4 className="font-semibold">Industry Associations</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {ASSOCIATIONS.map((assoc) => (
              <Badge key={assoc} variant="secondary">
                {assoc}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Success Metrics</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}