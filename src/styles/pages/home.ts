import { colors } from '../global'

import styled from 'styled-components'

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const HeroContent = styled.main`
  display: flex;
  gap: 2.25rem;
  flex: 1;
  margin-top: 5rem;

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
  background-size: 100px 100px;
  background-position: top;

  @media (max-width: 1000px) {
    height: 12rem;
    margin-top: 6rem;
  }
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: -3rem auto 0 auto;
  padding: 0 1rem;
`

export const AboutContent = styled.div`
  display: flex;
  gap: 2.25rem;
  margin-top: -5rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    flex-basis: 60%;


    .about-me-title {
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
    }

    .about-me-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      p {
        font-size: 1rem;
        text-align: justify;
        font-weight: 400;
        color: ${colors.black};
        letter-spacing: 1.8px;

        + p {
          margin-top: 1rem;
        }
      }
    }

    button {
      margin-top: 2rem;
    }
  }

  aside {
    img {
      border: 1px solid ${colors.black} !important;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;

    section {
      margin-top: 1rem;
      width: 60%;

      .about-me-text {
        margin-top: 4rem;
      }
    }

    aside {
      display: none;
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

  @media (max-width: 397px) {
    section {
      .about-me-title {
      }
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
  margin-top: 5rem;
`

export const ServiceContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 1100px;
  height: 400px;
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
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      p {
        font-size: 1.25rem;
        font-weight: 400;
        color: ${colors.black};
        letter-spacing: 1.8px;

        span {
          font-style: italic;
        }
      }

      + li {
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 300px) {
    ul {
      li {
        p {
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 249px) {
    ul {
      align-items: flex-start;
    }
  }
`
