import React, { useState } from "react"
import { Link } from "gatsby"
import { animateScroll } from "react-scroll"

import { Hamburger } from "./Hamburger"
import { Nav } from "./Nav"

import { Wrapper, Container } from "./styles"

import glodecorLogoSrc from "../../../images/glodecorLogo.svg"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img
            src={glodecorLogoSrc}
            onClick={() => animateScroll.scrollToTop()}
            width="65"
          />
        </Link>

        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
      </Container>
    </Wrapper>
  )
}

export { Navbar }
