import { 
  SiCoinbase, 
  SiBinance,
  SiEthereum,
  SiFantom,
  SiCoinmarketcap
} from "react-icons/si";
import { Wallet, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WalletLogo } from "./wallet-logo";
import { motion } from "framer-motion";

const WALLETS = [
  { id: "coinbase", name: "Coinbase Wallet", icon: SiCoinbase },
  { id: "exodus", name: "Exodus", icon: Wallet },
  { id: "metamask", name: "MetaMask", icon: SiEthereum },
  { id: "trust", name: "Trust Wallet", icon: Shield },
  { id: "binance", name: "Binance", icon: SiBinance },
  { id: "crypto", name: "Crypto.com Onchain", icon: SiCoinmarketcap },
  { id: "phantom", name: "Phantom", icon: SiFantom },
  { id: "luno", name: "Luno", icon: Wallet },
  { id: "okx", name: "OKX Wallet", icon: Wallet },
  { id: "safepal", name: "SafePal", icon: Wallet },
  { id: "1inch", name: "1inch", icon: Wallet },
  { id: "myetherwallet", name: "MyEtherWallet", icon: SiEthereum },
  { id: "edge", name: "Edge - Bitcoin & Crypto", icon: Wallet },
  { id: "electrum", name: "Electrum Wallet", icon: Wallet },
  { id: "guarda", name: "Guarda", icon: Wallet },
  { id: "atomic", name: "Atomic Wallet", icon: Wallet },
  { id: "zengo", name: "Zengo", icon: Wallet },
  { id: "bitgo", name: "BitGo", icon: Wallet },
  { id: "alpha", name: "AlphaWallet", icon: Wallet },
  { id: "abra", name: "Abra", icon: Wallet },
  { id: "desktop", name: "Desktop Wallets", icon: Wallet },
  { id: "tron", name: "Tron", icon: SiEthereum }
];

interface WalletGridProps {
  selectedWallet: string | null;
  onSelect: (wallet: string) => void;
}

export function WalletGrid({ selectedWallet, onSelect }: WalletGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {WALLETS.map(({ id, name, icon }, index) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Button
            variant={selectedWallet === id ? "default" : "outline"}
            className="w-full h-24 flex-col gap-2 p-2 border-2 hover:border-primary transition-colors relative group overflow-hidden"
            onClick={() => onSelect(id)}
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col items-center">
              <WalletLogo icon={icon} className="mb-2" />
              <span className="text-sm text-center font-medium">{name}</span>
            </div>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}