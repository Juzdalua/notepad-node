import { SendClientType } from '@/types/socket.types';
import { Request, Response } from 'express';
import http, { createServer } from 'http';
import { DefaultEventsMap, Socket, Server } from 'socket.io';
import { app } from './api';

export class SIOServer {
  private io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
  private server: http.Server;
  private clients: Map<string, SendClientType> = null;
  private webClient: Socket<
    DefaultEventsMap,
    DefaultEventsMap,
    DefaultEventsMap,
    any
  > = null;

  constructor() {
    this.server = createServer(app);

    this.io = new Server(this.server, {
      pingInterval: 1000,
      pingTimeout: 5000,
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
    this.clients = new Map<string, SendClientType>();
  }

  public getClientsInfo() {
    const c = [];
    for (const [socketId, type] of this.clients.entries()) {
      c.push(type);
    }

    return {
      size: this.clients.size,
      clients: c,
    };
  }

  public Start() {
    this.io.on('connection', (socket) => {
      console.log(`[Client connected] ${socket.id}`);

      socket.on('register', (data) => {
        if (data.clientType && !this.clients.has(socket.id)) {
          this.clients.set(socket.id, data.clientType);
          console.log(`[Client registered] ${socket.id}: [${data.clientType}]`);

          if (data.clientType == SendClientType.WEB) {
            this.webClient = socket;
          }
        }
      });

      socket.on('disconnect', () => {
        console.log(
          `[Client disconnected] ${socket.id}: [${
            this.clients.get(socket.id) ?? 'Not Registerd Client'
          }]`,
        );

        if (this.clients.has(socket.id)) {
          if (this.clients.get(socket.id) == SendClientType.WEB) {
            this.webClient = null;
          }

          this.clients.delete(socket.id);
        }
      });
    });

    this.server.listen(process.env.SERVER_PORT, () => {
      console.log(
        `🚀 Start Server from http://localhost:${process.env.SERVER_PORT} ✅`,
      );
    });
  }

  public Ping() {
    if (this.io && this.clients.size > 0) {
      this.io.emit('ping', 'ping');
    }
  }

  public SendClientInfoToWebClient() {
    if (this.io && this.webClient) {
      this.webClient.emit('Clients', this.getClientsInfo());
    }
  }
}
