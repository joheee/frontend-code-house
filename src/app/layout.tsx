import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashGrotesk = localFont({
  src: "./fonts/ClashGrotesk-Variable.ttf",
  variable: "--font-clash-grotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Code House",
  description: "Landing page software house company named Code House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
