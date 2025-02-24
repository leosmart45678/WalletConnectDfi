import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertWalletConnectionSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.post("/api/wallet/connect", async (req, res) => {
    try {
      const data = insertWalletConnectionSchema.parse(req.body);
      const connection = await storage.createWalletConnection(data);
      res.json(connection);
    } catch (error) {
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  app.get("/api/wallet/connections", async (_req, res) => {
    try {
      const connections = await storage.getWalletConnections();
      res.json(connections);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch wallet connections" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}