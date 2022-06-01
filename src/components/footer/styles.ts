import { colors } from '../../styles/global'

import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.footer`
  border-top: 1px solid ${colors.black};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-basis: 80%;
    height: 100%;
    border-right: 1px solid ${colors.black};
    padding: 2.5rem 1.5rem 2.5rem 0;

    strong {
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 400;
      color: ${colors.black};
      letter-spacing: 1.8px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      span {
        display: flex;
        align-items: flex-end;

        + span {
          margin-top: 0.75rem;
        }

        a {
          font-size: 0.875rem;
          font-weight: 400;
          color: ${colors.black};
          letter-spacing: 1.8px;

          &::after {
            content: '';
            display: block;
            height: 2px;
            width: 0;
            transition: 0.5s;
            background: ${colors.pink};
          }

          &:hover::after {
            width: 100%;
          }
        }

        svg {
          width: 1.25rem;
          height: 1.25rem;
          color: ${colors.black};
          margin-left: 0.5rem;
        }
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 20%;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${colors.blue};
      border: 1px solid ${colors.black};
      padding: 0.25rem;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${colors.black};
      }

      &:hover {
        background: ${darken(0.07, colors.blue)}
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;

    section {
      flex-direction: column-reverse;
      border-right: none;
      padding: 2.5rem 0;
      flex-basis: 100%;

      strong {
        margin-top: 2.5rem;
      }
    }

    aside {
      margin-top: 2.5rem;
      flex-basis: 100%;
    }
  }
`
