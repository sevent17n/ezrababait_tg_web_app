import { AuthService } from '@/shared/services/auth/auth.service';
import { IUserState } from '@/store/user/user.interface';

export const tgAuth = async (user: IUserState | null, pathname: string) => {
  if (pathname === 'auth_page') return null;

  if (user) return null;
  const queryString: string = window.location.search;

  const queryParameters: string[] = queryString.slice(1).split('&');

  const queryObject: { [key: string]: any } = {};

  queryParameters.forEach((param: string) => {
    const [key, value] = param.split('=');
    queryObject[key] = value;
  });

  const { hash, ...data } = queryObject;

  const verifyObject = {
    ...data,
  };

  const dataCheckArray = Object.entries(verifyObject).map(
    ([key, value]) => `${key}=${value}`
  );

  dataCheckArray.sort();
  const dataCheckString = dataCheckArray.join('/');

  return await AuthService.verify(dataCheckString, hash);
};
