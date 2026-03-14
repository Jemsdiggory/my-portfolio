import "./globals.css"

export const metadata = {
  title: "J. Universe — Kahlaa Aulia Jemima",
  description: "Portfolio of Kahlaa Aulia Jemima — Game Developer & Front-End Developer",
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
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}