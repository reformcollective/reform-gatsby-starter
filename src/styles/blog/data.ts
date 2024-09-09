import { ReactComponent as PlaceholderSVG } from "images/blog/icons/placeholder.svg"
import { blogTextStyles as tempTextStyles } from "./text"

/**
 * This file is the "source of truth" for the blog's colors, textStyles, gradient, icons, images, and text.
 * It is used to keep the blog's design consistent with the rest of the project.
 * Make any necessary changes to this file to match the new project's design.
 *
 * There are TODOs in several other files relating to the Blog including:
 * 		pages/blog/index.tsx
 * 		pages/blog/{contentfulPageBlogPost.slug}.tsx
 * 		components/blog/RichComponents.tsx
 * 		components/blog/EmailInput.tsx
 * 		components/blog/HubHeader.tsx
 *
 * Make sure to update those files as well.
 */

const blogConfig = {
	// TODO: Make any changes to the colors and gradient according to the new project's design.
	projectColors: {
		// Campfire Template colors
		neutralBlack: "#1B1F1C",
		neutral900: "#424242",
		neutral800: "#5C5C5C",
		neutral700: "#959393",
		neutral600: "#AEADAD",
		neutral500: "#C7C7C7",
		neutral400: "#E0E0E0",
		neutral300: "#EBEBEB",
		neutral200: "#F2F2F2",
		neutral100: "#FAFAFA",
		neutralWhite: "#FFFFFF",

		primary700: "#1A7A0C",
		primary600: "#2CA90A",
		primary500: "#32CB08",
		primary400: "#37EB05",
		primary300: "#72FA4C",
		primary200: "#A8FC92",
		primary100: "#D0FDC4",

		// Aerodome Template colors
		red01: "#FF212B",
		red01_24: "#FF212B24",
		green01: "#00E146",
		blue01: "#0087FF",
		blue02: "#0045D0",
		white: "#FFF",
		grey01: "#F2F4F8",
		grey02: "#DDE2EC",
		grey03: "#8E9494",
		grey04: "#464F51",
		charcoal: "#252627",
		black: "#151515",
	},
	projectGradients: {
		// Campfire Template gradients
		primarySecondary: "linear-gradient(39deg, #1B1F1C 4.74%, #1B1F1C 94.17%)",
	},
	// TODO: Map these text styles to the new project's text styles.
	projectTextStyles: {
		// Campfire Template text styles
		hubT: tempTextStyles.hubT,
		h5: tempTextStyles.h5,
		h6: tempTextStyles.h6,
		sh1: tempTextStyles.sh1,
		sh2: tempTextStyles.sh2,
		sh3: tempTextStyles.sh3,
		sh4: tempTextStyles.sh4,
		t2: tempTextStyles.t2,
		t3: tempTextStyles.t3,
		bodyXL: tempTextStyles.bodyXL,
		bodyL: tempTextStyles.bodyL,
		bodyR: tempTextStyles.bodyR,
		bodyS: tempTextStyles.bodyS,
		bodyXS: tempTextStyles.bodyXS,

		// Aerodome Template text styles
		kick: tempTextStyles.kick,
		kicker1: tempTextStyles.kicker1,
		kicker2: tempTextStyles.kicker2,
		kicker3: tempTextStyles.kicker3,
		kicker4: tempTextStyles.kicker4,
		button4: tempTextStyles.button4,
		button5: tempTextStyles.button5,
		blogH1: tempTextStyles.blogH1,
		blogH2: tempTextStyles.blogH2,
		blogH2Alt: tempTextStyles.blogH2Alt,
		blogH3: tempTextStyles.blogH3,
		blogH4: tempTextStyles.blogH4,
		blogQuote: tempTextStyles.blogQuote,
		body1: tempTextStyles.body1,
		body2: tempTextStyles.body2,
		body3: tempTextStyles.body3,
		h3: tempTextStyles.h3,
		h7: tempTextStyles.h7,
		h8: tempTextStyles.h8,
	},
	// TODO: Fill in these values with any project-specific text or images.
	emailSubmitIcon: PlaceholderSVG,
	emailSuccessIcon: PlaceholderSVG,
	categoriesIcon: PlaceholderSVG,
	emailMessage: "Get our stories right to your inbox.",
	emailSuccessMessage: "Thanks for subscribing!",
	emailInputPlaceholder: "Your Email",
	searchInputPlaceholder: "Search the blog...",
	hubHeaderTitle: "Title",
	hubHeaderSubtitle: "Subtitle",
	hubHeaderDescription: "Description",
}

export default blogConfig
