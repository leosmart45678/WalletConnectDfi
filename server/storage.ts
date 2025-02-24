import { walletConnections, type WalletConnection, type InsertWalletConnection } from "@shared/schema";

export interface IStorage {
  createWalletConnection(connection: InsertWalletConnection): Promise<WalletConnection>;
  getWalletConnections(): Promise<WalletConnection[]>;
}

export class MemStorage implements IStorage {
  private connections: Map<number, WalletConnection>;
  private currentId: number;

  constructor() {
    this.connections = new Map();
    this.currentId = 1;
  }

  async createWalletConnection(connection: InsertWalletConnection): Promise<WalletConnection> {
    const id = this.currentId++;
    const newConnection: WalletConnection = {
      ...connection,
      id,
      isConnected: true,
    };
    this.connections.set(id, newConnection);
    return newConnection;
  }

  async getWalletConnections(): Promise<WalletConnection[]> {
    return Array.from(this.connections.values());
  }
}

export const storage = new MemStorage();
