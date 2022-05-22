import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return(
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/cqg0chn.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
