import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const CustomLink = ({
  to,
  children
}: {
  to: string;
  children: ReactNode;
}) => {
  return (
    <Link
      to={to}
      className="active:scale-95 focus:ring-2 ring-blue-300 focus:outline-none uppercase font-semibold inline-flex items-center border text-sm border-transparent h-11 px-4 rounded-md bg-blue-600 text-white"
    >
      {children}
    </Link>
  )
}
