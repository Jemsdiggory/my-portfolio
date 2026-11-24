const MEDIUM_PROFILE = "https://medium.com/@jemsdiggory"
const MEDIUM_FEED = "https://medium.com/feed/@jemsdiggory"

function decodeXml(value = "") {
  return value
    .replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/i, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/gi, " ")
    .replace(/&ndash;/gi, "–")
    .replace(/&mdash;/gi, "—")
    .replace(/&hellip;/gi, "…")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
}

function field(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"))
  return match ? decodeXml(match[1].trim()) : ""
}

function makeExcerpt(encoded) {
  const text = decodeXml(encoded)
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}…` : text
}

export function parseMediumFeed(xml) {
  const items = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].map(([, item]) => {
    const encoded = field(item, "content:encoded") || field(item, "description")
    const image = encoded.match(/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/i)?.[1] || ""
    const pubDate = field(item, "pubDate")
    const date = new Date(pubDate)
    const categories = [...item.matchAll(/<category\b[^>]*>([\s\S]*?)<\/category>/gi)]
      .map(([, category]) => decodeXml(category.trim()))
      .filter(Boolean)
      .slice(0, 3)
    return {
      title: field(item, "title"),
      link: field(item, "link"),
      date: Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }),
      categories,
      image: decodeXml(image),
      excerpt: makeExcerpt(encoded),
      timestamp: Number.isNaN(date.getTime()) ? 0 : date.getTime(),
    }
  }).filter((item) => item.title && item.link)

  return items.sort((a, b) => b.timestamp - a.timestamp).slice(0, 6)
}

export async function getMediumPosts() {
  try {
    const response = await fetch(MEDIUM_FEED, { next: { revalidate: 3600 } })
    if (!response.ok) return []
    const xml = await response.text()
    if (!/<item\b/i.test(xml)) return []
    return parseMediumFeed(xml)
  } catch {
    return []
  }
}

export { MEDIUM_PROFILE }
