import type { Metadata } from "next"
import "./globals.css"
import Menu from "@/components/menu"

export const metadata: Metadata = {
  title: "LaslesVPN",
  description: "Want anything to be easy with Lasles VPN",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  )
}
