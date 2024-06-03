const routes = {
	blog: "/blog",
} as const

const socials = {} as const

const links = {
	todo: "https://www.google.com",
	...routes,
	...socials,
} as const

export default links
