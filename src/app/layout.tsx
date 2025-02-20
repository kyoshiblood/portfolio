import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./css/globals.css";

export const metadata: Metadata = {
  title: "Fernando Rocha",
  description: "...",
};

const fontInter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-600 max-w-[1240px] mx-auto ${fontInter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
