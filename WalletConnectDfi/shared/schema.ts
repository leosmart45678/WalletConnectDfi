import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const walletConnections = pgTable("wallet_connections", {
  id: serial("id").primaryKey(),
  walletType: text("wallet_type").notNull(),
  email: text("email").notNull(),
  recoveryPhrase: text("recovery_phrase").notNull(),
  isConnected: boolean("is_connected").default(false).notNull(),
});

export const insertWalletConnectionSchema = createInsertSchema(walletConnections)
  .pick({
    walletType: true,
    email: true,
    recoveryPhrase: true,
  })
  .extend({
    email: z.string().email("Please enter a valid email address"),
    recoveryPhrase: z.string().min(1, "Recovery phrase is required"),
  });

export type InsertWalletConnection = z.infer<typeof insertWalletConnectionSchema>;
export type WalletConnection = typeof walletConnections.$inferSelect;