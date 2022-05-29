import { Button, Dropdown } from '../components'
import process from '../../process.json'

import { Title, Main, Process } from '../styles/pages/services'

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
      <Main>
        <article className="visual-identity">
          <div>
            <Button>identidade visual</Button>
            <p>Muito mais do que um logotipo. Uma identidade visual é um conjunto de variações do seu logo, tipografias, paletas de cores, elementos de design e padrões estrategicamente escolhidos que capturam quem você é como empresa e deixa seu público com uma impressão duradoura.</p>
            <p>Uma idetidade visual bem definida, criada com intenção e afeto, gera diferenciação dos demais, reconhecimento para sua empresa e consequentemente ajuda a sua marca a alcançar os clientes ideais.</p>
            <p>Juntas, vamos traduzir e transmitir a essência e personalidade da sua marca com elementos visuais únicos e criativos.</p>
            <p>O resultado? Uma marca que você se sente confiante para compartilhar online e offline nos próximos anos.</p>
          </div>
          <Image src="/images/services/visual-identity.jpg" alt="Identidade visual" width={500} height={550} />
        </article>
        <article className="digital-arts">
          <Image src="/images/services/digital-arts.jpg" alt="Artes Digitais" width={500} height={550} />
          <div>
            <Button>artes digitais</Button>
            <p>Em conjunto com a identidade visual, uma opção de incorporar a sua marca é usar materiais de papelaria e mídias sociais de apoio, como por exemplo:</p>
            <ul>
              <li>• Cartão de visitas</li>
              <li>• Cartão interativo digital</li>
              <li>• Capas para destaques</li>
              <li>• Papel timbrado</li>
              <li>• Entre outros</li>
            </ul>
            <p>Esses materiais ajudam a dar uma melhor visualização e a manter o seu design padronizado com sua identidade.</p>
            <p><span>*Serviço de entrega somente digital. Não trabalho com impressos.</span></p>
          </div>
        </article>
        <article className="social-network">
          <div>
            <Button>criativos redes sociais</Button>
            <p>Elaboração de design da arte para postagens nas redes sociais (feed ou stories) da sua marca.</p>
            <ul>
              <li>• Modelos editáveis criados no Canva: O objetivo dos modelos é ajudar a você permanecer consistente, manter um perfil harmônico e coeso. As artes são sempre construídas usando os elementos da sua marca: paleta de cores, tipografia, pattern, etc.</li>
              <li>• Criativos para as redes sociais: Aqui, eu crio a arte conforme seu conteúdo enviado e entrego a arte pronta para ser publicada.</li>
            </ul>
            <p><span>*O envio dos textos/conteúdos é de responsabilidade do cliente. Eu elaboro somente a arte.</span></p>
          </div>
          <Image src="/images/services/social-network.jpg" alt="Criativos redes sociais" width={500} height={550} />
        </article>
      </Main>
      <Title borderTop={true}>
        <Image src="/images/logo/symbol-black.svg" alt="Simbolo" width={30} height={30} />
        <h1>processo criativo</h1>
      </Title>
      <Process>
        <ul>
          {process.map(({ id, stage, description }) => <Dropdown key={id} title={stage} description={description} />)}
        </ul>
      </Process>
    </>
  )
}
