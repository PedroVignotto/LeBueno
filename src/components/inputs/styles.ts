import { colors } from '../../styles/global'

import styled from 'styled-components'

export const Container = styled.div`
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
`
