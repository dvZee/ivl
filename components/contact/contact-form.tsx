"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEstimationCalculator } from "@/hooks/use-estimation-calculator";

const SERVICE_CATEGORIES = [
  "Development Services",
  "Digital Marketing & SEO",
  "AI Transformation",
  "Creative Services",
  "Data Services",
  "UX/UI Design",
];

const INDUSTRIES = [
  "E-commerce",
  "Education",
  "Tech Startup",
  "NGO",
  "Other",
];

const TIMELINES = [
  "Immediate (< 1 month)",
  "Short-term (1-3 months)",
  "Medium-term (3-6 months)",
  "Long-term (6+ months)",
];

const BUDGET_RANGES = [
  "$500 - $5,000",
  "$5,000 - $25,000",
  "$25,000 - $100,000",
  "Custom Range",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    industry: "",
    timeline: "",
    budget: "",
    description: "",
  });

  const estimation = useEstimationCalculator(formData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <h3 className="text-2xl font-bold">Quick Project Scoping</h3>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name*</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service">Service Category*</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleChange("service", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_CATEGORIES.map((service) => (
                    <SelectItem key={service} value={service.toLowerCase()}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry*</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleChange("industry", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRIES.map((industry) => (
                    <SelectItem key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline">Project Timeline*</Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => handleChange("timeline", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {TIMELINES.map((timeline) => (
                    <SelectItem key={timeline} value={timeline.toLowerCase()}>
                      {timeline}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleChange("budget", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {BUDGET_RANGES.map((budget) => (
                    <SelectItem key={budget} value={budget.toLowerCase()}>
                      {budget}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Tell us about your project, requirements, and desired outcomes..."
              className="h-32"
            />
          </div>

          {estimation && (
            <div className="p-4 bg-secondary/50 rounded-lg">
              <p className="font-semibold">Preliminary Estimate</p>
              <p className="text-muted-foreground">{estimation}</p>
            </div>
          )}

          <Button type="submit" className="w-full">
            Submit Your Project Details
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}