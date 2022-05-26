import { Instagram } from '../components'

import { Wellcome, WellcomeContent } from '../styles/pages/about'

import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre ✽ Letícia Bueno</title>
      </Head>
      <Wellcome>
        <WellcomeContent>
          <h1>sente-se, pegue uma xícara de café e conheça mais um pouquinho sobre quem está por trás da tela</h1>
        </WellcomeContent>
      </Wellcome>
      <Instagram />
    </>
  )
}
