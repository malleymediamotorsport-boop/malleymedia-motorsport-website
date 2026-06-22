import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./ui/Footer";
import { Header } from "./ui/Header";

export const metadata: Metadata = {
  title: "MalleyMedia Motorsport",
  description:
    "Formula 1, IndyCar and junior single seater news, highlights and media coverage from MalleyMedia Motorsport."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
