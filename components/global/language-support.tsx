"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

const LANGUAGES = [
  "English",
  "German",
  "French",
  "Spanish",
  "Italian",
  "Dutch",
];

export function LanguageSupport() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-4">
        <Globe className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold">Breaking Language Barriers</h3>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((language) => (
            <Badge key={language} variant="secondary" className="text-sm">
              {language}
            </Badge>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Additional language support available upon request
        </p>
      </CardContent>
    </Card>
  );
}