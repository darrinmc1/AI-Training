import { siteConfig } from "@/lib/site-config"
import { ALL_MODULES } from "@/data/modules"
import { ALL_TOOLS } from "@/data/tools"
import { ALL_UPDATES } from "@/data/updates"

export default function sitemap() {
  const base = `https://${siteConfig.domain}`

  const staticPages = [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/lessons`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/tools`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/updates`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/pricing`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), priority: 0.3 },
  ]

  const lessonPages = ALL_MODULES.map((mod) => ({
    url: `${base}/lessons/${mod.id}`,
    lastModified: new Date(mod.lastUpdated),
    priority: 0.8,
  }))

  const toolPages = ALL_TOOLS.map((tool) => ({
    url: `${base}/tools/${tool.id}`,
    lastModified: new Date(tool.dateAdded),
    priority: 0.7,
  }))

  const updatePages = ALL_UPDATES.map((update) => ({
    url: `${base}/updates/${update.id}`,
    lastModified: new Date(update.date),
    priority: 0.7,
  }))

  return [...staticPages, ...lessonPages, ...toolPages, ...updatePages]
}
