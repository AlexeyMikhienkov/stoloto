import React from "react";
import Document, {Html, Head, Main, NextScript} from 'next/document'


class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
          <link href="fonts/fonts.css" rel="stylesheet"/>
          {/*
          <link rel="icon" href="favicon.ico"/>
*/}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default CustomDocument;
