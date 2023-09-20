import { API_URL } from '@/shared/config/api.config';
import { IUserState } from '@/store/user/user.interface';
import { AxiosAuth } from '@/shared/interceptors/axiosAuth.interceptor';

export const SuperAdminService = {
  async addAdmin(data: IAddAdmin) {
    return await AxiosAuth.post<IUserState>(
      `${API_URL}/users/change_role`,
      data
    );
  },
};
