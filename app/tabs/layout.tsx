import type { Metadata } from "next";
import { ReactNode } from "react";
import { Provider } from "@/src/app/provider";
import NextTopLoader from "nextjs-toploader";
import { getFonts } from "@/src/app/fonts";
import { Layout } from "@/src/widgets/layout";
import { Wrapper } from "@/src/shared/containers/root-wrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function TabsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={getFonts()}>
        <NextTopLoader color={"#7C69F4"} />
        <Provider>
          <Wrapper>{children}</Wrapper>
          <Layout />
        </Provider>
      </body>
    </html>
  );
}
