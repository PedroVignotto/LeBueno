import { Container } from './styles'

type Props = { children: string | JSX.Element }

export function Button({ children, ...rest }: Props) {
  return <Container {...rest}>{children}</Container>
}
