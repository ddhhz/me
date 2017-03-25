import React from 'react'
import styled, { css, keyframes } from 'styled-components'


const linkedInAppearAnimation = keyframes`
  0% { opacity: 0.0 }
  100% { opacity: 1.0 }
`

const styles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  
  opacity: 0;
  animation: ${linkedInAppearAnimation} 1.5s forwards 3.25s;
  
  div.LI-badge-container {
    background: rgba(255, 255, 255, 0.6);
  }
  
  img.LI-field-icon {
    border-radius: 10%;
  }
`

const LinkedInBadge = styled(({ className, ...props }) => {
  return (
    <div
      className={`LI-profile-badge ${className}`} {...props}
      data-version="v1" data-size="large" data-locale="en_US"
      data-type="horizontal" data-theme="light" data-vanity="towei"
    >
      <a className="LI-simple-link" href="https://www.linkedin.com/in/towei?trk=profile-badge">Wei He</a>
      <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer />
    </div>
  )
})`${styles}`

export default LinkedInBadge
