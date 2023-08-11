import "./globals.css";
import type { Metadata } from "next";
import { Henny_Penny, Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const hennyPenny = Henny_Penny({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Buzz Out",
  description: "An app just for fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hennyPenny.className}>
        <Navbar hennyPenny={hennyPenny} />
        {children}
      </body>
    </html>
  );
}
