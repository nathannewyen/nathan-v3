import { ReactNode } from "react";
import type { Metadata } from "next";
import Head from 'next/head';
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyle from '@/styles/GlobalStyle';
import GradientCircle from "@components/GradientCircle/GradientCircle";

export const metadata: Metadata = {
  title: "Nhan Nguyen",
  description: "This is a Next.js project developed by Nhan Nguyen. It showcases proficiency in JavaScript, TypeScript, React, and npm.",
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://nathan-v3.vercel.app/',
        images: [
            {
                url: '/images/thumbnail.png',
                width: 800,
                height: 600,
                alt: 'Nhan Nguyen',
            },
        ],
    },
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
            <StyledComponentsRegistry>
                <GradientCircle />
                {children}
            </StyledComponentsRegistry>
        </body>
      </html>
  );
}

