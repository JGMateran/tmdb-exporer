import { Link } from 'react-router-dom'
import { Container } from './Container'

import { Logo } from './Logo'
import { DarkButton } from './DarkButton'

export const Topbar = () => {
  return (
    <div className="top-0 sticky z-10 bg-white/90 dark:bg-gray-900/90 text-black dark:text-white backdrop-blur-sm">
      <Container className="h-14 flex items-center">

        <h2 className="flex-1 text-xl font-extrabold">
          <Link to="/" className="inline-flex items-center">
            <Logo className="mr-4" />
            Explorador
          </Link>
        </h2>

        <div className="flex items-center">
          <DarkButton />
        </div>
      </Container>
    </div>
  )
}
