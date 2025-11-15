import "./globals.css";
import Navbar from "../components/Navbar";
import type { ReactNode } from "react";

export const metadata = {
  title: "Sahil • Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
