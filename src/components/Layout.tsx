import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Container } from './Container'
import { Topbar } from './Topbar'

export const Layout = ({
  title,
  children
}: {
  title: string;
  children: ReactNode
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://reburn.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@midudev" />
        <meta name="twitter:domain" content="reburn.dev" />
        <meta name="twitter:image" content="/favicon/apple-touch-icon.png" />
        <meta name="twitter:site" content="@reburndev" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reburn.dev/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content="" />
        <meta property="og:image" content="/favicon/apple-touch-icon.png" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="reburn.dev"></meta>
      </Helmet>

      <div className="min-h-screen text-black dark:bg-gray-900 dark:text-white">
        <Topbar />
        <Container className="py-10">
          {children}
        </Container>
      </div>
    </>
  )
}
