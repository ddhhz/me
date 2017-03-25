import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #293c66 0.1%, #2e446d 4.6%, #556d99 26.8%, #62789f 34.2%, #667a9f 35.8%, #707b9b 43.6%, #6e7c99 43.6%, #6d7792 48.1%, #6f7692 48.1%, #33333b 90.2%, #323338 90.2%, #2b2c31) no-repeat center;
  background-color: #57637a;
  background-image: url("images/bg-home.jpg");
  background-size: cover;
  
  @media only screen and (max-width: 500px) {
    display: block;
    padding: 35px 15%;
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
