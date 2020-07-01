import React, { useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle } from "../styles/GlobalStyle"

import SEO from "../components/seo"
import Img from "gatsby-image"

import Confetti from "../components/Confetti"

import { Layout } from "../components/Layout"

const minWidth = "900px"

const Wrapper = styled.div`
  position: relative;

  height: inherit;
  background-color: var(--light-biege);
`

const Container = styled.div`
  position: relative;
  margin: 0 auto;

  width: var(--width);
  max-width: var(--max-width);

  @media (min-width: ${minWidth}) {
    min-height: calc(100vh - 100px);
  }
`

const GalleryWrapper = styled.div`
  margin-bottom: 7.5rem;
  margin-top: 2.5rem;
`

const Categories = styled.div`
  position: sticky;
  top: 0;

  margin: 2rem 0 4rem 0;

  button + button {
    margin-left: 1.5rem;
  }

  @media (min-width: ${minWidth}) {
    margin-top: 0;
  }
`

const CategoryButton = styled.button`
  all: unset;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ current }) => (current ? "var(--pink)" : "var(--gray)")};
  border-bottom: ${({ current }) =>
    current ? "2px solid currentColor" : "none"};
  text-transform: capitalize;

  :hover {
    color: var(--black);
  }

  cursor: pointer;
`

const StyledImg = styled(Img)`
  height: 100%;
  width: 100%;
`

const Images = styled.div`
  margin-top: 3rem;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-auto-rows: 300px;
  /* gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  grid-auto-rows: 13rem; */

  div {
    border-radius: 0.5rem;

    box-shadow: var(--shadow);
  }
`

const ImageCollage = ({ images }) => {
  const mappedImages = image => (
    <motion.div
      key={image.id}
      animate={{ opacity: 1 }}
      enter={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
    >
      <StyledImg fluid={image.childImageSharp.fluid} />
    </motion.div>
  )

  return (
    <Images>
      {images.map(mappedImages)}
      <AnimatePresence />
    </Images>
  )
}

const GalleryPage = () => {
  const images = useStaticQuery(graphql`
    {
      arches: allFile(filter: { relativeDirectory: { eq: "gallery/arches" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      bouquets: allFile(
        filter: { relativeDirectory: { eq: "gallery/bouquets" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      columns: allFile(
        filter: { relativeDirectory: { eq: "gallery/columns" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      displays: allFile(
        filter: { relativeDirectory: { eq: "gallery/displays" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const categories = [
    { category: "arches", images: images.arches.nodes },
    { category: "bouquets", images: images.bouquets.nodes },
    { category: "columns", images: images.columns.nodes },
    { category: "displays", images: images.displays.nodes },
  ]

  const [currentCategory, setCurrentCategory] = useState(categories[0])

  const categoryButtons = categories.map((category, i) => (
    <CategoryButton
      key={category.category}
      onClick={() => setCurrentCategory(categories[i])}
      current={category.category === currentCategory.category}
    >
      {category.category}
    </CategoryButton>
  ))

  return (
    <>
      <GlobalStyle />
      <SEO title="Gallery" />
      <Layout>
        <Wrapper>
          <Confetti />
          <Container>
            {/* <ContentWrapper>
              <Content
                heading="View Our Work"
                span="Get Inspired"
                words="Browser our décor gallery for inspirations and ideas for your event. We're just a phone call away and will be glad to help you to find youre looking for to celebrate."
                link={<Link>Free Consultation</Link>}
              />
            </ContentWrapper> */}

            <GalleryWrapper>
              <Categories>{categoryButtons}</Categories>

              <ImageCollage
                category={currentCategory.category}
                images={currentCategory.images}
              />
            </GalleryWrapper>
          </Container>
        </Wrapper>
      </Layout>
    </>
  )
}

export default GalleryPage
