import type { HTMLAttributes } from 'react'

import clsx from 'clsx'

export const Container = ({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={clsx(
        'max-w-3xl mx-auto px-6',
        className
      )}
    />
  )
}
