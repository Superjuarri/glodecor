import React from "react"

import { Wrapper, Hr, Ul, Li, Link } from "./styles"

const Nav = ({ navOpen, setNavOpen }) => {
  return (
    <Wrapper navOpen={navOpen}>
      <Ul>
        <Li>
          <Link to="/" activeStyle={{ color: "var(--pink)" }}>
            Home
          </Link>
        </Li>
        <Hr />
        <Li>
          <Link to="/about" activeStyle={{ color: "var(--pink)" }}>
            About
          </Link>
        </Li>
        <Hr />
        <Li>
          <Link to="/gallery" activeStyle={{ color: "var(--pink)" }}>
            Gallery
          </Link>
        </Li>
        <Hr />
        <Li>
          <Link to="/consultation" activeStyle={{ color: "var(--pink)" }}>
            Consultation
          </Link>
        </Li>
      </Ul>
    </Wrapper>
  )
}

export { Nav }
