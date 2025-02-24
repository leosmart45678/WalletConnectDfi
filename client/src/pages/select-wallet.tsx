import { useLocation } from "wouter";
import { WalletGrid } from "@/components/wallet/wallet-grid";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { TrustBadges } from "@/components/security/trust-badges";

export default function SelectWallet() {
  const [, setLocation] = useLocation();

  const handleWalletSelect = (wallet: string) => {
    setLocation(`/connect/${wallet}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <main className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Select Your Wallet</h2>
              <p className="text-muted-foreground">
                Choose your preferred wallet to connect
              </p>
            </section>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Available Wallets</h3>
                </div>

                <WalletGrid selectedWallet={null} onSelect={handleWalletSelect} />
              </CardContent>
            </Card>

            <TrustBadges />
          </div>
        </main>
      </div>
    </div>
  );
}
