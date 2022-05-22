import { HeaderContainer, HeaderContent } from './styles'

import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [visible, setVisible] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent visible={visible}>
        <Image src="/images/logo-horizontal.svg" alt="Letícia Bueno" width={420} height={35} />
        <button onClick={() => setVisible(!visible)}><span id="bars"></span></button>
        <nav>
          <a href="#">início</a>
          <a href="#">sobre</a>
          <a href="#">serviços</a>
          <a href="#">depoimentos</a>
          <a href="#">orçamento</a>
          <a href="#">contato</a>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
