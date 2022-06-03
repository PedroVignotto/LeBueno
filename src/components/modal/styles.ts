import { colors } from '../../styles/global'

import styled from 'styled-components'

export const Title = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem;

  h3 {
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: 600;
    color: ${colors.black};
    letter-spacing: 1.8px;
    margin-top: 1rem;
    text-align: center;
  }

  h4 {
    font-size: 1rem;
    text-transform: lowercase;
    text-align: center;
    font-weight: 400;
    color: ${colors.black};
    letter-spacing: 1.8px;
    margin-top: 1rem;
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
`
