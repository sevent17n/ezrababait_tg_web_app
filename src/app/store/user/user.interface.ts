export interface IUser {
  chats: Array<{}>;
  first_name: string;
  last_name: string;
  image_url: string;
  username: string;
  posts: Array<{}>;
  id: number;
  isAdmin: "admin" | "housekeeper" | "super_admin" | "pending";
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}
export interface IInitialState {
  user: IUser | null;
  isLoading: boolean;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}
