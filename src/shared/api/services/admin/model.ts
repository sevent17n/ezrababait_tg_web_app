import { IUser } from "@/src/app/store/user/user.interface";
import { $axios } from "@/src/shared/api/interceptors";
import { AxiosInstance } from "axios";

class AdminService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = $axios;
  }
  async getUsersByQuery(query: string) {
    return await this.axios.get<Array<{ item: IUser }>>(`/posts/posts`, {
      params: { query }
    });
  }
  async getUserById(id: number) {
    const { data } = await this.axios.get<IUser>(`/posts/posts_by_id`, {
      params: { id }
    });
    return data;
  }
}

export const adminService = new AdminService();
