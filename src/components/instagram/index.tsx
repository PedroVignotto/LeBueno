import { Container, Content } from './styles'

import Image from 'next/image'

export function Instagram() {
  return (
    <Container>
      <Content>
        <h3>acompanhe meu dia a dia no instagram: </h3>
        <div>
          <a href="https://www.instagram.com/p/CdySLzsrfLd/" target="_blank" rel="noreferrer">
            <Image src="/images/instagram-project-1.png" alt="ADRI MÜLLER PHOTOGRAPHY" width={250} height={250} />
          </a>
          <a href="https://www.instagram.com/p/Cc6VcGXsvga/" target="_blank" rel="noreferrer">
            <Image src="/images/instagram-project-2.png" alt="DEVIR ARQUITETURA" width={250} height={250} />
          </a>
          <a href="https://www.instagram.com/p/CcgaA8ZMZZZ/" target="_blank" rel="noreferrer">
            <Image src="/images/instagram-project-3.png" alt="CERES VETERINÁRIA" width={250} height={250} />
          </a>
          <a href="https://www.instagram.com/p/CZhROrSMzIh/" target="_blank" rel="noreferrer">
            <Image src="/images/instagram-project-4.png" alt="COM AL[MACRAMÊ]" width={250} height={250} />
          </a>
        </div>
      </Content>
    </Container>
  )
}
