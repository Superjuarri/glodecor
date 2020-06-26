import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

import Confetti from "../../Confetti"

const minWidth = "900px"

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  background: var(--light-biege);
  padding-bottom: 7.5rem;

  @media (min-width: ${minWidth}) {
    padding: 6rem 0;
  }
`

const Container = styled.div`
  z-index: 2;

  position: relative;

  margin: 0 auto;

  width: var(--width);
  max-width: var(--max-width);

  @media (min-width: ${minWidth}) {
    display: grid;
    gap: 5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right";

    div:nth-child(1) {
      grid-area: left;
    }
    div:nth-child(2) {
      grid-area: right;
    }
  }
`

const Content = styled.div`
  z-index: 2;

  margin: 5rem 0;
  background-color: inherit;

  h2 {
    margin-top: 0;
    margin-bottom: 0.5em;

    color: var(--pink);
    font-size: 2rem;

    span {
      font-size: 0.75em;
      color: var(--black);
    }
  }

  p {
    max-width: 450px;

    color: var(--gray);
    font-size: 16px;
    line-height: 2rem;
    text-align: justify;
  }
`

const Link = styled.a`
  position: relative;
  z-index: 3;

  width: 100%;
  margin-top: 2rem;
  padding: 1.75rem;

  background: var(--pink);
  color: var(--light-biege);
  font-weight: bold;

  display: flex;
  justify-content: center;

  border-radius: 0.5em;

  cursor: pointer;

  @media (min-width: ${minWidth}) {
    width: 12em;
    padding: 1em 2em;
  }
`

const ImgContainer = styled.div`
  align-self: center;
  padding: 10%;

  @media (min-width: ${minWidth}) {
    justify-items: unset;
  }

  div {
    border-radius: 0.5rem;

    box-shadow: var(--shadow);
  }
`

const Party = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "monkey.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Confetti position="absolute" />
      <Container>
        <Content>
          <h2>
            <span>Let's Have A Party</span>
            <br /> Get A Free Consultation
          </h2>
          <p>
            We would love to get in contact with you in order to make your party
            dreams come true. Please click the button below to fill out a form
            in order to get a free consultation. This way we are able to figure
            out what pricing and materials are best suited for your celebration.
          </p>
          <Link>Free Consultation</Link>
        </Content>
        <ImgContainer>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImgContainer>
      </Container>
    </Wrapper>
  )
}

export { Party }
