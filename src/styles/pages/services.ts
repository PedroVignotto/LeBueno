import { colors } from '../global'

import { darken } from 'polished'
import styled from 'styled-components'

type Props = { borderTop?: boolean }

export const Title = styled.section<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem;
  border-bottom: 1px solid ${colors.black};
  border-top: 1px solid ${({ borderTop }) => borderTop ? colors.black : 'transparent' };

  h1 {
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: 400;
    color: ${colors.black};
    letter-spacing: 1.8px;
    margin-top: 1rem;
    text-align: center;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 0 1rem;

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;

    + article {
      margin-top: 2.5rem;
    }

    div {
      flex: 1;

      button {
        text-transform: lowercase;
        margin-bottom: 2.5rem;
        font-size: 1rem;
        font-style: italic;
        cursor: auto;
      }

      p, ul, li {
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

      ul {
        margin-top: 1rem;
      }
    }

    img {
      border: 1px solid ${colors.black} !important;
    }
  }

  .visual-identity {
    div {
      button {
        background: ${colors.pink};

        &:hover {
          background: ${darken(0.07, colors.pink)};
        }
      }
    }
  }

  .digital-arts {
    div {
      button {
        color: ${colors.white};
        background: ${colors.gold};

        &:hover {
          background: ${darken(0.07, colors.gold)};
        }
      }
    }
  }

  @media (max-width: 1080px) {
    article {
      gap: 1rem;
    }
  }

  @media (max-width: 1000px) {
    article {
      flex-direction: column;
      gap: 2.5rem;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        button {
          align-self: center;
        }
      }
    }

    .digital-arts {
      flex-direction: column-reverse;
    }
  }
`

export const Process = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 0 1rem;
  gap: 2.5rem;

  img {
    border: 1px solid ${colors.black} !important;
  }

  ul {
    flex-basis: 80%;
  }

  @media (max-width: 600px) {
    ul {
      flex-basis: 90%;
    }
  }
`
