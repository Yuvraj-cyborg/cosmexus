import { FaXTwitter } from "react-icons/fa6";
import CuttingMatGrid from "./CuttingMatGrid";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-4 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-30">
        <CuttingMatGrid />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground font-mono">
              © 2025 Cosmexus. All rights reserved.
            </p>
          </div>
          
          {/* Social link */}
          <a
            href="https://x.com/cosmexus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaXTwitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
