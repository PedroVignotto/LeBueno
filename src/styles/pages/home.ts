import { colors } from '../global/colors'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 5rem auto 0 auto;
  padding: 0 1rem;
`

export const Hero = styled.main`
  display: flex;
  gap: 2.25rem;
  flex: 1;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
      text-transform: lowercase;
      font-size: 1.5rem;
      font-weight: 400;
      color: ${colors.black};
      letter-spacing: 1.8px;
      margin: 4rem 0 6rem;

      span {
        font-style: italic;
      }
    }

    h2 {
      text-transform: lowercase;
      font-size: 1.25rem;
      font-weight: 400;
      color: ${colors.black};
      letter-spacing: 1.8px;
      background-image: url('images/border.svg');
      background-size: 52%;
      background-position: right 0 top 0;
      background-repeat: no-repeat;

      span {
        font-style: italic;
      }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media (max-width: 350px) {
    h2 {
      background-image: none !important;
    }
  }
`
