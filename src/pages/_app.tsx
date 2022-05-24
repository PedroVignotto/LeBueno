import { Footer, Header } from '../components'

import { GlobalStyle } from '../styles/global/global'

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default MyApp
