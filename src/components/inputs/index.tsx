import { Container } from './styles'

type Props = { label: string, description?: string, state: any, setState: any }

type InputProps = Props & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export function Input({ label, description, state, setState, ...props }: InputProps) {
  return (
    <Container>
      <label>{label}</label>
      <span>{description}</span>
      <input type="text" value={state} onChange={e => { setState(e.target.value) }} {...props} />
    </Container>
  )
}

type TextareaProps = Props & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export function Textarea({ label, description, state, setState, ...props }: TextareaProps) {
  return (
    <Container>
      <label>{label}</label>
      <span>{description}</span>
      <textarea rows={5} value={state} onChange={e => { setState(e.target.value) }} {...props} />
    </Container>
  )
}
