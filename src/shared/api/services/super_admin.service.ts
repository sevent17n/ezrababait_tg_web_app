import { API_URL } from '@/shared/config/api.config';
import { IUserState } from '@/store/user/user.interface';
import { AxiosAuth } from '@/shared/api/interceptors/axiosAuth.interceptor';

export const SuperAdminService = {
  async addAdmin(data: IAddAdmin) {
    return await AxiosAuth.post<IUserState>(
      `${API_URL}/users/change_role`,
      data
    );
  },
  async getAdmins() {
    const { data } = await AxiosAuth.get<Array<IUserState>>(
      `${API_URL}/users/get_admins`
    );
    return data;
  },
};
