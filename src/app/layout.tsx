import type { Metadata } from "next";
import { ThemeScript } from "@/components/ThemeScript";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filophant — The Unstoppable macOS File Manager",
  description:
    "The first open-source macOS file manager with an unstoppable copy engine, persistent folder memory, and a JS-based plugin system. Finder stops when a file is busy. Filophant keeps stomping.",
  keywords: [
    "macOS file manager",
    "Finder alternative",
    "open source file manager",
    "dual pane file manager",
    "file copy engine",
    "Filophant",
  ],
  openGraph: {
    title: "Filophant — The Unstoppable macOS File Manager",
    description:
      "The first open-source macOS file manager with an unstoppable copy engine, persistent folder memory, and a JS-based plugin system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
