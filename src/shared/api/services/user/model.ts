import { AxiosInstance } from "axios";
import { $axios } from "@/src/shared/api/interceptors";
import { IPost } from "@/src/shared/interfaces/post.interface";

class UserService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = $axios;
  }
  async getUserList() {
    const { data } = await this.axios.get<Array<IPost>>(`/bot`);
    return data;
  }
}

export const userService = new UserService();
