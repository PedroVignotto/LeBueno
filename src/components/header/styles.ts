import { colors } from '../../styles/colors'

import ImageNext from 'next/image'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6rem;
  border-bottom: 1px solid ${colors.black};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  height: 6rem;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Image = styled(ImageNext).attrs({ width: '455px', height: '35px' })``

export const Links = styled.nav`
  height: 6rem;

  button {
    display: none;
  }

  a {
    height: 6rem;
    line-height: 6rem;
    text-transform: lowercase;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${colors.black};
    letter-spacing: 1.8px;

    + a {
      margin-left: 1.25rem;
    }

    &:hover {
      border-bottom: 2px solid ${colors.pink};
    }
  }
`
