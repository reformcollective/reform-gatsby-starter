module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Providers.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        prettier: true,
        svgo: true,
        memo: true,
        ref: true,
        svgoConfig: {
          plugins: [
            {
              name: "removeViewBox",
              active: false,
            },
            {
              name: "removeDimensions",
              active: true,
            },
            {
              name: "removeRasterImages",
              active: true,
            },
            {
              name: "reusePaths",
              active: true,
            },
            {
              name: "cleanupIDs",
              active: false,
            },
            {
              name: "prefixIds",
              active: false,
            },
            {
              name: "removeUselessDefs",
              active: true,
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        src: path.join(__dirname, "src"),
        styles: path.join(__dirname, "src/assets/styles"),
        pages: path.join(__dirname, "src/pages"),
        fonts: path.join(__dirname, "src/assets/fonts"),
        hooks: path.join(__dirname, "src/utils/hooks"),
        images: path.join(__dirname, "src/assets/images"),
        assets: path.join(__dirname, "src/assets"),
        sections: path.join(__dirname, "src/sections"),
        types: path.join(__dirname, "src/types"),
        templates: path.join(__dirname, "src/templates"),
        forms: path.join(__dirname, "src/components/forms"),
        buttons: path.join(__dirname, "src/components/buttons"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RRE Ventures`,
        short_name: `rre`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: path.join(__dirname, "src/assets/images/global/logoMark.svg"),
      },
    },
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
