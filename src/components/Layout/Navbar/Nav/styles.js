import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export const Wrapper = styled.nav`
  z-index: 300;
  position: fixed;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--light-biege);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  transform: ${({ navOpen }) =>
    navOpen ? "translate(-100%, 0)" : "translate(0%, 0)"};
  transition: 0.3s ease-in-out;
  @media only screen and (min-width: 750px) {
    all: unset;
  }
`

export const Ul = styled.ul`
  width: 100%;
  padding: 5%;
  @media only screen and (min-width: 750px) {
    all: unset;
    display: flex;
  }
`

export const Hr = styled.hr`
  width: 70%;
  @media only screen and (min-width: 750px) {
    display: none;
  }
`

export const Li = styled.li`
  list-style: none;
  text-align: center;
  margin: 7vh;

  a {
    transition: 0.2s ease-in-out;
    color: var(--gray);
    cursor: pointer;
    :hover,
    :focus {
      color: var(--pink);
    }
  }

  @media only screen and (min-width: 750px) {
    all: unset;
    position: relative;
    margin-left: 3em;
  }
`

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  font-size: 1rem;
`
