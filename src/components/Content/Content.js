import React from "react"
import styled from "styled-components"

const minWidth = "900px"

const Container = styled.div`
  position: relative;
  display: block;
`

const Heading = styled.h1`
  margin-top: 0;
  color: var(--pink);
  font-size: 2rem;

  @media (min-width: ${minWidth}) {
    font-size: 2.5rem;
  }
`

const Span = styled.span`
  font-size: 0.5em;
  color: var(--black);
`

const Words = styled.p`
  color: var(--gray);
  font-size: 1rem;
  line-height: 2em;
  text-align: justify;

  @media (min-width: ${minWidth}) {
    max-width: 475px;
  }
`

const Content = ({ heading, span, words, link }) => {
  return (
    <Container>
      <Heading>
        {span && (
          <>
            <Span>{span}</Span>
            <br />
          </>
        )}
        {heading}
      </Heading>
      <Words>{words}</Words>
      {link}
    </Container>
  )
}

export { Content }
