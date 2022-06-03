import { colors } from '../global'

import styled from 'styled-components'

export const Hero = styled.main`
  display: flex;
  gap: 2.5rem;
  flex: 1;
  max-width: 1100px;
  margin: 5rem auto 0 auto;
  padding: 0 1rem;

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
      background-image: url('images/general/border.svg');
      background-size: 52%;
      background-position: right 0 top 0;
      background-repeat: no-repeat;

      span {
        font-style: italic;
      }
    }
  }

  aside {
    img {
      border: 1px solid ${colors.black} !important;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 2.5rem;
  }

  @media (max-width: 436px) {
    section {
      h1 {
        font-size: 1.25rem;
      }

      h2 {
        font-size: 1.14rem;
      }
    }
  }

  @media (max-width: 339px) {
    section {
      h2 {
        background-image: none;
      }
    }
  }
`

export const BackgroundAbout = styled.div`
  display: block;
  width: 100%;
  height: 16rem;
  margin-top: 8rem;
  background-color: ${colors.black};

  @media (max-width: 1000px) {
    height: 12rem;
    margin-top: 6rem;
  }
`

export const About = styled.div`
  display: flex;
  gap: 2.5rem;
  max-width: 1100px;
  margin: -8rem auto 0 auto;
  padding: 0 1rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    flex-basis: 60%;

    article {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;

      h3 {
        font-size: 1.5rem;
        font-weight: 400;
        color: ${colors.white};
        letter-spacing: 1.8px;
        margin-top: 1rem;
      }

      h4 {
        font-size: 0.875rem;
        text-transform: uppercase;
        font-weight: 400;
        color: ${colors.white};
        letter-spacing: 1.8px;
      }

      p {
        font-size: 1rem;
        text-align: justify;
        font-weight: 400;
        color: ${colors.black};
        letter-spacing: 1px;

        + p {
          margin-top: 1rem;
        }
      }

      + article {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
    }

    button {
      margin-top: 2.5rem;
    }
  }

  aside {
    img {
      border: 1px solid ${colors.black} !important;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;

    section {
      width: 60%;

      article {
        h3, h4 {
          color: ${colors.black};
        }

        + article {
          margin-top: 2.5rem;
        }
      }
    }
  }

  @media (max-width: 720px) {
    section {
      width: 80%;
    }
  }

  @media (max-width: 500px) {
    section {
      width: 100%;
      padding: 0 1rem;
    }
  }

  @media (max-width: 325px) {
    section {
      margin-top: -1rem;
    }
  }
`

export const Service = styled.div`
  border-top: 1px solid ${colors.black};
  border-bottom: 1px solid ${colors.black};
  margin-top: 5rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 2.5rem auto;
    padding: 0 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 600;
        color: ${colors.black};
        margin-top: 1rem;
        letter-spacing: 1.8px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2.5rem 0;

      li {
        font-size: 1.25rem;
        font-weight: 400;
        color: ${colors.black};
        letter-spacing: 1.8px;

        span {
          font-style: italic;
        }

        + li {
          margin-top: 1rem;
        }
      }
    }

    @media (max-width: 300px) {
      ul {
        li {
          font-size: 1rem;
        }
      }
    }

    @media (max-width: 249px) {
      ul {
        align-items: flex-start;
      }
    }
  }
`

export const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 0 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.5rem;

    h3 {
      font-size: 1rem;
      text-transform: uppercase;
      text-align: center;
      font-weight: 600;
      color: ${colors.black};
      letter-spacing: 1.8px;
      margin-bottom: 1rem;
    }
  }

  section {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;

      h4 {
        font-size: 1rem;
        text-align: center;
        font-weight: 600;
        color: ${colors.black};
        letter-spacing: 1.8px;
      }

      h5 {
        font-size: 0.875rem;
        text-align: center;
        font-weight: 400;
        color: ${colors.black};
        letter-spacing: 1.8px;
      }

      p {
        font-size: 1rem;
        text-align: justify;
        font-style: italic;
        font-weight: 400;
        color: ${colors.black};
        letter-spacing: 1px;
        margin-top: 1.5rem;
      }

      + article {
        margin-left: 2.5rem;
      }
    }
  }

  @media (max-width: 800px) {
    section {
      flex-direction: column;

      article {
        + article {
          margin: 2.5rem 0 0 0;
        }
      }
    }
  }
`

export const Faq = styled.div`
  border-top: 1px solid ${colors.black};

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1100px;
    margin: 2.5rem auto;
    padding: 0 1rem;

    > h3 {
      font-size: 1rem;
      text-transform: uppercase;
      text-align: center;
      font-weight: 600;
      color: ${colors.black};
      letter-spacing: 1.8px;
      margin-bottom: 2.5rem;
    }
  }
`
