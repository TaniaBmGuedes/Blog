import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - This is my blog with  Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-pt">
      <body>{children}</body>
    </html>
  );
}
