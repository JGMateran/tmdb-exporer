import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Footer } from './Footer'
import { Topbar } from './Topbar'

import { useLocation } from 'react-router-dom'

type LayoutProps = {
  title: string;
  children: ReactNode,
  description?: string;
  topbar?: 'light' | 'dark'
  image?: string;
}

export const Layout = ({
  children,
  topbar = 'light',
  ...props
}: LayoutProps) => {
  const location = useLocation()

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title>{props.title}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet" />

        <meta name="description" content={props.description ?? 'El mejor lugar para las mejores peliculas'} />
        <link rel="canonical" href={`https://vite-tmdb-explorer.vercel.app${location.pathname}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@jgmateran" />
        <meta name="twitter:domain" content="https://vite-tmdb-explorer.vercel.app" />

        <meta property="og:url" content={`https://vite-tmdb-explorer.vercel.app${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content={props.title} />
        { props.image && <meta property="og:image" content={props.image} /> }
        <meta property="og:description" content={props.description ?? 'El mejor lugar para las mejores peliculas'} />
        <meta property="og:site_name" content="https://vite-tmdb-explorer.vercel.app"></meta>
      </Helmet>

      <Topbar variant={topbar} />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}
