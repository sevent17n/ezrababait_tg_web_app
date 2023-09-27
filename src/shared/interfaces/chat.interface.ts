import { IUserState } from '@/store/user/user.interface';

export interface IContent {
  image?: null | string;
  video?: null | string;
  text?: null | string;
  audio?: null | string;
}
export interface IMessage {
  _id: string;
  content: IContent;
  date: Date;
  sender: IUserState;
  chatId: string;
  isOwnMessage: boolean;
  read: boolean;
}

export interface ICreateMessage {
  content: IContent;
  senderId: number;
  chatId: string;
  date: Date;
}
export interface IChatBody {
  messages: Array<IMessage>;
}
export interface IChat {
  image_url: string;
  name: string;
  members: Array<IUserState>;
  group_id: string;
  messages: Array<IMessage>;
  _id: string;
}
