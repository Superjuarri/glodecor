import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"

import imgSrc from "../../../images/balloonsLarge.jpg"

import Img from "gatsby-image"

const minWidth = "900px"

const Wrapper = styled(motion.div)`
  overflow: hidden;
  height: 100%;

  position: relative;
  background: var(--light-biege);
`

const Container = styled.div`
  margin: 0 auto;

  width: var(--width);
  max-width: var(--max-width);

  @media (min-width: ${minWidth}) {
    display: grid;
    gap: 5rem;
    grid-template-columns: 5fr 5fr;

    div {
      align-items: center;
    }
  }
`

const Content = styled(motion.div)`
  padding: 7.5em 0;

  @media (min-width: ${minWidth}) {
    padding: 8em 0;
  }

  h1 {
    margin-top: 0;
    color: var(--pink);
    font-size: 2rem;

    @media (min-width: ${minWidth}) {
      font-size: 2.5rem;
    }

    span {
      font-size: 0.75em;
      color: var(--black);
    }
  }

  p {
    color: var(--gray);
    font-size: 1rem;
    line-height: 2em;
    text-align: justify;

    @media (min-width: ${minWidth}) {
      max-width: 475px;
    }
  }
`

const Buttons = styled(motion.div)`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  a:nth-child(2) {
    margin-top: 2.5rem;
    background-color: var(--biege);
    color: var(--gray);

    transition: background-color 0.2s ease-in-out;

    :hover {
      background-color: var(--light-biege);
    }

    @media (min-width: ${minWidth}) {
      margin-top: unset;
      margin-left: 2.5rem;
    }
  }

  @media (min-width: ${minWidth}) {
    flex-direction: row;
  }
`

const ImgWrapper = styled(motion.div)`
  * {
    height: 100%;
  }
`

const Button = styled(Link)`
  width: 100%;
  padding: 1.75rem;

  background: var(--pink);
  color: var(--light-biege);
  font-weight: bold;

  display: flex;
  justify-content: center;

  border-radius: 0.5em;
  text-decoration: none;

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

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.6,
    ease: easing,
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "balloonsLarge.jpg" }) {
        childImageSharp {
          fluid(quality: 100, srcSetBreakpoints: [300, 900, 1200]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Wrapper exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Container>
        <Content variants={stagger}>
          <motion.h1 variants={fadeInUp}>
            <span>Give Life To Your Party With</span>
            <br />
            Balloon Designs
          </motion.h1>
          <motion.p variants={fadeInUp}>
            We specialize in creating an atmosphere that is beautiful and
            memorable for your celebrations. We assure you that you will always
            be satisfied with our experienced services.
          </motion.p>
          <Buttons variants={fadeInUp}>
            <Button to="/consultation">Free Consultation</Button>
            <Button to="/gallery">Our Work</Button>
          </Buttons>
        </Content>
        <ImgWrapper
          transition={{ ease: "easeInOut", duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ x: ["100%", "0%"], opacity: [0, 1] }}
        >
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImgWrapper>
      </Container>
    </Wrapper>
  )
}

export { Header }
