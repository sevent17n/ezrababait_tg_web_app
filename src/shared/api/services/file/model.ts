import { AxiosInstance } from "axios";
import { $axios } from "@/src/shared/api/interceptors";

class FileService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = $axios;
  }
  async upload(file: FormData, folder?: string) {
    return this.axios.post<{ url: string; name: string }[]>(`/file`, file, {
      params: { folder },
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
}

export const fileService = new FileService();
