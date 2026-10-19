import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyChat",
  description: "A simple, private space for better conversations.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
