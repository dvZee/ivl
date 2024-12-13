"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INDUSTRIES = [
  "E-commerce",
  "Education",
  "Tech Startups",
  "NGOs",
  "Influencer & Celebrity",
];

const GROWTH_MULTIPLIERS = {
  "e-commerce": 2.5,
  "education": 2.0,
  "tech startups": 3.0,
  "ngos": 1.5,
  "influencer & celebrity": 2.8,
};

interface ROIResult {
  projectedRevenue: number;
  potentialROI: number;
  timeframe: number;
}

export function ROICalculator() {
  const [industry, setIndustry] = useState("");
  const [currentRevenue, setCurrentRevenue] = useState("");
  const [projectedGrowth, setProjectedGrowth] = useState("");
  const [result, setResult] = useState<ROIResult | null>(null);

  const calculateROI = () => {
    if (!industry || !currentRevenue || !projectedGrowth) {
      return;
    }

    const revenue = parseFloat(currentRevenue);
    const growth = parseFloat(projectedGrowth) / 100;
    const multiplier = GROWTH_MULTIPLIERS[industry as keyof typeof GROWTH_MULTIPLIERS] || 2.0;

    const projectedRevenue = revenue * (1 + growth * multiplier);
    const investment = revenue * 0.15; // Estimated investment of 15% of current revenue
    const potentialROI = ((projectedRevenue - revenue - investment) / investment) * 100;
    const timeframe = 12; // months

    setResult({
      projectedRevenue,
      potentialROI,
      timeframe,
    });
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold text-center">Calculate Your Potential ROI</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {INDUSTRIES.map((ind) => (
                <SelectItem key={ind} value={ind.toLowerCase()}>
                  {ind}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="revenue">Current Annual Revenue</Label>
          <Input
            id="revenue"
            type="number"
            placeholder="Enter amount"
            value={currentRevenue}
            onChange={(e) => setCurrentRevenue(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="growth">Desired Growth (%)</Label>
          <Input
            id="growth"
            type="number"
            placeholder="Enter percentage"
            value={projectedGrowth}
            onChange={(e) => setProjectedGrowth(e.target.value)}
          />
        </div>

        <Button className="w-full" onClick={calculateROI}>
          Calculate ROI
        </Button>

        {result && (
          <div className="mt-6 space-y-4 p-4 bg-secondary/50 rounded-lg">
            <div>
              <div className="text-sm text-muted-foreground">Projected Annual Revenue</div>
              <div className="text-2xl font-bold">
                ${result.projectedRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Potential ROI</div>
              <div className="text-2xl font-bold text-primary">
                {result.potentialROI.toFixed(1)}%
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Estimated Timeframe</div>
              <div className="text-lg font-semibold">
                {result.timeframe} months
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}