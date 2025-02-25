import { useLocation } from "wouter";
import { TrustBadges } from "@/components/security/trust-badges";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Wallet className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-primary">WalletConnect</h1>
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wallet className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Secure DeFi Wallet Connection
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Connect your wallet securely to access Web3 services
              </p>
              <Button 
                size="lg"
                onClick={() => setLocation("/select-wallet")}
                className="gap-2"
              >
                Connect Wallet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </section>

            <TrustBadges />
          </div>
        </main>
      </div>
    </div>
  );
}