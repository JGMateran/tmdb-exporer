import { useParams, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useMovie } from '../lib/tmdb'

import { Credits } from '../components/Credits'
import { Backdrop } from '../components/Backdrop'
import { Player } from '../components/Player'

import { useEffect } from 'react'
import { Error } from './Error'
import { Loading } from '../components/Loading'
import { Container } from '../components/Container'

export const Movie = () => {
  const params = useParams()
  const location = useLocation()

  const { data, error } = useMovie(Number(params.id))

  useEffect(
    () => {
      if (!location.hash || !data) return

      const element = document.querySelector(location.hash)

      if (element) {
        element.scrollIntoView()
      }
    },
    [data, location]
  )

  if (error) return <Error />

  if (!data) return <Loading />

  return (
    <Layout title={data.title}>
      <Backdrop {...data} />

      <Container className="py-10">
        <div className="text-center">
          {
            data.overview && (
              <>
                <h2 id="overview" className="text-3xl font-extrabold mb-4">
                  Sinopsis
                </h2>
                <p className="leading-7 dark:text-gray-400 text-gray-700">
                  {data.overview}
                </p>
              </>
            )
          }

          <Player id={data.id} />
          <Credits id={data.id} />
        </div>
      </Container>
    </Layout>
  )
}
