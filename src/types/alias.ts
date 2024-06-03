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
