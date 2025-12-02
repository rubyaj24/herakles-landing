export const generateSitemap = () => {
  const baseUrl = 'https://heraklesracingcet.ac.in';
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/team', priority: '0.8', changefreq: 'monthly' },
    { path: '/history', priority: '0.8', changefreq: 'monthly' },
    { path: '/news', priority: '0.9', changefreq: 'weekly' },
    { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
    { path: '/h-baja', priority: '0.8', changefreq: 'monthly' },
    { path: '/e-baja', priority: '0.8', changefreq: 'monthly' },
    { path: '/sponsors', priority: '0.6', changefreq: 'monthly' },
    { path: '/merchandise', priority: '0.5', changefreq: 'monthly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};