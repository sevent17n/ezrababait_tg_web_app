import { AuthService } from '@/shared/services/auth/auth.service';

export const tgAuth = async () => {
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

  console.log(queryObject);
  dataCheckArray.sort();
  const dataCheckString = dataCheckArray.join('/');

  return await AuthService.verify(dataCheckString, hash);
};
