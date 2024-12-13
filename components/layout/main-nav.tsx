"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "AI Transformation",
    href: "/services/ai-transformation",
    description: "Cutting-edge AI solutions for business growth",
  },
  {
    title: "Development Services",
    href: "/services/development",
    description: "Custom web, mobile, and software development",
  },
  {
    title: "Digital Marketing & SEO",
    href: "/services/digital-marketing",
    description: "Results-driven digital marketing solutions",
  },
  {
    title: "Conversion & UX",
    href: "/services/conversion-ux",
    description: "Optimize user experience and conversion rates",
  },
  {
    title: "Creative Services",
    href: "/services/creative",
    description: "Innovative design and content creation",
  },
  {
    title: "Data Services",
    href: "/services/data",
    description: "Data processing and analytics solutions",
  },
];

const industries = [
  {
    title: "E-commerce",
    href: "/industries/e-commerce",
    description: "Digital solutions for online retail",
  },
  {
    title: "Education Technology",
    href: "/industries/education",
    description: "Innovative EdTech solutions",
  },
  {
    title: "Influencer & Celebrity",
    href: "/industries/influencer",
    description: "Digital presence management",
  },
  {
    title: "NGO Services",
    href: "/industries/ngo",
    description: "Digital solutions for non-profits",
  },
  {
    title: "Tech Startup",
    href: "/industries/startup",
    description: "Scaling solutions for startups",
  },
];

const resources = [
  {
    title: "Blog",
    href: "/blog",
    description: "Latest insights and updates",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Success stories and results",
  },
  {
    title: "Whitepapers",
    href: "/resources/whitepapers",
    description: "In-depth research and analysis",
  },
  {
    title: "Guides & Tutorials",
    href: "/resources/guides",
    description: "Educational resources",
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Common questions answered",
  },
];

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
              {industries.map((industry) => (
                <ListItem
                  key={industry.title}
                  title={industry.title}
                  href={industry.href}
                >
                  {industry.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
              {resources.map((resource) => (
                <ListItem
                  key={resource.title}
                  title={resource.title}
                  href={resource.href}
                >
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";