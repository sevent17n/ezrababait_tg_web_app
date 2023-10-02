"use client";
import TelegramLoginButton, {
  TelegramUser
} from "@v9v/ts-react-telegram-login";
import { useRouter } from "next/navigation";
import { useActions } from "@/src/shared/hooks/use-actions/hook";
const AuthPage = () => {
  const { login } = useActions();
  const router = useRouter();
  const handleTelegramResponse = async (user: TelegramUser) => {
    login(user);
    router.push("/");
  };
  return (
    <main>
      <div className={"mt-4"}>
        <TelegramLoginButton
          dataOnAuth={handleTelegramResponse}
          botName="test_nikitasdev_bot"
          cornerRadius={8}
          lang={"en"}
          buttonSize={"large"}
        />
      </div>
    </main>
  );
};

export default AuthPage;
