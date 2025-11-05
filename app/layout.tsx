import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "La Roche Triple",
  description:
    "La Roche Triple — brewed in the Ardennes with bold, timeless craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
      <GoogleAnalytics gaId="G-CFR25580NZ" />
    </html>
  );
}
