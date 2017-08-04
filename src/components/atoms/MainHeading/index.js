import React, { PropTypes } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { font } from 'styled-theme'

import { Blink } from 'components'

const blinkAnimation = keyframes`
  50% { opacity: 0.01; }
`

const typingAnimation = keyframes`
  0% { width: 0; }
  100% { width: 275px; }
`
const typingMobileAnimation = keyframes`
  0% { width: 0; }
  100% { width: 180px; }
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
  //text-shadow: 0px 0px 50px #000;
  
  user-select: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
  }
  
  small {
    float: left;
    padding-right: 15px;
    line-height: 1.1em;
    
    sub {
      font-size: 50px;
    }
    
    &.cursor {
      margin-top: 15px;
      margin-left: 0;
      background-color: rgba(255, 255, 255, 0.8);
      animation: ${blinkAnimation} 1.25s forwards 0s infinite;
      font-size: 0.75em;
    }
  }
  
  p {
    display: inline-block;
    margin: 0;
    overflow: hidden;
    float: left;
    white-space: nowrap;
    width: 0;
    
    animation: ${typingAnimation} 1.25s forwards 2s;
  }
  
  span {
    float: left;
  }
  
  @media only screen and (max-width: 475px) {
    font-size: 55px;
    padding: 0;
    
    &:hover {
      background: none;
    }
    
    p {
      animation: ${typingMobileAnimation} 1.25s forwards 2s;
    }
    
    small {
      padding-right: 10px;
      
      sub {
        font-size: 35px;
      }
      
      &.cursor {
        margin-top: 10px;
      }
    }
  }
`


const mainHeadingPlaceholderStyles = css`
  display: inline-block;
  padding: 0 30px;
  
  font-family: ${font('primary')};
  font-weight: 100;
  font-size: 85px;
  visibility: hidden;
  
  small {
    float: left;
    padding-right: 15px;
    line-height: 1.1em;
    
    sub {
      font-size: 50px;
    }
    
    &.cursor {
      margin-top: 15px;
      margin-left: 0;
      font-size: 0.75em;
    }
  }
  
  p {
    display: inline-block;
    float: left;
    margin: 0;
  }
  
  small {
    font-size: 60%;
  }
  
  @media only screen and (max-width: 475px) {
    font-size: 55px;
    padding: 0 5px;
    
    small {
      padding-right: 10px;
      
      sub {
        font-size: 35px;
      }
      
      &.cursor {
        margin-top: 10px;
      }
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
      <small><sub>&gt;</sub></small><p>{text}&nbsp;</p><small className="cursor">&nbsp;</small>
    </a>
  )
})`${mainHeadingPlaceholderStyles}`

const MainHeadingRealDeal = styled(({ text, ...props }) => {
  return (
    <a {...props} title="Wei He | LinkedIn" href="https://www.linkedin.com/in/towei" target="blank">
      <small><sub>&gt;</sub></small><p>{text}&nbsp;</p><small className="cursor">&nbsp;</small>
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
