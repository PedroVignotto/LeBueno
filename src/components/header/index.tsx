import { Container, Content } from './styles'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [visible, setVisible] = useState(false)

  return (
    <Container id="header">
      <Content visible={visible}>
        <Link href="/"><a><Image src="/images/logo/letter-black.svg" alt="Letícia Bueno" width={46} height={35} /></a></Link>
        <button onClick={() => setVisible(!visible)}><span id="bars"></span></button>
        <nav>
          <Link href="/"><a onClick={() => setVisible(false)}>início</a></Link>
          <Link href="/about"><a onClick={() => setVisible(false)}>sobre</a></Link>
          <a href="#">serviços</a>
          <a href="#">portfólio</a>
          <a href="#">orçamento</a>
          <a href="#">contato</a>
        </nav>
      </Content>
    </Container>
  )
}
