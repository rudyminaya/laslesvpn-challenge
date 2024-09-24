import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lasles VPN",
  description: "Want anything to be easy with Lasles VPN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
