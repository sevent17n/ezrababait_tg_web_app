import { AxiosAuth } from '@/shared/api/interceptors/axiosAuth.interceptor';
import { API_URL } from '@/shared/config/api.config';
import { IUserState } from '@/store/user/user.interface';

export const AdminService = {
  async getUsersByQuery(query: string) {
    return await AxiosAuth.get<Array<{ item: IUserState }>>(
      `${API_URL}/posts/posts?query=${query}`
    );
  },
  async getUserById(id: number) {
    const { data } = await AxiosAuth.get<IUserState>(
      `${API_URL}/posts/posts_by_id?id=${id}`
    );
    return data;
  },
};
