import { colors } from '../../styles/global/colors'

import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  margin-top: 2rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 1.8px;
  color: ${colors.black};
  background: ${colors.blue};
  border: 1px solid ${colors.black};
  padding: 1rem;
  width: auto;

  &:hover {
    background: ${darken(0.07, colors.blue)}
  }
`

