import type { GatsbyConfig } from "gatsby"
import path from "path"

const config: GatsbyConfig = {
  // TODO add metadata
  siteMetadata: {
    title: `Reform Starter`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // TODO setup a contentful space
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //   },
    // },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    // TODO setup manifest
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.resolve("src/components"),
        src: path.resolve("src"),
        styles: path.resolve("src/assets/styles"),
        pages: path.resolve("src/pages"),
        fonts: path.resolve("src/assets/fonts"),
        hooks: path.resolve("src/utils/hooks"),
        images: path.resolve("src/assets/images"),
        assets: path.resolve("src/assets"),
        sections: path.resolve("src/sections"),
        types: path.resolve("src/types"),
        templates: path.resolve("src/templates"),
        forms: path.resolve("src/components/forms"),
        buttons: path.resolve("src/components/buttons"),
        utils: path.resolve("src/utils"),
      },
    },
  ],
}

export default config

// import type { GatsbyConfig } from "gatsby"

// const config: GatsbyConfig = {
//     "gatsby-plugin-styled-components",
//     {
//       resolve: `gatsby-plugin-typescript`,
//       options: {
//         isTSX: true, // defaults to false
//         jsxPragma: `jsx`, // defaults to "React"
//         allExtensions: true, // defaults to false
//       },
//     },
//     {
//       resolve: `gatsby-plugin-layout`,
//       options: {
//         component: require.resolve(`./src/components/Providers.tsx`),
//       },
//     },
//     {
//       resolve: `gatsby-plugin-svgr`,
//       options: {
//         prettier: true,
//         svgo: true,
//         memo: true,
//         ref: true,
//         svgoConfig: {
//           plugins: [
//             {
//               name: "removeViewBox",
//               active: false,
//             },
//             {
//               name: "removeDimensions",
//               active: true,
//             },
//             {
//               name: "removeRasterImages",
//               active: true,
//             },
//             {
//               name: "reusePaths",
//               active: true,
//             },
//             {
//               name: "cleanupIDs",
//               active: false,
//             },
//             {
//               name: "prefixIds",
//               active: false,
//             },
//             {
//               name: "removeUselessDefs",
//               active: true,
//             },
//           ],
//         },
//       },
//     },
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `RRE Ventures`,
//         short_name: `rre`,
//         start_url: `/`,
//         background_color: `#000000`, //TODO set theme color
//         theme_color: `#000000`,
//         display: `minimal-ui`,
//         icon: "", //TODO set icon
//       },
//     },
//     {
//       resolve: `gatsby-plugin-tsconfig-paths`,
//       options: {
//         configFile: `${__dirname}/tsconfig.json`,
//         silent: true,
//       },
//     },
//     "gatsby-plugin-react-helmet",
//     "gatsby-plugin-sitemap",
//     "gatsby-plugin-netlify",
//     "gatsby-plugin-image",
//     `gatsby-plugin-sharp`,
//     `gatsby-transformer-sharp`,
//   ],
// }

// export default config
