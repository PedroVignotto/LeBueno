import { Container, Content } from './styles'

import { FiMail, FiInstagram, FiChevronUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Footer() {
  return (
    <Container>
      <Content>
        <section>
          <strong>© 2022 letícia bueno</strong>
          <div>
            <span>
              <a href='https://wa.me/5511937054095' target="_blank" rel="noreferrer">(11) 93705-4095</a><FaWhatsapp />
            </span>
            <span>
              <a href='https://www.instagram.com/solstudiosdesign/' target="_blank" rel="noreferrer">@lebuenodesigner</a><FiInstagram />
            </span>
            <span>
              <a href='mailto:hello@lebueno.com.br' target="_blank" rel="noreferrer">hello@lebueno.com.br</a><FiMail />
            </span>
          </div>
        </section>
        <aside>
          <a href="#header"><FiChevronUp /></a>
        </aside>
      </Content>
    </Container>
  )
}
