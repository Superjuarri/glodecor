import React from "react"

import logoSrc from "../../../images/glodecorLogo.svg"
import facebookIconSrc from "../../../images/icons/facebookIcon.svg"

import { Wrapper, Nav, Link, A } from "./styles"

const Footer = () => {
  return (
    <Wrapper>
      <img src={logoSrc} width="75px" />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/consultation">Consultation</Link>
      </Nav>
      <a href="https://www.facebook.com/glodecorcba/">
        <img src={facebookIconSrc} />
      </a>
      <A href="tel:+19512010592">1-951-201-0592</A>
      <A href="mailto:almathereza@gmail.com">almathereza@gmail.com</A>
    </Wrapper>
  )
}

export { Footer }
