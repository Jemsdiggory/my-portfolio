export default function sitemap() {
  const base = "https://jemsprojects.vercel.app/" // ganti dengan domain kamu

  const routes = [
    { url: base,                          lastModified: new Date(), priority: 1.0 },
    { url: `${base}/about`,               lastModified: new Date(), priority: 0.8 },
    { url: `${base}/projects`,            lastModified: new Date(), priority: 0.9 },
    { url: `${base}/projects/ciptadra`,   lastModified: new Date(), priority: 0.7 },
    { url: `${base}/projects/mall-management`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/projects/mini-cms`,   lastModified: new Date(), priority: 0.7 },
    { url: `${base}/projects/mlbb-vote`,  lastModified: new Date(), priority: 0.7 },
    { url: `${base}/projects/saku-aman`,  lastModified: new Date(), priority: 0.7 },
    { url: `${base}/gallery`,             lastModified: new Date(), priority: 0.6 },
    { url: `${base}/experience`,          lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contact`,             lastModified: new Date(), priority: 0.6 },
  ]

  return routes
}