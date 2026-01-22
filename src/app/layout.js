import "./globals.css"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        

        {/* website content */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  )
}
