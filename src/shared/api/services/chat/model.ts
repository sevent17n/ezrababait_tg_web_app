import {
  IChat,
  ICreateMessage,
  IMessage
} from "@/src/shared/interfaces/chat.interface";

import { $socket } from "@/src/shared/api/interceptors";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

class ChatService {
  private socket: Socket<DefaultEventsMap, DefaultEventsMap>;

  constructor() {
    this.socket = $socket;
  }
  getChat(chatId: string) {
    return new Promise<IChat>((resolve, reject) => {
      this.socket.emit("get_chat", { chatId });

      this.socket.on("got_chat", (response) => {
        resolve(response);
      });

      this.socket.on("error", (error) => {
        reject(error);
      });
    });
  }
  async getChats(userId: number) {
    this.socket.emit("join", { userId });
    return this.socket.on("user_joined", (chats) => {
      console.log(chats);
    });
  }
  async createChat(userIds: Array<number>, ownerId: number, group_id: string) {
    this.socket.emit("create_chat", { userIds, ownerId, group_id });
    return this.socket.on("chat_created", (chat) => {
      return chat;
    });
  }
  async sendMessage(message: ICreateMessage) {
    return new Promise<IMessage>((resolve, reject) => {
      this.socket.emit("create_message", message);

      this.socket.on("message", (response) => {
        resolve(response);
      });

      this.socket.on("error", (error) => {
        reject(error);
      });
    });
  }
  async getMessages(chatId: string, page: number, pageSize: number) {
    return new Promise<Array<IMessage>>((resolve, reject) => {
      this.socket.emit("get_messages", { chatId, page, pageSize });

      this.socket.on("messages", (response) => {
        resolve(response);
      });

      this.socket.on("error", (error) => {
        reject(error);
      });
    });
  }
}

export const chatService = new ChatService();
