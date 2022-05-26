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

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 0 1rem;
`

export const AboutMeContent = styled.section`
  display: flex;
  flex-direction: column;

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    margin-top: 2.5rem;

    div {
      flex: 1;

      p {
        font-size: 1rem;
        text-align: justify;
        font-weight: 400;
        color: ${colors.black};
        letter-spacing: 1.8px;

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
    article {
      gap: 1rem;
    }
  }

  @media (max-width: 800px) {
    article {
      flex-direction: column;
      gap: 2.5rem;

      + article {
        flex-direction: column-reverse;
      }
    }
  }
`
