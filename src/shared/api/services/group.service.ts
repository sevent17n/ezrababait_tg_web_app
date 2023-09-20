import { AxiosAuth } from '@/shared/api/interceptors/axiosAuth.interceptor';
import { API_URL } from '@/shared/config/api.config';
import { IGroup } from '@/shared/interfaces/group.interface';

export const GroupService = {
  async createGroup(name: string, group_image_url: string) {
    return await AxiosAuth.post<IGroup>(
      `${API_URL}/group/create_group?name=${name}&image_url=${group_image_url}`,
      name
    );
  },
  async getGroupList(page: number, perPage: number) {
    const { data } = await AxiosAuth.get<Array<IGroup>>(
      `${API_URL}/group?page=${page}&perPage=${perPage}`
    );
    return data;
  },
  async getById(_id: string) {
    const { data } = await AxiosAuth.get<IGroup>(
      `${API_URL}/group/get_group_by_id?_id=${_id}`
    );
    return data;
  },
  async addAdmin(username: string, groupId: string) {
    return await AxiosAuth.post<IGroup>(
      `${API_URL}/group/add_admin_to_group?username=${username}&groupId=${groupId}`
    );
  },
  async addMember(username: string, groupId: string) {
    return await AxiosAuth.post<IGroup>(
      `${API_URL}/group/add_user_to_group?username=${username}&groupId=${groupId}`
    );
  },
};
