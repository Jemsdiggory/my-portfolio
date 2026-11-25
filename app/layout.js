import "./globals.css"
import MusicPlayer from "./components/MusicPlayer"

export const metadata = {
  metadataBase: new URL("https://jemsprojects.vercel.app/"),
  title: {
    default: "Kahlaa Aulia Jemima | Game Developer & Design Engineer",
    template: "%s | Kahlaa Aulia Jemima",
  },
  description: "Game Developer specializing in Unity, gameplay programming, and game design in Indonesia, with a secondary focus on design engineering, frontend engineering, UX research, and design systems.",
  keywords: [
    "game developer Indonesia",
    "Unity developer",
    "gameplay programmer",
    "game designer",
    "Kahlaa Aulia Jemima",
    "Jemima portfolio",
    "design engineer",
    "frontend engineering",
    "UX research",
    "design systems",
    "Polimedia Jakarta",
  ],
  authors: [{ name: "Kahlaa Aulia Jemima" }],
  creator: "Kahlaa Aulia Jemima",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jemsprojects.vercel.app/",
    siteName: "jemsprojects",
    title: "Kahlaa Aulia Jemima | Game Developer & Design Engineer",
    description: "Game Developer specializing in Unity, gameplay programming, and game design in Indonesia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahlaa Aulia Jemima | Game Developer & Design Engineer",
    description: "Game Developer specializing in Unity, gameplay programming, and game design in Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('jems-theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}})()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className="relative overflow-x-hidden">
        <MusicPlayer />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
