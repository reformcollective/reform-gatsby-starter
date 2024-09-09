/**
 * usage aliases for graphql types from contentful
 */

export type BlogCard =
	Queries.BlogPageQuery["allContentfulPageBlogPost"]["nodes"][number]
export type BlogPost = NonNullable<
	Queries.BlogPostQuery["contentfulPageBlogPost"]
>
export type Author = NonNullable<
	NonNullable<Queries.BlogPostQuery["contentfulPageBlogPost"]>["author"]
>

export type BlogPostCard = NonNullable<
	Queries.BlogHubQuery["allContentfulBlogPost"]["nodes"][number]
>

export type BlogPostContent = NonNullable<
	Queries.SingleBlogPostQuery["contentfulBlogPost"]
>

export type BlogHubQuery = Queries.BlogHubQuery
