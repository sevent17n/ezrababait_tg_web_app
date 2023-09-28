import cn from "clsx";
import Image from "next/image";
import React, { CSSProperties, FC } from "react";
import { FieldError } from "react-hook-form";
import { useUpload } from "@/src/shared/hooks/use-upload";

export interface IUploadField {
  folder?: string;
  value?: string;
  onChange: (...event: any[]) => void;
  placeholder: string;
  error?: FieldError;
  style?: CSSProperties;
  isNoImage?: boolean;
}

const UploadField: FC<IUploadField> = ({
  onChange,
  error,
  folder,
  placeholder,
  isNoImage = false,
  style,
  value
}) => {
  const { isLoading, uploadImage } = useUpload(onChange, folder);
  return (
    <div style={style}>
      <p>{placeholder}</p>
      <div>
        <div>
          <div>
            <p>Select an image</p>
          </div>
          <label>
            <input
              type={"file"}
              onChange={uploadImage}
              accept="image/png, image/svg,image/gif, image/jpeg,image/webp,"
            />
            {error && <div>{error.message}</div>}
          </label>
        </div>
        {!isNoImage && (
          <div>
            {isLoading ? (
              <p>loading</p>
            ) : (
              value && (
                <Image alt={" "} src={value} layout={"fill"} unoptimized />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadField;
