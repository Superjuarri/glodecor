import React, { useState } from "react"
import styled from "styled-components"

import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import Img from "gatsby-image"

import { Content } from "../../Content"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const minWidth = "900px"

const Wrapper = styled.div`
  overflow: hidden;

  z-index: 10;
  background-color: var(--blue);
`

const Container = styled.div`
  margin: 0 auto;

  padding: 5rem 0;

  width: var(--width);
  max-width: var(--max-width);

  align-items: center;

  div:nth-child(1) {
    padding-bottom: 5rem;

    @media (min-width: ${minWidth}) {
      padding-bottom: unset;
    }
  }

  @media (min-width: ${minWidth}) {
    display: grid;
    gap: 5rem;
    grid-template-columns: 1fr 1fr;
  }

  span {
    color: var(--white);
  }

  h1 {
    color: var(--yellow);
  }

  ul {
    padding: 1rem;
    padding-top: 0;

    color: var(--light-biege);
    font-size: 16px;
    line-height: 2rem;
    text-align: justify;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const Link = styled(GatsbyLink)`
  color: var(--yellow);

  font-weight: bold;

  display: flex;
  align-items: center;
  text-decoration: none;

  :hover {
    svg {
      transform: translate(0.5em);
    }
  }

  svg {
    transition: transform 0.2s ease-in-out;

    margin-left: 1em;
    height: 1.25em;
  }

  cursor: pointer;
`

const SliderContainer = styled.div`
  z-index: 2;

  position: relative;

  @media (min-width: ${minWidth}) {
    align-self: center;
  }
`
const Slider = styled.div`
  z-index: 2;
`
const Slide = styled.div`
  z-index: 2;
  height: 350px;

  border-radius: 0.5rem;
`

const Dots = styled.div`
  z-index: 2;

  margin: 0 auto;
  margin-top: 1.5rem;
  width: 50%;

  display: flex;
  justify-content: space-between;
`

const Dot = styled.button`
  z-index: 2;

  width: 1rem;
  height: 1em;

  background: ${({ active }) => (active ? "var(--yellow)" : "var(--biege)")};
  border: none;
  border-radius: 50%;

  cursor: pointer;
`

const StyledImg = styled(Img)`
  display: block;
  z-index: 2;

  max-height: 100px;

  box-shadow: var(--shadow);
`

const Arrow = styled.svg`
  z-index: 2;

  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
`

const Events = () => {
  const images = useStaticQuery(graphql`
    {
      files: allFile(filter: { relativeDirectory: { eq: "eventsSlideShow" } }) {
        nodes {
          id
          childImageSharp {
            fluid(cropFocus: ENTROPY) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  `)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: currentSlide,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    loop: true,
  })

  return (
    <Wrapper>
      <Container>
        <Content
          heading="All Of Them!"
          span="What Events Do We Cover?"
          link={
            <Link to="/gallery">
              Our Gallery{" "}
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
          <ul>
            <li>Birthdays</li>
            <li>Baby Showers</li>
            <li>Baptisms</li>
            <li>Graduations</li>
            <li>Gender Reveals</li>
            <li>Quinceañeras</li>
            <li>Sweet 16's</li>
            <li>Holiday Parties</li>
            <li>Corporations</li>
            <li>Many More!</li>
          </ul>
        </Content>

        <SliderContainer>
          <Slider ref={sliderRef} className="keen-slider">
            {images.files.nodes.map(image => (
              <Slide key={image.id} className="keen-slider__slide">
                <StyledImg fluid={image.childImageSharp.fluid} />
              </Slide>
            ))}
          </Slider>
          {slider && (
            <>
              <ArrowLeft
                onClick={e => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />

              <ArrowRight
                onClick={e => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
              />
            </>
          )}
          {slider && (
            <Dots>
              {[...Array(slider.details().size).keys()].map(i => {
                return (
                  <Dot
                    key={i}
                    onClick={() => {
                      slider.moveToSlide(i)
                    }}
                    active={currentSlide === i}
                  />
                )
              })}
            </Dots>
          )}
        </SliderContainer>
      </Container>
    </Wrapper>
  )
}

const ArrowLeft = ({ onClick, disabled }) => {
  return (
    <Arrow
      onClick={onClick}
      fill="currentColor"
      viewBox="0 0 20 20"
      style={{ left: "5px" }}
    >
      <path
        fill-rule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clip-rule="evenodd"
      ></path>
    </Arrow>
  )
}

const ArrowRight = ({ onClick, disabled }) => {
  return (
    <Arrow
      onClick={onClick}
      fill="currentColor"
      viewBox="0 0 20 20"
      style={{ left: "auto", right: "5px" }}
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      ></path>
    </Arrow>
  )
}

export { Events }
