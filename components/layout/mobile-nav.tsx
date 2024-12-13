"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  { title: "AI Transformation", href: "/services/ai-transformation" },
  { title: "Development Services", href: "/services/development" },
  { title: "Digital Marketing & SEO", href: "/services/digital-marketing" },
  { title: "Conversion & UX", href: "/services/conversion-ux" },
  { title: "Creative Services", href: "/services/creative" },
  { title: "Data Services", href: "/services/data" },
];

const industries = [
  { title: "E-commerce", href: "/industries/e-commerce" },
  { title: "Education Technology", href: "/industries/education" },
  { title: "Influencer & Celebrity", href: "/industries/influencer" },
  { title: "NGO Services", href: "/industries/ngo" },
  { title: "Tech Startup", href: "/industries/startup" },
];

const resources = [
  { title: "Blog", href: "/blog" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Whitepapers", href: "/resources/whitepapers" },
  { title: "Guides & Tutorials", href: "/resources/guides" },
  { title: "FAQ", href: "/faq" },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 py-4">
          <Link
            href="/about"
            className="text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services">
              <AccordionTrigger>Services</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-sm text-muted-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="industries">
              <AccordionTrigger>Industries</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="text-sm text-muted-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resources">
              <AccordionTrigger>Resources</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  {resources.map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="text-sm text-muted-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {resource.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href="/contact"
            className="text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="mt-4">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}