import { colors } from '../global'

import { darken } from 'polished'
import styled from 'styled-components'

export const Title = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.black};
  margin: 0 auto;
  padding: 5rem 1rem;

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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 0 1rem;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    margin-top: 2.5rem;

    article {
      flex: 1;

      p {
        font-size: 1rem;
        text-align: justify;
        font-weight: 400;
        color: ${colors.black};
        letter-spacing: 1px;

        + p {
          margin-top: 1rem;
        }

        span {
          font-style: italic;
        }
      }
    }

    img {
      border: 1px solid ${colors.black} !important;
    }
  }

  @media (max-width: 1080px) {
    section {
      gap: 1rem;
    }
  }

  @media (max-width: 800px) {
    section {
      flex-direction: column;
      gap: 2.5rem;

      + section {
        flex-direction: column-reverse;
      }
    }
  }
`

export const Values = styled.div`
  border-top: 1px solid ${colors.black};

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 2.5rem auto;
    padding: 0 1rem;

    h3 {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 600;
      color: ${colors.black};
      letter-spacing: 1.8px;
      margin-bottom: 2.5rem;
    }

    div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem 2rem;

      button {
        text-transform: lowercase;
        background: ${colors.pink};
        font-style: italic;
        cursor: auto;

        &:hover {
          background: ${darken(0.07, colors.pink)};
        }
      }
    }

    @media (max-width: 540px) {
      div {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 380px) {
      div {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`
