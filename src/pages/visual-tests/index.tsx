import { type PageProps, graphql } from "gatsby"
import UniversalLink from "library/Loader/UniversalLink"

const VisualTestsPage = ({ data }: PageProps<Queries.VisualTestsQuery>) => {
	const pages = data.allSitePage.nodes.filter(
		(page) =>
			page.path.startsWith("/visual-tests/") && page.path !== "/visual-tests/",
	)

	return (
		<div>
			<h1>Visual Tests</h1>
			<ul>
				{pages.map((page) => (
					<li key={page.path}>
						<UniversalLink to={page.path}>{page.path}</UniversalLink>
					</li>
				))}
			</ul>
			<UniversalLink to="/">go home</UniversalLink>
		</div>
	)
}

export const query = graphql`
	query VisualTests {
		allSitePage {
			nodes {
				path
			}
		}
	}
`

export default VisualTestsPage
