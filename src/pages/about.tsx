import { Button, Instagram } from '../components'

import { Title, Main, Values } from '../styles/pages/about'

import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre ✽ Letícia Bueno</title>
      </Head>
      <Title>
        <h1>sente-se, pegue uma xícara de café e conheça mais um pouquinho sobre quem está por trás da tela</h1>
      </Title>
      <Main>
        <Image src="/images/logo/symbol-black.svg" alt="Simbolo" width={30} height={30} />
        <section>
          <Image src="/images/photos/profile-2.jpg" alt="Eu" width={350} height={350} />
          <article>
            <p>2019 foi um ano de mudanças na minha vida. Larguei meu emprego CLT em busca de trabalhar com o que me movia e que até então, era um risco, mas se eu quisesse uma mudança eu teria que enfrentar o desafio.</p>
            <p>O momento era vai ou racha! Bem… Eu fui. O friozinho na barriga de empreender veio junto,  noites mal dormidas pensando se tinha feito a coisa certa… Enfim, o grupo do <span>“medo”</span> estava ali comigo, mas eu fico feliz em ter tomado essa decisão.</p>
          </article>
        </section>
        <section>
          <article>
            <p>Comecei a ter mais tempo para me dedicar com o que amo e que tenho confiança em fazer <span>(sem contar o conforto de trabalhar em casa com minhas calças moletom)</span>. Me aperfeiçoando e buscando ajudar marcas a transmitirem sua mensagem ao mundo, a sua essência, seu universo visual de forma criativa e afetiva.</p>
            <p>Criatividade é um exercício que amo praticar todos os dias, assim como uma <span>(duas, três e contando)</span> boa xícara de café.</p>
            <p>O prazer seria todo meu poder compartilhá-los com você. Ah, e caso o café não seja o seu favorito, temos café também. Digo, chá!</p>
          </article>
          <Image src="/images/photos/profile-3.jpg" alt="Eu" width={400} height={450} />
        </section>
      </Main>
      <Values>
        <section>
          <h3>valores</h3>
          <div>
            <Button>criatividade</Button>
            <Button>singularidade</Button>
            <Button>sinceridade</Button>
            <Button>autenticidade</Button>
            <Button>qualidade</Button>
            <Button>sensibilidade</Button>
          </div>
        </section>
      </Values>
      <Instagram />
    </>
  )
}
