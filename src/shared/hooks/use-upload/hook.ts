import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fileService } from "@/src/shared/api/services/file";

type TypeUpload = (
  onChange: (...event: any[]) => void,
  folder?: string
) => {
  uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  isLoading: boolean;
};
export const useUpload: TypeUpload = (onChange, folder) => {
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync } = useMutation(
    ["upload file"],
    (data: FormData) => fileService.upload(data, folder),
    {
      onSuccess: ({ data }) => {
        onChange(data[0].url);
      },
      onError: (error) => {
        console.log(error, "Upload file");
      }
    }
  );
  const uploadImage = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true);
      const files = e.target.files;
      if (!files?.length) return;
      const formData = new FormData();
      formData.append("file", files[0]);
      try {
        await mutateAsync(formData);
      } catch (e) {}
      setIsLoading(false);
    },
    [mutateAsync]
  );
  return useMemo(
    () => ({
      uploadImage,
      isLoading
    }),
    [uploadImage, isLoading]
  );
};
