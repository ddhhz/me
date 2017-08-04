import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import theme from './themes/default'

injectGlobal`
  html {
    background: #275771 url("https://⚡.whe.me/images/bg-home.v1.jpg") no-repeat center center fixed;
    background-size: cover;
  }
  body {
    margin: 0;
    display: block !important;
  }
  @font-face {
    font-family: 'Scope One';
    font-style: normal;
    font-weight: 400;
    src: local('Scope One'), local('ScopeOne-Regular'), url(
      "data:font/woff;base64,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"
    ) format('woff');
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
