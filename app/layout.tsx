import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ViDHEE Global Academy - Your Bridge to Global Excellence",
  description:
    "Specialized Education & Career Pathways between India and the UAE. Guiding students, educators, and professionals through education choices, career transitions, and global opportunities.",
  keywords:
    "education consultancy, UAE career pathways, India UAE education, study abroad, career counseling, professional training",
  openGraph: {
    title: "ViDHEE Global Academy - Your Bridge to Global Excellence",
    description: "Specialized Education & Career Pathways between India and the UAE",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/vidhee-fevicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/vidhee-fevicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/vidhee-fevicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
