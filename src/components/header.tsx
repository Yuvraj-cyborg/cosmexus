"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-primary flex items-center justify-center">
            <span className="text-primary font-mono text-xs font-bold">CX</span>
          </div>
          <span className="font-mono text-sm font-semibold text-foreground">
            COSMEXUS
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#missions"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Missions
          </a>
          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
        >
          <span
            className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <a
                href="#missions"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Missions
              </a>
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
