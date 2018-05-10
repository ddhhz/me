import React from 'react'
import Helmet from 'react-helmet'

import { PageTemplate, MainHeading, LinkedInBadge } from 'components'

const HomePage = () => {
  return (
    <div>
      <Helmet
        title="Wei He | LinkedIn"
        link={[
          { rel: 'canonical', href: 'https://whe.me' },
        ]}
      />
      <PageTemplate mainHeading={<MainHeading>Wei He</MainHeading>} body={<LinkedInBadge />} />
    </div>
  )
}

export default HomePage
