import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Friend's Name",
  description:
    "Political science, technology, regulation and strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
