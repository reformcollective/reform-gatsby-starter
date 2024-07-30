import { config as dotEnvConfig } from "dotenv"
import type { GatsbyConfig } from "gatsby"
import adapter from "gatsby-adapter-netlify"

dotEnvConfig()

if (!process.env.NETLIFY) {
	console.warn(
		"gatsby-config depends on NETLIFY environment variables, which are not present.",
	)
}

const siteURL = process.env.DEPLOY_PRIME_URL ?? "http://localhost:8000"

const config: GatsbyConfig = {
	jsxRuntime: "automatic",
	siteMetadata: {
		/**
		 * this is the default page title when none is provided
		 */
		title: "Reform Starter", // TODO add title
		/**
		 * this is the search engine description when none is provided
		 */
		description: "A starter for Gatsby", // TODO add description
		/**
		 * this is the base URL of the site. do not include a trailing slash
		 */
		siteUrl: siteURL,
		/**
		 * this is the default og image when none other is provided
		 * uses netlify's env variable to get the base URL
		 * it must be a complete URL (e.g. https://example.com/image.jpg)
		 */
		image: `${siteURL}/graph.jpg`,
	},
	graphqlTypegen: {
		generateOnBuild: true,
		typesOutputPath: "./src/types/gatsby-types.d.ts",
	},
	adapter: adapter(),
	plugins: [
		"gatsby-plugin-pnpm-gatsby-5",
		"gatsby-plugin-sitemap",
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
		/**
		 * TODO setup a contentful space
		 * The current space is only for the blog template and should be replaced
		 */
		{
			resolve: "gatsby-source-contentful",
			options: {
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Reform Starter", // TODO add name
				short_name: "Reform", // TODO add short name
				start_url: "/",
				background_color: "#ffffff", // TODO add theme color
				theme_color: "#ffffff",
				display: "browser",
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
		// TODO data folder, if needed
		// {
		// 	resolve: "gatsby-source-filesystem",
		// 	options: {
		// 		name: "data",
		// 		path: "./src/data",
		// 	},
		// },
		{
			resolve: "gatsby-plugin-svgr",
			options: {
				prettier: true,
				svgo: true,
			},
		},
		{
			resolve: "gatsby-plugin-tsconfig-paths",
			options: {
				configFile: "./tsconfig.json",
				silent: true,
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: siteURL,
				sitemap: `${siteURL}/sitemap-0.xml`,
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		"gatsby-plugin-styled-components",
		"gatsby-transformer-json",
		"gatsby-plugin-social-cards",
	],
}

export default config
