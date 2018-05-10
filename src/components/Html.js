/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

const customCode = `
!function(W,e,i,H,E){W.GoogleAnalyticsObject=i;W[i]||(W[i]=function(){
(W[i].q=W[i].q||[]).push(arguments)});W[i].l=+new Date;H=e.createElement('script');
E=e.scripts[0];H.src='//www.google-analytics.com/analytics.js';
E.parentNode.insertBefore(H,E)}(window,document,'ga');

ga('create','UA-18952818-14','auto');
ga('send','pageview');

!function(){var t;if(!(t=window.driftt=window.drift=window.driftt||[]).init)t.invoked?window.console&&console.error&&console.error("Drift snippet included twice."):(t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n;return(n=Array.prototype.slice.call(arguments)).unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e,n,i;i=3e5*Math.ceil(new Date/3e5),(n=document.createElement("script")).type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+i+"/"+t+".js",(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(n,e)})}(),drift.SNIPPET_VERSION="0.3.1",drift.load("inhgwis639xz")
`.replace(/\n/g, '')

const Html = ({ styles, assets, state, content }) => {  // eslint-disable-line
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
        <script dangerouslySetInnerHTML={{ __html: customCode }} />
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
