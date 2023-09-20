export interface IUserState {
  chats: Array<{}>;
  first_name: string;
  last_name: string;
  photo_url: string;
  username: string;
  posts: Array<{}>;
  id: number;
  isAdmin: 'admin' | 'housekeeper' | 'super_admin' | 'pending';
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}
export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
}

export interface IAuthResponse extends ITokens {
  user: IUserState;
}
