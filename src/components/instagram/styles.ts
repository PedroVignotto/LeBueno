import { colors } from '../../styles/global'

import styled from 'styled-components'

export const Container = styled.div`
  border-top: 1px solid ${colors.black};
  background: ${colors.gold};
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;

  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    color: ${colors.white};
    letter-spacing: 1.8px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 2.5rem 0;
    width: 100%;

    a {
      max-width: 250px;
      max-height: 250px;

      img {
        border: 1px solid ${colors.black} !important;
      }
    }
  }

  @media (max-width: 1000px) {
    div {
      grid-template-columns: repeat(2, 1fr);
      width: auto;
    }
  }

  @media (max-width: 500px) {
    div {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
