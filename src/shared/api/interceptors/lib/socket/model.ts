import { io } from "socket.io-client";

export const socket_auth = (accessToken: string, base_url: string) =>
  io(base_url, {
    auth: { bearer: `Bearer ${accessToken}` }
  });
