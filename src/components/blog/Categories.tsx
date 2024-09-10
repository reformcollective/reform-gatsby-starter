import { graphql, useStaticQuery } from "gatsby"
import UniversalLink from "library/Loader/UniversalLink"
import { useParamState } from "library/useParamState"
import styled from "styled-components"

export function Categories() {
	const [, setCategory] = useParamState("category")

	const categories: Queries.CategoriesQuery = useStaticQuery(graphql`
		query Categories {
			allContentfulUnifiedTemplateBlogArticle {
				items: distinct(field: { categories: SELECT })
			}
		}
	`)

	return (
		<Wrapper>
			<h1>Categories</h1>
			{categories.allContentfulUnifiedTemplateBlogArticle.items.map((item) => {
				return (
					<UniversalLink
						type="button"
						key={item}
						onClick={() => setCategory(item)}
					>
						{item}
					</UniversalLink>
				)
			})}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	gap: 8px;
`
