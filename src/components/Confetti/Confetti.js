import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import ConfettiSrc from "../../images/confetti.svg"

const Container = styled(motion.img)`
  z-index: 0;
  position: ${({ position }) => (position ? position : "fixed")};

  max-height: 100%;
  pointer-events: none;

  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`

const Confetti = ({ position }) => (
  <Container
    src={ConfettiSrc}
    position={position}
    initial={{ scale: 1 }}
    animate={{ scale: [1, 1.1], opacity: [0.5, 0.75] }}
    transition={{ yoyo: Infinity, ease: "easeInOut", duration: 5 }}
  />
)

export default Confetti
