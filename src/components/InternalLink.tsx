import React, { useContext } from "react"
import { LoaderContext } from "./Providers"

type props = {
  children: React.ReactNode | React.ReactNode[]
  to: string
}

const InternalLink: React.FC<props> = ({ children, to }) => {
  const { setLoad } = useContext(LoaderContext)

  const handleClick: React.MouseEventHandler = e => {
    e.nativeEvent.preventDefault()
    setLoad(to)
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default InternalLink
