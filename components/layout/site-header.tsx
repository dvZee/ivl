"use client";

import Link from "next/link";
import { MainNav } from "./main-nav";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-bold">InnoVibeLabs</span>
        </Link>
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <MainNav />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}