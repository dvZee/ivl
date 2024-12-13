"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const CLIENTS = [
  {
    name: "Tech Corp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=50&fit=crop&auto=format",
    industry: "Technology",
    metric: "+150% Revenue Growth"
  },
  {
    name: "Global Finance",
    logo: "https://images.unsplash.com/photo-1598815272841-5f2416fae276?w=200&h=50&fit=crop&auto=format",
    industry: "Finance",
    metric: "2M+ Users Reached"
  },
  {
    name: "Health Plus",
    logo: "https://images.unsplash.com/photo-1599305019492-b2b0c56ba155?w=200&h=50&fit=crop&auto=format",
    industry: "Healthcare",
    metric: "99.9% Uptime"
  }
];

export function ClientLogos() {
  return (
    <div className="flex items-center justify-center gap-8 mt-12">
      {CLIENTS.map((client) => (
        <div
          key={client.name}
          className="relative group cursor-pointer"
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={100}
            height={25}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-popover p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <p className="font-semibold">{client.industry}</p>
            <p className="text-sm text-muted-foreground">{client.metric}</p>
          </div>
        </div>
      ))}
    </div>
  );
}