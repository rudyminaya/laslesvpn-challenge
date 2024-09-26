import type { Metadata } from "next"
import "./globals.css"
import Menu from "@/sections/menu"
import Footer from "@/sections/footer"

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
        <Footer />
      </body>
    </html>
  )
}
