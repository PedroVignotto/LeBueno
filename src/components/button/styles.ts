import { colors } from '../../styles/global'

import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 1.8px;
  color: ${colors.black};
  background: ${colors.blue};
  border: 1px solid ${colors.black};
  padding: 1rem;
  width: auto;

  svg {
    height: 1.10rem;
    width: 1.10rem;
    margin-right: 1rem;
  }

  &:hover {
    background: ${darken(0.07, colors.blue)}
  }
`

