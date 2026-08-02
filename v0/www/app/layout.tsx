import type { Metadata, Viewport } from "next"
import { Geist_Mono, Inter, Newsreader } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rj11.io"),
  title: {
    default: "Ricardo Jorge · AI Product Engineer",
    template: "%s · rj11.io",
  },
  description:
    "AI Product Engineer working hands-on with early-stage teams to turn ambitious ideas into polished, production-ready products.",
  applicationName: "rj11.io",
  authors: [{ name: "Ricardo Jorge", url: "https://www.rj11.io" }],
  creator: "Ricardo Jorge",
  publisher: "Ricardo Jorge",
  keywords: [
    "AI Product Engineer",
    "Product Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "AI Agents",
    "Data Visualisation",
    "Lisbon",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/static/icon1.png", sizes: "16x16", type: "image/png" },
      { url: "/static/icon2.png", sizes: "32x32", type: "image/png" },
      { url: "/static/icon3.png", sizes: "192x192", type: "image/png" },
      { url: "/static/icon4.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/static/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Ricardo Jorge · AI Product Engineer",
    description:
      "Hands-on AI product engineering for production AI systems, data-driven products, and polished TypeScript experiences.",
    siteName: "rj11.io",
    locale: "en_GB",
    firstName: "Ricardo",
    lastName: "Jorge",
    username: "rj11io",
    images: [
      {
        url: "/static/rj11io-favicon-style-orange-og-v3.png",
        width: 1200,
        height: 630,
        alt: "Ricardo Jorge · AI Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Jorge · AI Product Engineer",
    description:
      "Hands-on AI product engineering for production AI systems, data-driven products, and polished TypeScript experiences.",
    images: [
      {
        url: "/static/rj11io-favicon-style-orange-og-v3.png",
        width: 1200,
        height: 630,
        alt: "Ricardo Jorge · AI Product Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#171512" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        inter.variable,
        mono.variable,
        serif.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
