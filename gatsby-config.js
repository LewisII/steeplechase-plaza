module.exports = {
  siteMetadata: {
    title: `SteepleChase Plaza`,
    description: `Shopping mall located at 435S Church St, St Peters, MO 63376`,
    meta: `charSet="utf-8"`,
    meta: `name="twitter:card" content="Simple Solution for quick access and info for bussinesses and events at SteepleChase Plaza 435S Church St, St Peters, MO 63376"`,
    meta: `name="robots" content="noindex, nofollow"`,
    link: `rel="canonical" href="https://www.steeplechaseplaza.com/"`,
    author: `@Lewis_Amos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/steepleChasePlaza_Logo.png`,
      },
    },
    "gatsby-plugin-root-import",
  ],
}
