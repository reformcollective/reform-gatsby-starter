import { config as dotEnvConfig } from "dotenv"
import type { GatsbyConfig } from "gatsby"

dotEnvConfig()

const config: GatsbyConfig = {
  jsxRuntime: "automatic",
  // TODO add proper metadata
  siteMetadata: {
    title: "Reform Starter",
    description: "A starter for Gatsby",
    siteUrl: "https://www.yourdomain.tld",
    image: "https://example.com/logo.png",
  },
  graphqlTypegen: {
    generateOnBuild: true,
    typesOutputPath: "./src/types/gatsby-types.d.ts",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["webp"],
          placeholder: "blurred",
          quality: 90,
        },
      },
    },
    // TODO setup a contentful space
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //   },
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Reform Starter", // TODO add name
        short_name: "Reform", // TODO add short name
        start_url: "/",
        background_color: "#ffffff", // TODO add theme color
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "./src/images/global/icon.png", // TODO add favicon
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images",
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            "removeViewBox",
            "removeDimensions",
            "removeRasterImages",
            "reusePaths",
            "removeUselessDefs",
            {
              name: "cleanupIDs",
              active: false,
            },
            {
              name: "prefixIds",
              active: false,
            },
            {
              name: "collapseGroups",
              active: false,
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-tsconfig-paths",
      options: {
        configFile: "./tsconfig.json",
        silent: true,
      },
    },
    "gatsby-plugin-styled-components",
  ],
}

export default config
