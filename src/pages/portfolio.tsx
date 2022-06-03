import { Title, Projects, Content } from '../styles/pages/portfolio'

import Head from 'next/head'
import Image from 'next/image'
import Modal from 'react-modal'
import { FiX } from 'react-icons/fi'
import { useState } from 'react'

export default function Portfolio() {
  const [OpenModal, setOpenModal] = useState(false)

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
          <Image src="/images/portfolio/ceres/profile.png" alt="CERES VETERINÁRIA" width={350} height={350} onClick={() => setOpenModal(!OpenModal)} />
        </div>
      </Projects>

      <Modal isOpen={OpenModal} onRequestClose={() => setOpenModal(!OpenModal)} ariaHideApp={false} overlayClassName='modal-overlay' className='modal-content'>
        <button onClick={() => setOpenModal(!OpenModal)} className="modal-close"><FiX /></button>
        <Content>
          <Title>
            <Image src="/images/logo/symbol-black.svg" alt="Simbolo" width={30} height={30} />
            <h1>CERES VETERINÁRIA</h1>
            <p>Identidade visual, papelaria e criativos redes sociais</p>
          </Title>
          <Image src="/images/portfolio/ceres/1.png" alt="Mockup" width={1100} height={1100} />
          <Image src="/images/portfolio/ceres/2.png" alt="Conceito" width={1100} height={1100} />
          <Image src="/images/portfolio/ceres/3.png" alt="Mockup" width={1100} height={1100} />
          <Image src="/images/portfolio/ceres/4.png" alt="Mockup" width={1100} height={1100} />
          <Image src="/images/portfolio/ceres/5.png" alt="Variações" width={1100} height={1100} />
          <Image src="/images/portfolio/ceres/6.png" alt="Mockup" width={1100} height={1100} />
          <Image src="/images/portfolio/ceres/7.png" alt="Logo" width={1100} height={1100} />
          <Image src="/images/portfolio/ceres/8.gif" alt="Gif Criativos" width={1100} height={1100} />
          <Image src="/images/portfolio/ceres/9.png" alt="Mockup" width={1100} height={1100} />
          <Image src="/images/portfolio/ceres/10.png" alt="Mockup" width={1100} height={1100} />
        </Content>
      </Modal>
    </>
  )
}
