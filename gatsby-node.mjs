import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

export const onPreBootstrap = (helpers) => {
	globalThis.helpers = helpers
}

export const onCreateNode = ({ node, actions }) => {
	if (node.internal.type === "ContentfulUnifiedTemplateBlogArticle") {
		const { createNodeField } = actions

		// doing this on the client leads to bundle bloat! so do it on the server instead
		const plainText = documentToPlainTextString(
			JSON.parse(node.articleText.raw),
		)
		const date = new Date(node.publishDate ?? node.createdAt ?? new Date())

		// Add a new field to the node with the new value
		createNodeField({
			node,
			name: "textPreview",
			value:
				plainText
					?.toString()
					// only keep first 200 characters
					.slice(0, 200) ?? "",
		})
		createNodeField({
			node,
			name: "calculatedDate",
			value: date.toString(),
		})
	}
}
