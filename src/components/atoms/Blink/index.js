import styled, { keyframes } from 'styled-components'

const blinkAnimation = keyframes`
  50% { opacity: 0.01; }
`

const Blink = styled.span`
  animation: ${blinkAnimation} 1.25s forwards 0s infinite;
`

export default Blink
