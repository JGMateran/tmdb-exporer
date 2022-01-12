import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
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

        {children}
      </div>
    </>
  )
}
