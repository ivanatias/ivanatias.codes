import { client } from '../sanity/client'

const BASE_URL = 'https://www.ivanatias.codes'

const DEFAULT_PATHS = [
  { path: '/', changefreq: 'daily', priority: 1 },
  { path: '/works', changefreq: 'weekly', priority: 0.5 },
  { path: '/blog', changefreq: 'weekly', priority: 0.8 }
]

const Sitemap = () => {
  return null
}

export async function getServerSideProps({ res }) {
  const blogPosts = await client.fetch(`
    *[ _type == "blog" ] | order(_createdAt desc) {
        slug
    }
 `)

  const works = await client.fetch(`
    *[ _type == "work" ] | order(_createdAt asc) {
        slug
    }
 `)

  const blogPaths = blogPosts.map((post) => ({
    path: `/blog/${post.slug.current}`,
    priority: 0.5
  }))

  const worksPaths = works.map((work) => ({
    path: `/works/${work.slug.current}`,
    priority: 0.2
  }))

  const allPaths = [...DEFAULT_PATHS, ...blogPaths, ...worksPaths]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map(({ path, priority, changefreq }) => {
          return `
            <url>
              <loc>${BASE_URL}${path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${changefreq || 'yearly'}</changefreq>
              <priority>${priority}</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap
