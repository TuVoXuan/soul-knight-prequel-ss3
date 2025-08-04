import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soul Knight Prequel",
  description: "A clone web page of the official Soul Knight Prequel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${roboto.className} antialiased 2xl:max-w-[1920px] 2xl:mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
