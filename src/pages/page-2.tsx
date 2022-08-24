import React from "react"

import Layout from "components/Layout"
import SEO from "components/Seo"
import { TransitionLink } from "components/TransitionLink"
import { Filler } from "pages"

export default function SecondPage() {
  return (
    <Layout>
      <Filler>
        <h1>Hi from the second page</h1>
        <br />
        <TransitionLink transition="fade" to="/">
          Fade back to the homepage
        </TransitionLink>
        <br />
        <TransitionLink transition="slide" to="/">
          Slide back to the homepage
        </TransitionLink>
        <br />
        <TransitionLink transition="red" to="/">
          Red Transition back to the homepage
        </TransitionLink>
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
