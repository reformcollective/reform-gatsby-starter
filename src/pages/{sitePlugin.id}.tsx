import { graphql, HeadProps, PageProps } from "gatsby"
import { sleep } from "library/functions"
import { transitionAwaitPromise } from "library/Loader"
import UniversalLink from "library/Loader/UniversalLink"

import SEO from "components/Seo"

import { Filler } from "./404"

/**
 * as an example, this template page generates a page for each plugin
 * for reference see https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 */
export default function TemplateSample({
  data,
}: PageProps<Queries.SitePluginTemplateQuery>) {
  // simulate waiting for something to load
  if (Math.random() > 0.5) transitionAwaitPromise(sleep(1000))

  return (
    <>
      <Filler>
        <h1>Hello from the {data.sitePlugin?.name} page</h1>
        <br />
        <UniversalLink transition="fade" to="/">
          Go back to the homepage
        </UniversalLink>
      </Filler>
      <Filler>
        <h1>This page is entirely dedicated to {data.sitePlugin?.name}</h1>
      </Filler>
      <Filler>
        <h1>If you don&apos;t like {data.sitePlugin?.name} I will fight you</h1>
      </Filler>
    </>
  )
}

export function Head({ data }: HeadProps<Queries.SitePluginTemplateQuery>) {
  return (
    <SEO
      title={data.sitePlugin?.name}
      description="This template page is an example"
      pathname={`/${data.sitePlugin?.id ?? ""}`}
    />
  )
}

export const query = graphql`
  query SitePluginTemplate($id: String) {
    sitePlugin(id: { eq: $id }) {
      id
      name
    }
  }
`
