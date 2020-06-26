import styled from "styled-components"

export const Wrapper = styled.div`
  z-index: 900;
  position: sticky;
  top: 0;
  background-color: var(--light-biege);
  display: flex;
  justify-content: center;
  /* box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04); */
`

export const Container = styled.div`
  z-index: 900;
  width: var(--width);
  height: clamp(80px, 5vw, 90px);

  max-width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.svg`
  width: auto;
  height: 28px;
  fill: var(--black);
  cursor: pointer;
  transition: fill 0.2s ease-in-out;
  :hover,
  :focus {
    fill: var(--black);
  }
`
