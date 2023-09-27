import { socket } from '@/shared/api/interceptors/socketAuth.interceptor';
import {
  IChat,
  ICreateMessage,
  IMessage,
} from '@/shared/interfaces/chat.interface';

export const ChatService = {
  getChat(chatId: string) {
    return new Promise<IChat>((resolve, reject) => {
      socket.emit('get_chat', { chatId });

      socket.on('got_chat', (response) => {
        resolve(response);
      });

      socket.on('error', (error) => {
        reject(error);
      });
    });
  },
  async getChats(userId: number) {
    socket.emit('join', { userId });
    return socket.on('user_joined', (chats) => {
      console.log(chats);
    });
  },
  async createChat(userIds: Array<number>, ownerId: number, group_id: string) {
    socket.emit('create_chat', { userIds, ownerId, group_id });
    return socket.on('chat_created', (chat) => {
      return chat;
    });
  },
  async sendMessage(message: ICreateMessage) {
    return new Promise<IMessage>((resolve, reject) => {
      socket.emit('create_message', message);

      socket.on('message', (response) => {
        resolve(response);
      });

      socket.on('error', (error) => {
        reject(error);
      });
    });
  },
  async getMessages(chatId: string, page: number, pageSize: number) {
    return new Promise<Array<IMessage>>((resolve, reject) => {
      socket.emit('get_messages', { chatId, page, pageSize });

      socket.on('messages', (response) => {
        resolve(response);
      });

      socket.on('error', (error) => {
        reject(error);
      });
    });
  },
};
