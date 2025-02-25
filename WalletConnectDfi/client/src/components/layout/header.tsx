import { Link } from "wouter";
import { ModeToggle } from "@/components/theme/mode-toggle";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-primary">WalletConnect</a>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link href="/about">
              <a className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
