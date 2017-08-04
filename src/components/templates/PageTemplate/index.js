import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  min-height: 100vh;
  padding: 0;
  
  @media only screen and (max-width: 475px) {
    display: block;
    padding: 0 10%;
  }
`

const MainHeadingWrapper = styled.div`
  text-align: center;
  
  @media only screen and (max-width: 475px) {
    // text-align: left;
    margin-top: 50px;
  }
`

const BodyWrapper = styled.div`
  min-height: 243px;
  
  @media only screen and (max-width: 475px) {
    min-height: 217px;
  }
`

const PageTemplate = ({ mainHeading, body, ...props }) => {
  return (
    <Wrapper {...props}>
      <MainHeadingWrapper>{mainHeading}</MainHeadingWrapper>
      <BodyWrapper>{body}</BodyWrapper>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  mainHeading: PropTypes.node,
  body: PropTypes.node,
}

export default PageTemplate
