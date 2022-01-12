import type { ReactNode } from 'react'
import { Coffee, Heart } from 'react-feather'
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
      </Helmet>

      <div className="min-h-screen text-black dark:bg-gray-900 dark:text-white">
        <Topbar />

        <main>
          {children}
        </main>

        <Container>
          <div className="py-8 border-t border-gray-300 dark:border-gray-800">
            <p className="flex items-center justify-center">
              Hecho con <Heart className="mx-2" /> y mucho <Coffee className="mx-2" />
            </p>
          </div>
        </Container>
      </div>
    </>
  )
}
