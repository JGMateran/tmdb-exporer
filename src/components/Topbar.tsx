import { Link } from 'react-router-dom'
import { Container } from './Container'

import { Logo } from './Logo'
import { DarkButton } from './DarkButton'
import { User, Search } from 'react-feather'

export const Topbar = () => {
  return (
    <div className="top-0 right-0 w-full absolute z-10 text-white">
      <Container className="h-14 flex items-center">
        <h2 className="flex-1 text-xl font-extrabold">
          <Link to="/" className="inline-flex items-center">
            <Logo className="mr-4" />
            Explorador
          </Link>
        </h2>

        <div className="flex items-center space-x-6">
          <User />
          <Search />
          <DarkButton />
        </div>
      </Container>
    </div>
  )
}
