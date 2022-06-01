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
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.25rem;
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 0 1rem;

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    + section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  button {
    align-self: flex-start;
  }

  @media (max-width: 720px) {
    section {
      gap: 2.25rem;

      + section {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }

  @media (max-width: 550px) {
    section {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
