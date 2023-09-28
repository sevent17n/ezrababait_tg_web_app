import { IUser } from "@/src/app/store/user/user.interface";

export interface IGroup {
  _id: string;
  admin: IUser | null;
  name: string;
  members: Array<IUser>;
  image_url: string;
}
