import React from "react"
import styled from "styled-components"

const minWidth = "900px"

const Container = styled.div`
  position: relative;
  display: block;

  color: var(--gray);
  font-size: 1rem;
  line-height: 2em;
  text-align: justify;

  @media (min-width: ${minWidth}) {
    max-width: 475px;
  }
`

const Heading = styled.h1`
  margin-top: 0;
  color: var(--pink);
  font-size: 2rem;

  /* white-space: nowrap; */

  text-align: left;

  @media (min-width: ${minWidth}) {
    font-size: 2.5rem;
  }
`

const Span = styled.span`
  font-size: 0.5em;
  color: var(--black);

  text-align: left;
`

const Content = ({ heading, span, link, children }) => {
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
      {children}
      {link}
    </Container>
  )
}

export { Content }
