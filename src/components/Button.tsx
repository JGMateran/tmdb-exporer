import type { HTMLAttributes } from 'react'
import clsx from 'clsx'

export const Button = ({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx(
        'dark:border-gray-400 focus:outline-none focus:bg-gray-800/90 active:scale-95 h-11 border px-4 rounded-md text-sm font-extrabold',
        className
      )}
    />
  )
}
