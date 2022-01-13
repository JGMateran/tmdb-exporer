import { Container } from './Container'
import { Heart, Coffee } from 'react-feather'

export const Footer = () => {
  return (
    <Container>
      <div className="py-8 border-t border-gray-300 dark:border-gray-800">
        <p className="flex items-center justify-center">
          Hecho con <Heart className="mx-2" /> y mucho <Coffee className="mx-2" />
        </p>
      </div>
    </Container>
  )
}
