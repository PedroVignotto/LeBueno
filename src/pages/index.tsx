import { Button, Instagram } from '../components'

import { Hero, HeroContent, BackgroundAbout, About, AboutContent, Service, ServiceContent } from '../styles/pages/home'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início ✽ Letícia Bueno</title>
      </Head>
      <Hero>
        <HeroContent>
          <aside>
            <Image src="/images/banner-hero.jpg" alt="Home office" width={500} height={550} />
          </aside>
          <section>
            <Image src="/images/logo-symbol-black.svg" alt="Simbolo" width={30} height={30} />
            <h1>design <span>afetivo, delicado &<br /> singular</span> para empreendedoras<br /> apaixonadas e com propósitos</h1>
            <h2>Vamos criar o <span>universo visual</span><br /> da sua marca juntas?</h2>
          </section>
        </HeroContent>
      </Hero>
      <BackgroundAbout />
      <About>
        <AboutContent>
          <section>
            <div className='about-me-title'>
              <h3>Oi, eu sou a Letícia!</h3>
              <h4>conheça a designer</h4>
            </div>
            <div className='about-me-text'>
              <p>Sou uma empreendedora e designer de marcas afetivas há quase 4 anos. Amo trabalhar com marcas de mulheres inspiradoras e únicas.</p>
              <p>Meu foco com design envolve não só inspiração e criatividade, mas também expressar de forma simbólica o desejo de crescer e transformar aquela ideia em realidade com muito carinho.</p>
            </div>
            <Link href="/about">
              <a><Button>mais sobre mim</Button></a>
            </Link>
          </section>
          <aside>
            <Image src="/images/photo-profile-1.jpg" alt="Eu" width={500} height={550} />
          </aside>
        </AboutContent>
      </About>
      <Service>
        <ServiceContent>
          <div>
            <Image src="/images/logo-symbol-black.svg" alt="Simbolo" width={30} height={30} />
            <h3>serviços</h3>
          </div>
          <ul>
            <li>
              <p>identidade <span>visual</span></p>
            </li>
            <li>
              <p><span>criativos</span> redes sociais</p>
            </li>
            <li>
              <p>artes itens <span>papelaria</span></p>
            </li>
          </ul>
          <Button>saber mais</Button>
        </ServiceContent>
      </Service>
      <Instagram />
    </>
  )
}
