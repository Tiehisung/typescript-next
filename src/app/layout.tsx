"use client";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import AuthProvider from "@/context/auth-provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car hub",
  description: "Discover the best cars in the world",
};
interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
