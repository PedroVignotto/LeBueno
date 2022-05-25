import { colors } from '../../styles/global/colors'

import styled from 'styled-components'

export const Container = styled.header`
  height: 6rem;
  border-bottom: 1px solid ${colors.black};
`

type Props = { visible: boolean }

export const Content = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  height: 6rem;
  margin: 0 auto;
  padding: 0 1rem;

  img {
    height: 45px !important;
    cursor: pointer;
  }

  button {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;

    a {
      text-transform: lowercase;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${colors.black};
      letter-spacing: 1.8px;
      margin-top: 2px;

      + a {
        margin-left: 1.25rem;
      }

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
  }

  @media (max-width: 610px) {
    button {
      display: flex;
      margin-left: 1rem;
      z-index: 2;
      border: none;
      background: none;
    }

    #bars {
      display: block;
      border-top: 2px solid ${({ visible }) => visible ?  'transparent' : colors.black };
      color: ${({ visible }) => visible ? colors.white : colors.black  };
      width: 20px;

      &::after, &::before {
        content: '';
        display: block;
        position: ${({ visible }) => visible ? 'relative' : '' };
        width: 20px;
        height: 2px;
        background: currentColor;
        color: currentColor;
        margin-top: 5px;
        transition: 0.3s;
      }

      &::after {
        transform: ${({ visible }) => visible ? 'rotate(-135deg)' : 'rotate(0)' };
        top: -7px;
      }

      &::before {
        transform: ${({ visible }) => visible ? 'rotate(135deg)' : 'rotate(0)' };
      }
    }

    nav {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
      width: 100%;
      height: ${props => (props.visible ? '100%' : '0')};
      overflow: hidden;
      top: 0;
      left: 0;
      z-index: 1;
      background-color: ${colors.black};
      transition: 0.5s;

      a {
        letter-spacing: 1.8px;
        font-size: 1.25rem;
        margin: 0.75rem 0;
        color: ${colors.white};

        + a {
          margin-left: 0;
        }

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
    }
  }
`

