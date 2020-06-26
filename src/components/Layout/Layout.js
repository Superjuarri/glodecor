import React from "react"
import styled from "styled-components"

import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

const Wrapper = styled.div`
  position: relative;

  display: flex;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  display: grid;
`

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  )
}

export { Layout }
