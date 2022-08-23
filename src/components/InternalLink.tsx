import React from "react"

import { navigate } from "gatsby-link"

type InternalLinkProps = {
  children: React.ReactNode | React.ReactNode[]
  to: string
}

export default function InternalLink({ children, to }: InternalLinkProps) {
  const handleClick: React.MouseEventHandler = e => {
    e.nativeEvent.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  )
}
