import { Container } from './styles'

type Props = { type?: 'submit' | undefined, disabled?: boolean, children: string | JSX.Element }

export function Button({ disabled, type, children, ...rest }: Props) {
  return <Container type={type} {...rest} disabled={disabled}>{children}</Container>
}
