
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface Props extends LinkProps { children: ReactElement }

export function ActiveLink({ children, ...rest }: Props) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? 'active' : ''

  return <Link {...rest}>{cloneElement(children, { className })}</Link>
}
