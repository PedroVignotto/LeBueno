import { HeaderContainer, HeaderContent, Links, Image } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src="/images/logo-header.svg" alt="Letícia Bueno" />
        <Links>
          <button>menu</button>
          <a href="#">início</a>
          <a href="#">sobre</a>
          <a href="#">serviços</a>
          <a href="#">depoimentos</a>
          <a href="#">orçamento</a>
          <a href="#">contato</a>
        </Links>
      </HeaderContent>
    </HeaderContainer>
  )
}
