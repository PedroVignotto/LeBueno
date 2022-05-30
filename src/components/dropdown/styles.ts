import { colors } from '../../styles/global'

import styled from 'styled-components'

type Props = { opened: boolean }

export const Container = styled.li<Props>`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.gold};
  padding: 0.75rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 0.875rem;
      text-transform: uppercase;
      font-weight: 600;
      color: ${colors.gold};
      letter-spacing: 1.8px;
    }

    span {
      svg {
        width: 1.25rem;
        height: 1.25rem;
        color: ${colors.gold};
        cursor: pointer;
        margin-left: 1rem;

        transform: ${({ opened }) => opened ? 'rotate(90deg)' : 'rotate(0)' };
        transition: 0.25s;
      }
    }
  }

  p {
    display: flex;
    font-size: 1rem;
    text-align: justify;
    font-weight: 400;
    color: ${colors.black};
    letter-spacing: 1px;
    margin-top: 1rem;
    display: ${({ opened }) => opened ? 'block' : 'none'};
  }
`
