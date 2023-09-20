'use client';
import TelegramLoginButton, {
  TelegramUser,
} from '@v9v/ts-react-telegram-login';
import axios from 'axios';
import { useActions } from '@/shared/lib/hooks/useActions';
import { useCallback } from 'react';
const AuthPage = () => {
  const { login } = useActions();
  const handleTelegramResponse = async (user: TelegramUser) => {
    login(user);
  };
  return (
    <main>
      <div className={'mt-4'}>
        <TelegramLoginButton
          dataOnAuth={handleTelegramResponse}
          botName="test_nikitasdev_bot"
          cornerRadius={8}
          lang={'en'}
          buttonSize={'large'}
        />
      </div>
    </main>
  );
};

export default AuthPage;
