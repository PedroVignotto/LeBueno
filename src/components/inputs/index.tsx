import { Container } from './styles'

type Props = { name: string, label: string, description?: string, state: any, setState: any }

type InputProps = Props & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export function Input({ name, label, description, state, setState, ...props }: InputProps) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <span>{description}</span>
      <input type="text" id={name} value={state} onChange={e => { setState(e.target.value) }} {...props} />
    </Container>
  )
}

type TextareaProps = Props & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export function Textarea({ name, label, description, state, setState, ...props }: TextareaProps) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <span>{description}</span>
      <textarea rows={5} id={name} value={state} onChange={e => { setState(e.target.value) }} {...props} />
    </Container>
  )
}
