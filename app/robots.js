export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jemsprojects.vercel.app/sitemap.xml",
  }
}