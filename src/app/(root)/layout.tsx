import React from "react";
import type { Metadata } from "next";
import App from "@/components/shared/app/App";

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
};

export default RootLayout;
