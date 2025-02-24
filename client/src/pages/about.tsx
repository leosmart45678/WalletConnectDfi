import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">About WalletConnect</h1>
          <p className="text-muted-foreground">
            Your Gateway to Web4 Experiences
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Our Platform</h2>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                With WalletConnect you can easily connect and integrate with hundreds of DApps for easy:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <li>Swapping</li>
                <li>Exchanging</li>
                <li>Trading</li>
                <li>Tracking</li>
                <li>DeFi lending & borrowing</li>
                <li>Multisig</li>
                <li>ENS</li>
                <li>Smart Contracts</li>
                <li>And many more...</li>
              </ul>

              <p className="mt-8 text-xl font-medium text-primary">
                The simple door to a new world of web4 experiences
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
