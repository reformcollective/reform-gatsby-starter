const internal = {
	blog: "/blog",
} as const

const ourLinks = {} as const

const thirdPartyLinks = {} as const

const links = {
	...internal,
	...ourLinks,
	...thirdPartyLinks,
} as const

export default links
