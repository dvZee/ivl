"use client";

import { useEffect, useState } from "react";

interface FormData {
  service: string;
  industry: string;
  timeline: string;
  budget: string;
}

export function useEstimationCalculator(formData: FormData) {
  const [estimation, setEstimation] = useState<string | null>(null);

  useEffect(() => {
    if (!formData.service || !formData.industry || !formData.timeline) {
      setEstimation(null);
      return;
    }

    // Simple estimation logic - can be made more sophisticated
    const baseEstimate = getBaseEstimate(formData.service);
    const industryMultiplier = getIndustryMultiplier(formData.industry);
    const timelineMultiplier = getTimelineMultiplier(formData.timeline);

    const totalEstimate = baseEstimate * industryMultiplier * timelineMultiplier;
    const range = {
      min: totalEstimate * 0.8,
      max: totalEstimate * 1.2,
    };

    setEstimation(
      `Estimated project cost: $${formatNumber(range.min)} - $${formatNumber(range.max)}`
    );
  }, [formData]);

  return estimation;
}

function getBaseEstimate(service: string): number {
  const estimates: { [key: string]: number } = {
    "development services": 20000,
    "digital marketing & seo": 5000,
    "ai transformation": 30000,
    "creative services": 8000,
    "data services": 15000,
    "ux/ui design": 10000,
  };
  return estimates[service] || 10000;
}

function getIndustryMultiplier(industry: string): number {
  const multipliers: { [key: string]: number } = {
    "e-commerce": 1.2,
    "education": 1.0,
    "tech startup": 1.1,
    "ngo": 0.8,
    "other": 1.0,
  };
  return multipliers[industry] || 1.0;
}

function getTimelineMultiplier(timeline: string): number {
  const multipliers: { [key: string]: number } = {
    "immediate (< 1 month)": 1.5,
    "short-term (1-3 months)": 1.2,
    "medium-term (3-6 months)": 1.0,
    "long-term (6+ months)": 0.9,
  };
  return multipliers[timeline] || 1.0;
}

function formatNumber(num: number): string {
  return Math.round(num).toLocaleString("en-US");
}