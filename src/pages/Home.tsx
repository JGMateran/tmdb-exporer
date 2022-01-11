import type { iMovie } from '../lib/tmdb'

import { usePopular } from '../lib/tmdb'
import { Layout } from '../components/Layout'
import { Movies } from '../components/Movies'
import { Loading } from '../components/Loading'
import { Button } from '../components/Button'
import { Backdrop } from '../components/Backdrop'

import { ArrowDownCircle } from 'react-feather'
import useMovieRandom from '../hooks/useMovieRandom'

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

  if (error) {
    return (
      <h2>
        Error
      </h2>
    )
  }

  if (!data) return <Loading />

  return (
    <>
      <Backdrop {...movie as iMovie} />

      <Layout {...meta}>
        <h2 className="font-extrabold text-4xl mb-10">
          Peliculas populares
        </h2>
        <Movies data={data} />

        <div className="mt-8 text-center">
          <Button disabled={isValidating} onClick={() => setSize((prev) => prev + 1)}>
            <ArrowDownCircle className="mr-2" />
              {
                isValidating ? 'Cargando' : 'Cargar más'
              }
          </Button>
        </div>
      </Layout>
    </>
  )
}
