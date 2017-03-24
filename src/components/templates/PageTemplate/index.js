import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #57637a url("images/bg-home.jpg") no-repeat center;
  background-size: cover;
  
  @media only screen and (max-width: 500px) {
    display: block;
    padding: 35px;
  }
`

const MainHeadingWrapper = styled.div`
  text-align: center;
  
  @media only screen and (max-width: 500px) {
    text-align: left;
  }
`

const PageTemplate = ({ mainHeading, ...props }) => {
  return (
    <Wrapper {...props}>
      <MainHeadingWrapper>{mainHeading}</MainHeadingWrapper>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  mainHeading: PropTypes.node,
}

export default PageTemplate
