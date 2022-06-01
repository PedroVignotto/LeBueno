import { colors } from '../global'

import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: c;
  justify-content: center;
  gap: 2.25rem;
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 0 1rem;

  section {
    display: flex;
    gap: 1rem;
  }

  button {
    align-self: flex-start;
  }
`
