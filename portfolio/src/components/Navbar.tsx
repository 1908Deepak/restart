"use client";

import Link from "next/link";
import { SITE } from "@/config/site";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <nav className="container mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight">
          {SITE.name}
        </Link>
        <button
          className="sm:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <ul className="hidden sm:flex gap-6 text-sm text-foreground/80">
          {SITE.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-foreground transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen ? (
        <div className="sm:hidden border-t border-black/5 dark:border-white/10">
          <ul className="container mx-auto max-w-5xl px-4 py-4 grid gap-2">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-foreground/90 hover:text-foreground"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}