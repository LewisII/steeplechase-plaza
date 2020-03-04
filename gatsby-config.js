module.exports = {
  siteMetadata: {
    title: `SteepleChase Plaza`,
    description: `Shopping mall located at 435S Church St, St Peters, MO 63376`,
    meta: `charSet="utf-8"`,
    meta: `name="twitter:card" content="Centuaries old gathering place to watch the race, join us at SteepleChase"`,
    meta: `name="robots" content="noindex, nofollow"`,
    link: `rel="canonical" href="https://www.steeplechaseplaza.com/"`,
    meta: `name="viewport" content="width=device-width, initial-scale=1"`,
    author: `@Lewis_Amos`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      //images for qraph ql queries
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      //blog posts for querying with graphql
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_posts/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `steeple-chase-plaza`,
        short_name: `steeplechase`,
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
