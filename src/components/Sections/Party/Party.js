import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"

import Img from "gatsby-image"
import { Content } from "../../Content"

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

  div:nth-child(1) {
    margin: 5rem 0 0 0;

    @media (min-width: ${minWidth}) {
      margin: unset;
      align-self: center;
    }
  }

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

// const Content = styled.div`
//   z-index: 2;

//   margin: 5rem 0;
//   background-color: inherit;

//   h2 {
//     margin-top: 0;
//     margin-bottom: 0.5em;

//     color: var(--pink);
//     font-size: 2rem;

//     span {
//       font-size: 0.75em;
//       color: var(--black);
//     }
//   }

//   p {
//     max-width: 450px;

//     color: var(--gray);
//     font-size: 16px;
//     line-height: 2rem;
//     text-align: justify;
//   }
// `

const Link = styled(GatsbyLink)`
  position: relative;
  z-index: 3;

  width: 100%;
  margin-top: 2rem;
  padding: 1.75rem;

  background: var(--pink);
  color: var(--light-biege);
  font-weight: bold;
  text-decoration: none;

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
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Confetti position="absolute" />
      <Container>
        <Content
          heading="Get A Free Consultation"
          span="Let's Have A Party"
          link={<Link to="/consultation">Free Consultation</Link>}
        >
          <p>
            Colaberate together on charming designs, build high quality
            displays, and deliver the dream event your imagination desires. Your
            special days are important to us aswell. That is why we put so much
            care and attention into giving you the best displays you could ever
            dream of.
          </p>
        </Content>
        <ImgContainer>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImgContainer>
      </Container>
    </Wrapper>
  )
}

export { Party }
