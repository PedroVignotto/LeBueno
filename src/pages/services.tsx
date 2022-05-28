import { Title } from '../styles/pages/services'

import Head from 'next/head'
import Image from 'next/image'

export default function Services() {
  return (
    <>
      <Head>
        <title>Serviços ✽ Letícia Bueno</title>
      </Head>
      <Title>
        <Image src="/images/logo/symbol-black.svg" alt="Simbolo" width={30} height={30} />
        <h1>conheça os serviços</h1>
      </Title>
    </>
  )
}
