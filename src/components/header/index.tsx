import { Container, Content } from './styles'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [visible, setVisible] = useState(false)

  return (
    <Container id="header">
      <Content visible={visible}>
        <Link href="/"><Image src="/images/logo-letter-black.svg" alt="Letícia Bueno" width={46} height={35} /></Link>
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
