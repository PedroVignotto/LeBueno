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

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 0 1rem;

  img {
    border: 1px solid ${colors.black} !important;
    cursor: pointer;
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  @media (max-width: 950px) {
    div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 610px) {
    div {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
`
