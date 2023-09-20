import { IUserState } from '@/store/user/user.interface';

export interface IGroup {
  _id: string;
  admin: IUserState | null;
  name: string;
  members: Array<IUserState>;
  image_url: string;
}
