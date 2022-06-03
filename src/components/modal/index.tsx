import { Title, Content } from './styles'

import Image from 'next/image'
import ReactModal from 'react-modal'
import { FiX } from 'react-icons/fi'

type Image = { id: string, src: string, alt: string }
type Props = { openModal: boolean, closeModal: () => void, name: string, description: string, images: Image[] }

export function Modal({ openModal, closeModal, name, description, images }: Props) {
  return (
    <ReactModal isOpen={openModal} onRequestClose={closeModal} ariaHideApp={false} overlayClassName='modal-overlay' className='modal-content'>
      <button onClick={closeModal} className="modal-close"><FiX /></button>
      <Title>
        <Image src="/images/logo/symbol-black.svg" alt="Simbolo" width={30} height={30} />
        <h2>{name}</h2>
        <h3>{description}</h3>
      </Title>
      <Content>
        {images.map(({ id, src, alt }) => <Image key={id} src={src} alt={alt} width={1100} height={1100} />)}
      </Content>
    </ReactModal>
  )
}
