import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"

import Confetti from "../../Confetti"
import { Content } from "../../Content"
import ConfettiPopperSrc from "../../../images/ConfettiPopper.png"

import Img from "gatsby-image"

const minWidth = "900px"

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  height: inherit;
  background-color: var(--biege);
`

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 7.5em 0;

  width: var(--width);
  max-width: var(--max-width);

  @media (min-width: ${minWidth}) {
    display: grid;
    gap: 5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right";

    align-items: center;

    div:nth-child(1) {
      grid-area: right;
    }
    div:nth-child(2) {
      grid-area: left;
    }
  }
`

const ContentWrapper = styled(motion.div)`
  margin: 0 0 7.5rem;

  @media (min-width: ${minWidth}) {
    margin: unset;
  }
`

const Link = styled(GatsbyLink)`
  color: var(--pink);
  text-decoration: none;

  font-weight: bold;

  display: flex;
  align-items: center;

  display: inline-block;

  :hover {
    svg {
      transform: translate(0.5em);
    }
  }

  svg {
    position: relative;
    top: 0.25em;

    transition: transform 0.2s ease-in-out;

    margin-left: 1em;
    height: 1.25em;
  }

  cursor: pointer;
`

const ImageCollage = styled.div`
  z-index: 2;

  position: relative;

  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 12.5rem 12.5rem;
  grid-template-areas:
    "big top"
    "big bottom";

  @media (min-width: ${minWidth}) {
    gap: 1rem;

    grid-template-rows: 13rem 13rem;
  }

  div {
    z-index: 2;

    border-radius: 0.25rem;
    box-shadow: var(--shadow);
  }

  div:nth-child(1) {
    grid-area: big;
  }

  div:nth-child(2) {
    grid-area: top;
  }

  div:nth-child(3) {
    grid-area: bottom;
  }
`

const ConfettiPopper = styled.img`
  z-index: 3;

  position: absolute;
  right: -7.5%;
  top: -7.5%;
`

const StyledImg = styled(Img)``

const OurGoal = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativeDirectory: { eq: "index" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Confetti position="absolute" />
      <Container>
        <ContentWrapper>
          <Content
            heading="Create Amazing Balloons"
            span="What Is Our Goal?"
            link={
              <Link to="/about">
                About Us
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            }
          >
            <p>
              Colaberate together on charming designs, build high quality
              displays, and deliver the dream event your imagination desires.
              Your special days are important to us aswell. That is why we put
              so much care and attention into giving you the best displays you
              could ever dream of.
            </p>
          </Content>
        </ContentWrapper>

        <ImageCollage>
          {data.images.nodes.map(image => (
            <StyledImg key={image.id} fluid={image.childImageSharp.fluid} />
          ))}

          <ConfettiPopper src={ConfettiPopperSrc} />
        </ImageCollage>
      </Container>
    </Wrapper>
  )
}

export { OurGoal }
