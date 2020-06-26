import React from "react"

import { GlobalStyle } from "../styles/GlobalStyle"

import { Layout } from "../components/Layout"
import { Header } from "../components/Sections/Header"
import { OurGoal } from "../components/Sections/OurGoal"
import { Events } from "../components/Sections/Events"
import { Party } from "../components/Sections/Party"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <OurGoal />
        <Events />
        <Party />
      </Layout>
    </>
  )
}

export default IndexPage
