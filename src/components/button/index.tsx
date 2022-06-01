import { Container } from './styles'

type Props = { children: string | JSX.Element, type?: 'submit' | undefined }

export function Button({ children, type, ...rest }: Props) {
  return <Container type={type} {...rest}>{children}</Container>
}
