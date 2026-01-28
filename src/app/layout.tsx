import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EML Admin Panel",
  description: "Event Merchandising Limited - Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">{children}</body>
    </html>
  );
}
