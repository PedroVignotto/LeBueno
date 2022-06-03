import { Modal, Project } from '../components'
import projects from '../../projects.json'

import { Title, Projects } from '../styles/pages/portfolio'

import Head from 'next/head'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfólio ✽ Letícia Bueno</title>
      </Head>
      <Title>
        <Image src="/images/logo/symbol-black.svg" alt="Simbolo" width={30} height={30} />
        <h1>meu trabalho</h1>
        <p>Tive o prazer de trabalhar em marcas de clientes incríveis. Pegue seu café e fique à vontade para conhecer um pouco mais do que eu amo fazer.</p>
      </Title>
      <Projects>
        <div>
          {projects.map(project => <Project key={project.id} project={project} />)}
        </div>
      </Projects>
    </>
  )
}
