import React from 'react'

import { PageTemplate, MainHeading, LinkedInBadge } from 'components'

const HomePage = () => {
  return (
    <PageTemplate mainHeading={<MainHeading>Wei He</MainHeading>} body={<LinkedInBadge />} />
  )
}

export default HomePage
