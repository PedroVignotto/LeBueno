import { Modal } from '../modal'

import Image from 'next/image'
import { useState } from 'react'

type Image = { id: string, src: string, alt: string }
type Props = { project: { id: string, name: string, description: string, src: string, images: Image[] } }

export function Project({ project: { name, description, src, images } }: Props) {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => setOpenModal(!openModal)

  return (
    <>
      <Image src={`/images/portfolio/${src}`} alt={name} width={350} height={350} onClick={handleModal} />
      <Modal openModal={openModal} closeModal={handleModal} name={name} description={description} images={images} />
    </>
  )
}
