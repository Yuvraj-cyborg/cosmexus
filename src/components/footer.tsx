import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-mono">
          © 2025 Cosmexus. All rights reserved.
        </p>
        <a
          href="https://x.com/cosmexus"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
        >
          <FaXTwitter />
        </a>
      </div>
    </footer>
  );
}
