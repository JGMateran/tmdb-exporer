import { Link } from 'react-router-dom'
import { Container } from './Container'

import { Logo } from './Logo'
import { DarkButton } from './DarkButton'
import { User, Search, X } from 'react-feather'

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

function useToggle (initial: boolean): [
  boolean,
  {
    on: () => void;
    off: () => void;
    toggle: () => void;
  },
] {
  const [isActive, setIsActive] = useState<boolean>(initial)

  const toggle = () => setIsActive(!isActive)
  const on = () => setIsActive(true)
  const off = () => setIsActive(false)

  return [
    isActive,
    { on, off, toggle }
  ]
}

const Searcher = ({
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

export const Topbar = () => {
  const [open, setOpen] = useToggle(false)

  return (
    <>
      <Searcher
        active={open}
        onClose={setOpen.off}
       />

      <div className="top-0 right-0 w-full absolute z-50 text-white">
        <Container className="h-14 flex items-center">
          <h2 className="flex-1 text-xl font-extrabold">
            <Link to="/" className="inline-flex items-center">
              <Logo className="mr-4" />
              Explorador
            </Link>
          </h2>

          <div className="flex items-center space-x-6">
            <User />
            <button onClick={setOpen.toggle}>
              <Search />
            </button>
            <DarkButton />
          </div>
        </Container>
      </div>
    </>
  )
}
