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

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;

    label {
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 400;
      color: ${colors.black};
      letter-spacing: 1.8px;
    }

    span {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${colors.black};
      letter-spacing: 1px;
    }

    input, textarea {
      border: 1px solid ${colors.black};
      padding: 0.75rem;
      background: ${colors.white};
    }

    textarea {
      resize: none;
    }
  }

  button {
    align-self: flex-start;
  }
`
