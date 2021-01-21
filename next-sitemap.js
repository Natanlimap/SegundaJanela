module.exports = {
    siteUrl: 'https://segundajanela.com.br/',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: [],
    // Default transformation function
    transform: (config, path) => {
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    },
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://segundajanela.com.br/sobre',
        'https://segundajanela.com.br/meiodocaminho',
        'https://segundajanela.com.br/contato',
      ],
    },
  }