import Seo from "components/Seo"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import UniversalLink from "library/Loader/UniversalLink"

import { Filler } from "./404"

export default function IndexPage({
	data,
}: PageProps<Queries.SitePluginsHomeQuery>) {
	const { edges: pluginList } = data.allSitePlugin

	return (
		<>
			<Filler id="stick-header">
				<h1>Welcome to Your Gatsby Site</h1>
				<p>This section has a sticky header</p>
				<br />
				<UniversalLink transition="fade" to="/page-2/">
					Fade to page 2
				</UniversalLink>
				<br />
				<UniversalLink transition="slide" to="/page-2/">
					Slide to page 2
				</UniversalLink>
				<br />
				<UniversalLink transition="slide" to="/three/">
					Slide to three scene starter
				</UniversalLink>
				<br />
				<UniversalLink transition="instant" to="/visual-tests/">
					visual tests
				</UniversalLink>
				<br />
				<UniversalLink transition="fade" to="/blog/">
					Blog
				</UniversalLink>
			</Filler>
			<Filler>
				<h1>Please enjoy the following template pages:</h1> <br />
				{pluginList.map(({ node }) => (
					<UniversalLink transition="fade" to={`/${node.id}`} key={node.id}>
						{node.name}
						<br />
					</UniversalLink>
				))}
			</Filler>
		</>
	)
}

export function Head() {
	return <Seo title="Home" description="This is the homepage!" pathname="/" />
}

export const query = graphql`
	query SitePluginsHome {
		allSitePlugin {
			edges {
				node {
					id
					name
				}
			}
		}
	}
`
