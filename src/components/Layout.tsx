import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Footer } from './Footer'
import { Topbar } from './Topbar'

export const Layout = ({
  children,
  topbar = 'light',
  ...props
}: {
  title: string;
  children: ReactNode,
  topbar?: 'light' | 'dark'
}) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>

      <Topbar variant={topbar} />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}
