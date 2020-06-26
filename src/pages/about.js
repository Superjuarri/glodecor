import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"

import { GlobalStyle } from "../styles/GlobalStyle"

import Img from "gatsby-image"

import Confetti from "../components/Confetti"

// import WhoAmIBlob from "../images/blobs/WhoAmIBlob.svg"
// import InfoSvgSrc from "../images/icons/info.svg"
// import MailSvgSrc from "../images/icons/mail.svg"
// import PhoneSvgSrc from "../images/icons/phone.svg"

import { Layout } from "../components/Layout"
import { Content } from "../components/Content"

const minWidth = "900px"

const Wrapper = styled.div`
  position: relative;

  height: inherit;
  background-color: var(--light-biege);
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  position: relative;
  margin: 0 auto;

  width: var(--width);
  max-width: var(--max-width);

  margin-top: 15%;

  @media (min-width: ${minWidth}) {
    margin-top: unset;

    min-height: calc(100vh - 100px);

    display: grid;
    gap: 5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right";

    align-items: center;

    div:nth-child(1) {
      grid-area: left;
    }
    div:nth-child(2) {
      grid-area: right;
    }
  }
`

const ContentWrapper = styled(motion.div)`
  margin: 7.5rem 0 9rem;

  @media (min-width: ${minWidth}) {
  }
`

const ImgContainer = styled(motion.div)`
  display: block;
  margin: 0 auto;

  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
`

const StyledImg = styled(Img)`
  border-radius: 0.5rem;

  align-self: center;

  height: 100%;

  box-shadow: var(--shadow);
`

const Link = styled(GatsbyLink)`
  position: relative;
  z-index: 3;

  width: 100%;
  margin-top: 2rem;
  padding: 1.75rem;
  text-decoration: none;

  background: var(--pink);
  color: var(--light-biege);
  font-weight: bold;

  display: flex;
  justify-content: center;

  border-radius: 0.5em;

  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: var(--light-pink);
  }

  @media (min-width: ${minWidth}) {
    width: 12em;
    padding: 1em 2em;
  }
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "behindTruck.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Wrapper>
          <Confetti />

          <Container>
            <ImgContainer
              initial={{ x: "-50vw", opacity: 0 }}
              animate={{ x: ["-50vw", "0vw"], opacity: [0, 1] }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
            >
              <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
            </ImgContainer>
            <ContentWrapper
              transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
            >
              <Content
                heading="Alma Cerda"
                span="Who Am I?"
                link={<Link to="/consultation">Free Consultation</Link>}
              >
                <p>
                  A certifide balloon artist, behind Glodécor’s success. I am an
                  expert in bringing your vision into air or helium filled
                  masterpieces while working within your budget.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <a
                    style={{ color: "var(--gray)", textDecoration: "none" }}
                    href="tel:+7517235656"
                  >
                    (751) 723-5656
                  </a>
                  <a
                    style={{ color: "var(--gray)", textDecoration: "none" }}
                    href="mailto:almathereza@gmail.com"
                  >
                    almathereza@gmail.com
                  </a>
                </div>
              </Content>
            </ContentWrapper>
          </Container>
        </Wrapper>
      </Layout>
    </>
  )
}

export default AboutPage
