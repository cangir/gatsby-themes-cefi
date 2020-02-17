require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Flex`,
    description: `A Gatsby theme with flexible blocks for your Markdown pages.`,
    siteUrl: process.env.SITE_URL,
    logo: `logo.png`,
    copyright: `© YYYY Tablex. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `Blocks`,
        path: `/blocks`,
      },
      {
        title: `Docs`,
        path: `/docs`,
      },
      {
        title: `Github`,
        path: `https://github.com/cangir/gatsby-themes/tree/master/themes/gatsby-theme-flex`,
      },
    ],
    footerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `Docs`,
        path: `/docs`,
      },
      {
        title: `Github`,
        path: `https://github.com/cangir/gatsby-themes`,
      },
    ],
  },
  plugins: [`gatsby-theme-tablex`],
}
