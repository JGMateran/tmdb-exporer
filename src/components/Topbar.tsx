import { Link } from 'react-router-dom'
import { Container } from './Container'

import { Logo } from './Logo'
import { DarkButton } from './DarkButton'
import { User, Search } from 'react-feather'

import { Searcher } from './Searcher'
import { useToggle } from '../hooks/useToggle'

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
