import { AxiosInstance } from "axios";
import { $axios } from "@/src/shared/api/interceptors";
import { IUser } from "@/src/app/store/user/user.interface";

class SuperAdminService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = $axios;
  }
  async addAdmin(data: IAddAdmin) {
    return await this.axios.post<IUser>(`/users/change_role`, data);
  }
  async getAdmins() {
    const { data } = await this.axios.get<Array<IUser>>(`/users/get_admins`);
    return data;
  }
}

export const superAdminService = new SuperAdminService();
