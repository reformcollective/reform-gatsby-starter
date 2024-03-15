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
			<Filler>
				<h1>Welcome to Your Gatsby Site</h1>
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
					Slide to threejs scene starter
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
