import { Container, Content } from './styles'

import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [visible, setVisible] = useState(false)

  return (
    <Container>
      <Content visible={visible}>
        <Image src="/images/logo-letter-black.svg" alt="Letícia Bueno" width={46} height={35} />
        <button onClick={() => setVisible(!visible)}><span id="bars"></span></button>
        <nav>
          <a href="#">início</a>
          <a href="#">sobre</a>
          <a href="#">serviços</a>
          <a href="#">portfólio</a>
          <a href="#">orçamento</a>
          <a href="#">contato</a>
        </nav>
      </Content>
    </Container>
  )
}
