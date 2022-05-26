import { colors } from '../global'

import styled from 'styled-components'

export const Wellcome = styled.div`
  background: ${colors.black};
  padding: 5rem 0;
`

export const WellcomeContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    text-transform: lowercase;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 1.8px;
    color: ${colors.white};
    text-align: center;
    max-width: 40ch;
  }
`
