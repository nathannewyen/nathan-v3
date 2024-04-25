import { ReactNode } from "react";
import type { Metadata } from "next";
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyle from '@/styles/GlobalStyle';

export const metadata: Metadata = {
  title: "Nhan Nguyen",
  description: "This is a Next.js project developed by Nhan Nguyen. It showcases proficiency in JavaScript, TypeScript, React, and npm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <html>
        <body>
            <GlobalStyle />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
  );
}

