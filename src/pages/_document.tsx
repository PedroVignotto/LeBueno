import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
      return(
        <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/cqg0chn.css" />
          <title>lebueno</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        </Html>
      )
    }
}
