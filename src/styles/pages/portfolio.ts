import { colors } from '../global'

import styled from 'styled-components'

export const Title = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem;

  h1 {
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: 600;
    color: ${colors.black};
    letter-spacing: 1.8px;
    margin-top: 1rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 400;
    color: ${colors.black};
    letter-spacing: 1px;
    margin-top: 1rem;
    max-width: 40ch;
    margin-top: 1rem;
  }
`
