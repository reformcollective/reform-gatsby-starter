import React from "react"

import styled from "styled-components"

import Layout from "components/Layout"
import SEO from "components/Seo"
import media from "styles/media"
import textStyles from "styles/text"
import { TransitionLink } from "utils/TransitionUtils"

export default function FourOhFour() {
  return (
    <Layout>
      <Filler>
        <h1>404: Not Found</h1>
        <br />
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <br />
        <TransitionLink transition="slide" to="/">
          Take me to the hompage!
        </TransitionLink>
      </Filler>
    </Layout>
  )
}

export const Filler = styled.div`
  ${textStyles.h1};
  min-height: 60vh;
  border-radius: 10px;
  background-color: #f0f0f0;
  margin: 100px;
  padding: 100px;
  text-align: center;

  ${media.tablet} {
    margin: 50px 40px;
    padding: 50px 40px;
  }
  ${media.mobile} {
    margin: 50px 20px;
    padding: 50px 20px;
  }
`

export function Head() {
  return (
    <SEO
      title="404: Not Found"
      description="This page could not be found."
      pathname="404"
    />
  )
}
