import cn from 'clsx';
import Image from 'next/image';
import React, { CSSProperties, FC } from 'react';
import styles from './UploadField.module.scss';
import { useUpload } from '@/shared/lib/hooks/useUpload';
import { FieldError } from 'react-hook-form';

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
  value,
}) => {
  const { isLoading, uploadImage } = useUpload(onChange, folder);
  return (
    <div className={cn(styles.field, styles.uploadField)} style={style}>
      <p className={styles.label}>{placeholder}</p>
      <div className={styles.uploadFlex}>
        <div className={styles.inputContainer}>
          <div>
            <p>Select an image</p>
          </div>
          <label>
            <input
              type={'file'}
              onChange={uploadImage}
              accept="image/png, image/svg,image/gif, image/jpeg,image/webp,"
            />
            {error && <div className={styles.error}>{error.message}</div>}
          </label>
        </div>
        {!isNoImage && (
          <div className={styles.uploadImageContainer}>
            {isLoading ? (
              <p>loading</p>
            ) : (
              value && (
                <Image alt={' '} src={value} layout={'fill'} unoptimized />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadField;
