import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import "./globals.css"

export const metadata: Metadata = {
  title: "AL ROOHA - Global Export-Import Trading Company",
  description: "AL ROOHA is a multi-category export-import company dealing in food grains, textiles, chemicals, and specialty goods. Quality products delivered to global markets with reliability and compliance.",
  keywords: ["export", "import", "trading", "rice", "basmati", "textiles", "chemicals", "fertilizers", "India", "global trade"],
  authors: [{ name: "AL ROOHA PRIVATE LIMITED" }],
  openGraph: {
    title: "AL ROOHA - Global Export-Import Trading Company",
    description: "Multi-category export-import solutions for food, textiles, chemicals, and specialty goods",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
