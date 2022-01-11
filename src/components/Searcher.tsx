import { useRef, useEffect } from 'react'
import clsx from 'clsx'

import { Container } from './Container'
import { Search, X } from 'react-feather'

export const Searcher = ({
  active = true,
  onClose = () => {}
}: {
  active?: boolean,
  onClose?: () => void
}) => {
  const searcher = useRef<HTMLInputElement>(null)

  useEffect(
    () => {
      if (!searcher.current) return

      if (active) {
        searcher.current.focus()
      }
    },
    []
  )

  return (
    <div className={clsx(
      'absolute top-0 pt-16 mx-auto duration-200 inset-x-0 z-40',
      {
        'translate-y-0': active,
        '-translate-y-full': !active
      }
    )}>
      <Container className="w-full text-black">
        <div className="px-6 rounded-lg bg-white/70 backdrop-blur-sm relative flex items-center h-16">
          <Search />
          <input
            ref={searcher}
            type="text"
            placeholder="¿Que estás buscando?"
            className="bg-transparent px-4 h-12 w-full rounded-md text-black placeholder-gray-900 focus:outline-none"
          />
          <button onClick={onClose}>
            <X />
          </button>
        </div>
      </Container>
    </div>
  )
}
