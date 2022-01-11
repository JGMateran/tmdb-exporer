import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
}

export const Button = ({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}

      className={clsx(
        'active:scale-95 focus:ring-2 ring-blue-300 focus:outline-none uppercase font-semibold inline-flex items-center border text-sm border-transparent h-11 px-4 rounded-md',
        {
          'bg-blue-600 text-white': variant === 'primary',
          'border-blue-600 bg-transparent text-blue-600': variant === 'outline'
        },
        className
      )}
    />
  )
}
