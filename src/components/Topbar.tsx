import { Link } from 'react-router-dom'
import { Container } from './Container'

import { Logo } from './Logo'
import { DarkButton } from './DarkButton'

import { Searcher } from './Searcher'
import { useToggle } from '../hooks/useToggle'

import clsx from 'clsx'

export const Topbar = ({
  variant = 'dark'
}: {
  variant?: 'dark' | 'light';
}) => {
  const [open, setOpen] = useToggle(false)

  const classes = clsx(
    'top-0 right-0 w-full absolute z-50 ',
    {
      'text-white bg-gray-900': variant === 'dark',
      'text-white': variant === 'light'
    }
  )

  return (
    <>
      <Searcher
        active={open}
        onClose={setOpen.off}
       />

      <div className={classes}>
        <Container className="h-14 flex items-center">
          <h2 className="flex-1 text-xl font-extrabold">
            <Link to="/" className="inline-flex items-center">
              <Logo className="mr-4" />
              Explorador
            </Link>
          </h2>

          <div className="flex items-center space-x-6">
            <DarkButton />
          </div>
        </Container>
      </div>
    </>
  )
}
