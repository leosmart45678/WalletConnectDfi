import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">WalletConnect</h3>
            <p className="text-sm text-muted-foreground">
              Secure and easy wallet connection for DeFi applications
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm text-muted-foreground">
              Questions? Reach out to our support team
            </p>
            <Link href="/contact">
              <a className="text-sm text-primary hover:underline">
                Send us a message
              </a>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} WalletConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
