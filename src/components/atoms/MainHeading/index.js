import React, { PropTypes } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { font } from 'styled-theme'

import { Blink } from 'components'

const mainHeadingPlaceholderStyles = css`
  display: inline-block;
  padding: 0 30px;
  
  font-family: ${font('primary')};
  font-weight: 100;
  font-size: 85px;
  visibility: hidden;
  
  p {
    display: inline-block;
    margin: 0;
  }
  
  @media only screen and (max-width: 475px) {
    font-size: 65px;
    padding: 0 5px;
  }
`

const typingAnimation = keyframes`
  0% { width: 0; }
  100% { width: 271px; }
`
const typingMobileAnimation = keyframes`
  0% { width: 0; }
  100% { width: 208px; }
`
const mainHeadingRealDealStyles = css`
  display: inline-block;
  padding: 0 25px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  font-family: ${font('primary')};
  font-weight: 100;
  font-size: 85px;
  color: #fff;
  text-shadow: 0px 0px 50px #000;
  
  user-select: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
  }
  
  p {
    display: inline-block;
    margin: 0;
    overflow: hidden;
    float: left;
    white-space: nowrap;
    width: 0;
    
    animation-name: ${typingAnimation};
    animation-duration: 1.25s
    animation-fill-mode: forwards;
    animation-delay: 2s;
  }
  
  span {
    float: left;
  }
  
  @media only screen and (max-width: 475px) {
    font-size: 65px;
    padding: 0;
    
    &:hover {
      background: none;
    }
    
    p {
      animation-name: ${typingMobileAnimation};
    }
  }
`

const mainHeadingStyles = css`
  position: relative;
  margin: 0 0 50px;
`

const MainHeadingPlaceholder = styled(({ text, ...props }) => {
  return (
    <a {...props}>
      <p>{text}&nbsp;</p><Blink>&gt;_</Blink>
    </a>
  )
})`${mainHeadingPlaceholderStyles}`

const MainHeadingRealDeal = styled(({ text, ...props }) => {
  return (
    <a {...props} title="Wei He | LinkedIn" href="https://www.linkedin.com/in/towei" target="blank">
      <p>{text}&nbsp;</p><Blink>&gt;_</Blink>
    </a>
  )
})`${mainHeadingRealDealStyles}`

const MainHeading = styled(({ level, children, reverse, palette, theme, ...props }) => {
  return (
    <div {...props}>
      <MainHeadingPlaceholder text={children} />
      <MainHeadingRealDeal text={children} />
    </div>
  )
})`${mainHeadingStyles}`

MainHeading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.string,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

MainHeading.defaultProps = {
  level: 1,
  palette: 'grayscale',
}

export default MainHeading
