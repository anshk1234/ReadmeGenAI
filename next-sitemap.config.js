// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://readmegen-ai.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async () => [
    {
      loc: "/",
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/features",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/examples",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/docs",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/generate",
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
  ],
};
