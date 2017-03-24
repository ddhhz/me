import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
    display: block !important;
  }
`

const App = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Wei He"
        titleTemplate="%s"
        meta={[
          { name: 'description', content: 'Software Engineer ● Entrepreneur ● Learner ● Educator ● Volunteer - My initial impression was Wei was talented, driven and very smart, but more importantly, that he would be genuine and rare.' },
          { property: 'og:site_name', content: 'Wei He' },
          { property: 'og:image', content: '/thumbnail.png' },
          { property: 'og:image:type', content: 'image/png' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
        ]}
        link={[
          { rel: 'icon', href: '/icon.png' },
        ]}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
