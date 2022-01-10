import type { ReactNode } from 'react'
import { Spinner } from './Spinner'

export const LoadingText = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <div>

      <div className="flex items-center my-10 justify-center">
        <div className="mr-4">
          <Spinner />
        </div>
        <h4 className="text-sm font-bold">
          {children}
        </h4>
      </div>
    </div>
  )
}
