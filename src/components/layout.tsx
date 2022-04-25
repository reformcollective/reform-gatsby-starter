import React from "react"
import styled from "styled-components"
import media from "assets/styles/media"
import SEO from "components/seo"
import Header from "components/Header"
import Footer from "components/Footer"
import { ScreenContext } from "./Providers"
import colors from "styles/colors"
import { ReactComponent as RRELogoSVG } from "assets/images/global/RRELogoPlain.svg"
import { isBrowser } from "utils/functions"

export interface MenuItem {
  title: string
  slug: string
}

export type Menu = MenuItem[]

interface props {
  children: React.ReactNode
  title?: string
  noFooter?: boolean
  menu?: Menu
}

const Layout: React.FC<props> = ({ children, title, noFooter, menu }) => {
  


  
        <>
         
          <SEO title={title ? title : undefined} />
          
          <Header menu={menu} />
       
          <Main noFooter={noFooter}>{children}</Main>
        
           <Footer />
        </>
  

export default Layout



const Main = styled.main<{ noFooter?: boolean }>`
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  will-change: transform;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 2;
`
