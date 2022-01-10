import type { HTMLAttributes } from 'react'
import clsx from 'clsx'

export const Logo = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={clsx(
        'dark:bg-white dark:text-gray-900 rounded-md w-6 h-6 text-sm font-extrabold flex items-center justify-center bg-gray-900 text-white',
        className
      )}
    >
      R
    </div>
  )
}
