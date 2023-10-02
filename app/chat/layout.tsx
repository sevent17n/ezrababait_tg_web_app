import { ReactNode } from "react";
import { getFonts } from "@/src/app/fonts";
import NextTopLoader from "nextjs-toploader";
import { Provider } from "@/src/app/provider";
import { Layout } from "@/src/widgets/layout";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={getFonts()}>
        <NextTopLoader color={"#7C69F4"} />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
