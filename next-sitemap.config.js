/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://biomech.dev',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
