/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

const gaCode = `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-18952818-14', 'auto');
ga('send', 'pageview');
`.replace(/\n/g, '')

const Html = ({ styles, assets, state, content }) => {
  const helmet = Helmet.rewind()
  const attrs = helmet.htmlAttributes.toComponent()

  return (
    <html {...attrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {helmet.link.toComponent()}
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body style={{ display: 'none' }}>
        <a href="https://blog.whe.me/" style={{ display: 'none' }}>Wei&apos;s Blog</a>
        <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
        {/*
        <script dangerouslySetInnerHTML={{ __html: state }} />
        {Object.keys(assets.javascript).reverse().map((key) =>
          <script key={key} src={assets.javascript[key]} />
        )}
        */}
        <script dangerouslySetInnerHTML={{ __html: gaCode }} />
      </body>
    </html>
  )
}

Html.propTypes = {
  styles: PropTypes.string.isRequired,
  assets: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Html
