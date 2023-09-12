import axios from 'axios';
import { API_URL } from '@/shared/config/api.config';
import { IPost } from '@/shared/interfaces/post.interface';

export const UserService = {
  async getUserList() {
    return await axios.get<Array<IPost>>(`${API_URL}/bot`);
  },
};
