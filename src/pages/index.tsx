import { Button, Dropdown, Instagram } from '../components'
import faq from '../../faq.json'

import { Hero, BackgroundAbout, About, Service, Feedback, Faq } from '../styles/pages/home'

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
        <aside>
          <Image src="/images/general/banner-hero.jpg" alt="Home office" width={500} height={550} />
        </aside>
        <section>
          <Image src="/images/logo/symbol-black.svg" alt="Simbolo" width={30} height={30} />
          <h1>design <span>afetivo, delicado &<br /> singular</span> para empreendedoras<br /> apaixonadas e com propósitos</h1>
          <h2>Vamos criar o <span>universo visual</span><br /> da sua marca juntas?</h2>
        </section>
      </Hero>
      <BackgroundAbout />
      <About>
        <section>
          <article>
            <h3>Oi, eu sou a Letícia!</h3>
            <h4>conheça a designer</h4>
          </article>
          <article>
            <p>Sou uma empreendedora e designer de marcas afetivas há quase 4 anos. Amo trabalhar com marcas de mulheres inspiradoras e únicas.</p>
            <p>Meu foco com design envolve não só inspiração e criatividade, mas também expressar de forma simbólica o desejo de crescer e transformar aquela ideia em realidade com muito carinho.</p>
          </article>
          <Link href="/about"><a><Button>mais sobre mim</Button></a></Link>
        </section>
        <aside>
          <Image src="/images/photos/profile-1.jpg" alt="Eu" width={500} height={550} />
        </aside>
      </About>
      <Service>
        <section>
          <div>
            <Image src="/images/logo/symbol-black.svg" alt="Simbolo" width={30} height={30} />
            <h3>serviços</h3>
          </div>
          <ul>
            <li>identidade <span>visual</span></li>
            <li>artes <span>digitais</span></li>
            <li><span>criativos</span> redes sociais</li>
          </ul>
          <Link href="/services"><a><Button>saber mais</Button></a></Link>
        </section>
      </Service>
      <Feedback>
        <div>
          <h3>experiências de quem já passou por aqui</h3>
          <Image src="/images/general/heart.svg" alt="Coração" width={30} height={30} />
        </div>
        <section>
          <article>
            <h4>Gabi Botteselli</h4>
            <h5>Devir Arquitetura</h5>
            <p>“Se for resumir minha experiência com a Letícia, diria que foi EXCELENTE. Uma pessoa que faz você se sentir acolhido, muito carinho e profissionalismo em todas as etapas do processo. O resultado ficou além do que eu poderia imaginar, amei muito. Sou muito grata por tudo.”</p>
          </article>
          <article>
            <h4>Leticia Monteiro</h4>
            <h5>Mes Amis Home</h5>
            <p>“Você é de uma sensibilidade, de um talento que eu não tenho palavras para descrever. Sinto que já nos conhecemos há muito tempo, porque a facilidade a leveza que você pegou tudo que eu queria transmitir, foi demais. Amei amei amei! Este é só o início dos nossos trabalhos juntas.”</p>
          </article>
          <article>
            <h4>Gabriela Silvestrini</h4>
            <h5>Terapia Ocupacional</h5>
            <p>“Eu não tenho palavras pra agradecer seu trabalho, paciência (com minhas mil perguntas e alterações sem saber explicar o que eu queria), e criatividade! Ficou tudo MUITO lindo, e do jeitinho que eu queria! E a sua forma de atender, explicar e conversar é muito gentil. Muito feliz por ter escolhido você!”</p>
          </article>
        </section>
      </Feedback>
      <Faq>
        <section>
          <h3>perguntas frequentes</h3>
          <ul>
            {faq.map(({ id, question, answer }) => <Dropdown key={id} title={question} description={answer} />)}
          </ul>
        </section>
      </Faq>
      <Instagram />
    </>
  )
}
