import { Container } from './styles'

import { FiChevronRight } from 'react-icons/fi'
import { useState } from 'react'

type Props = { title: string, description: string }

export function Dropdown({ title, description }: Props) {
  const [handleOpenDescription, setHandleOpenDescription] = useState(false)

  return (
    <Container opened={handleOpenDescription}>
      <div>
        <h3>{title}</h3>
        <span><FiChevronRight onClick={() => setHandleOpenDescription(!handleOpenDescription)} /></span>
      </div>
      <p>{description}</p>
    </Container>
  )
}
