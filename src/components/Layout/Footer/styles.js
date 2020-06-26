import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export const Wrapper = styled.footer`
  margin: 0;
  padding: 7.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--dark-blue);
  @media only screen and (min-width: 750px) {
    padding: 3vh 5%;
  }
`

export const Nav = styled.nav`
  margin: 2rem 0;

  a + a {
    margin-left: 2rem;
  }
`

export const A = styled.a`
  margin: 1rem 0;

  color: var(--white);
  text-decoration: none;
`

export const Link = styled(GatsbyLink)`
  color: var(--white);
  text-decoration: none;
`
