import { ImageResponse } from "next/og"

export const alt = "Kahlaa Aulia Jemima | Game Developer & Design Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, color: "white", background: "linear-gradient(135deg, #080810 0%, #181431 60%, #092126 100%)", fontFamily: "sans-serif" }}>
      <div style={{ color: "#67e8f9", fontSize: 24, letterSpacing: 10, marginBottom: 28 }}>PORTFOLIO / KJ</div>
      <div style={{ fontSize: 68, fontWeight: 700 }}>Kahlaa Aulia Jemima</div>
      <div style={{ color: "#c4b5fd", fontSize: 38, marginTop: 24 }}>Game Developer &amp; Design Engineer</div>
    </div>,
    size,
  )
}
