import { Container, Hero } from '../styles/pages/home'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início ✽ Letícia Bueno</title>
      </Head>
      <Container>
        <Hero>
          <aside>
            <Image src="/images/banner-hero.jpg" alt="Home office" width={500} height={550} />
          </aside>
          <section>
            <Image src="/images/logo-symbol-black.svg" alt="Simbolo" width={30} height={30} />
            <h1>design <span>afetivo, delicado &<br /> singular</span> para empreendedoras<br /> apaixonadas e com propósitos</h1>
            <h2>Vamos criar o <span>universo visual</span><br /> da sua marca juntas?</h2>
          </section>
        </Hero>
      </Container>
    </>
  )
}
