import React from "react"

import Layout from "components/Layout"
import SEO from "components/Seo"
import { UniversalLink } from "utils/TransitionUtils"

import { Filler } from "./404"

export default function SecondPage() {
  return (
    <Layout>
      <Filler>
        <h1>Hi from the second page</h1>
        <br />
        <UniversalLink transition="fade" to="/">
          Fade back to the homepage
        </UniversalLink>
        <br />
        <UniversalLink transition="slide" to="/">
          Slide back to the homepage
        </UniversalLink>
        <br />
        <UniversalLink transition="blue" to="/">
          Blue Transition back to the homepage
        </UniversalLink>
      </Filler>
      <Filler>
        <h1>Please enjoy your stay</h1>
      </Filler>
      <Filler>
        <h1>We hope you like this page</h1>
      </Filler>
    </Layout>
  )
}

export function Head() {
  return (
    <SEO
      title="Second Page"
      description="This is the second page of the site."
      pathname="page-2"
    />
  )
}
