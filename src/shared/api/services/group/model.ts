import { IGroup } from "@/src/shared/interfaces/group.interface";
import { AxiosInstance } from "axios";
import { $axios } from "@/src/shared/api/interceptors";

class GroupService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = $axios;
  }
  async createGroup(
    name: string,
    group_image_url: string,
    idArray: Array<number>
  ) {
    const { data } = await this.axios.post<IGroup>(`/group/create_group`, {
      name: name,
      image_url: group_image_url,
      idArray: idArray
    });
    return data;
  }
  async getGroupList(page: number, perPage: number) {
    const { data } = await this.axios.get<Array<IGroup>>(
      `/group?page=${page}&perPage=${perPage}`,
      { params: { page, perPage } }
    );
    return data;
  }
  async getById(_id: string) {
    const { data } = await this.axios.get<IGroup>(`/group/get_group_by_id`, {
      params: { _id }
    });
    return data;
  }
  async addAdmin(username: string, groupId: string) {
    return await this.axios.post<IGroup>(`/group/add_admin_to_group`, {
      username,
      groupId
    });
  }
  async addMember(username: string, groupId: string) {
    return await this.axios.post<IGroup>(`/group/add_user_to_group`, {
      username,
      groupId
    });
  }
}

export const groupService = new GroupService();
