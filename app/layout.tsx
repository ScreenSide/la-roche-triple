import type { Metadata } from "next";
import "./globals.css";

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
    </html>
  );
}
