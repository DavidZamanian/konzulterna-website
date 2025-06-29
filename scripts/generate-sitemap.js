import fs from 'fs'
import path from 'path'

const baseUrl = 'https://davidzamanian.github.io/konzulterna-website'

const pages = [
  {
    url: '',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    url: '/integritetspolicy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: '0.5',
  },
]

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  const publicDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
  console.log('Sitemap generated successfully!')
}

generateSitemap()
