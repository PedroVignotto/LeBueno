import { Modal } from '../components'
import projects from '../../projects.json'

import { Title, Projects } from '../styles/pages/portfolio'

import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Portfolio() {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => setOpenModal(!openModal)

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
          {projects.map(({ id, images, name, description, profile }) =>
            <>
              <Image key={id} src={profile} alt={name} width={350} height={350} onClick={handleModal} />
              <Modal openModal={openModal} closeModal={handleModal} name={name} description={description} images={images} />
            </>
          )}
        </div>
      </Projects>
    </>
  )
}
