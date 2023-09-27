import { FC } from 'react';
import { IMessage } from '@/shared/interfaces/chat.interface';
import AvatarContainer from '@/shared/ui/AvatarContainer/AvatarContainer';

const Message: FC<IMessage> = ({ content, date, sender, isOwnMessage }) => {
  return (
    <div>
      <div>
        <div>{content.text}</div>
        <div>
          <p>{date.toString()}</p>
        </div>
      </div>
      <AvatarContainer image_url={sender.photo_url} alt={sender.first_name} />
    </div>
  );
};

export default Message;
