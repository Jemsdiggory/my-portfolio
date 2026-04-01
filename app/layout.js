import "./globals.css"
import MusicPlayer from "./components/MusicPlayer"

export const metadata = {
  metadataBase: new URL("https://jemsprojects.vercel.app/"), 
  title: {
    default: "Kahlaa Aulia Jemima — Game & Web Developer",
    template: "%s | Kahlaa Aulia Jemima",
  },
  description:
    "Portfolio of Kahlaa Aulia Jemima — Game Technology student at Polimedia Jakarta. Unity programmer, game developer, and  web developer.",
  keywords: [
    "Kahlaa Aulia Jemima",
    "Jemima portfolio",
    "game developer Indonesia",
    "Unity developer",
    "web developer Indonesia",
    "Polimedia Jakarta",
    "web developer intern",
  ],
  authors: [{ name: "Kahlaa Aulia Jemima" }],
  creator: "Kahlaa Aulia Jemima",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jemsprojects.vercel.app/",
    siteName: "jemsprojects",
    title: "Kahlaa Aulia Jemima — Game & Web Developer",
    description:
      "Portfolio of Kahlaa Aulia Jemima — Unity programmer, game developer, and front-end web developer based in Jakarta.",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahlaa Aulia Jemima — Game & Web Developer",
    description: "Unity programmer, game developer, and front-end web developer based in Jakarta.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative overflow-x-hidden">
        <MusicPlayer />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}