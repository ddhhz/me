import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

import { Blink } from 'components'

const styles = css`
  
  margin: 0 0 50px;
    
  & a {
    padding: 0 25px;
  
    font-family: ${font('primary')};
    font-weight: 100;
    font-size: 85px;
    text-decoration: none;
    color: ${palette({ grayscale: 6 }, 1)};
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
    }
  }
  
  @media only screen and (max-width: 500px) {
    &, & a {
      font-size: 65px;
    }
  }
`

const MainHeading = styled(({ level, children, reverse, palette, theme, ...props }) => {
  return (
    <h1 {...props}>
      <a title="Wei He | LinkedIn" href="https://www.linkedin.com/in/towei" target="blank">{children} <small>&gt;</small><Blink>_</Blink></a>
    </h1>
  )
})`${styles}`

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
