import type { iMovie } from '../lib/tmdb'

import { usePopular } from '../lib/tmdb'
import { Layout } from '../components/Layout'
import { Button } from '../components/Button'
import { Backdrop } from '../components/Backdrop'

import { ArrowDownCircle } from 'react-feather'
import useMovieRandom from '../hooks/useMovieRandom'
import { Loading } from '../components/Loading'
import { Error } from './Error'
import { Popular } from '../components/Popular'
import { Container } from '../components/Container'

const meta = {
  title: 'El mejor lugar para las mejores películas'
}

export const Home = () => {
  const {
    data,
    error,
    setSize,
    isValidating
  } = usePopular()

  const { movie } = useMovieRandom(data)

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <>
      <Backdrop {...movie as iMovie} />

      <Layout {...meta}>
        <Container className="py-10">
          <h2 className="font-extrabold text-4xl mb-10">
            Peliculas populares
          </h2>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8">
            {
              data.map((page) => {
                return page.results.map((movie) => {
                  return <Popular key={movie.id} {...movie} />
                })
              })
            }
          </div>

          <div className="mt-8 text-center">
            <Button disabled={isValidating} onClick={() => setSize((prev) => prev + 1)}>
              <ArrowDownCircle className="mr-2" />
              { isValidating ? 'Cargando' : 'Cargar más' }
            </Button>
          </div>
        </Container>
      </Layout>
    </>
  )
}
