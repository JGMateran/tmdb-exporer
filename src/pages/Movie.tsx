import { useParams, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useMovie } from '../lib/tmdb'

import { Credits } from '../components/Credits'
import { Backdrop } from '../components/Backdrop'
import { Player } from '../components/Player'

import { useEffect } from 'react'
import { Error } from './Error'
import { Loading } from '../components/Loading'

export const Movie = () => {
  const params = useParams()
  const location = useLocation()

  const { data, error } = useMovie(params.id as string)

  useEffect(
    () => {
      if (!location.hash || !data) return

      const element = document.querySelector(location.hash)

      console.log(element)

      if (element) {
        element.scrollIntoView()
      }
    },
    [data, location]
  )

  if (error) return <Error />

  if (!data) return <Loading />

  return (
    <>
      <Backdrop {...data} />

      <Layout title={data.title}>
        <div className="text-center">
          <h2 id="overview" className="text-3xl font-extrabold mb-4">
            Sinopsis
          </h2>
          <p className="leading-7 dark:text-gray-400 text-gray-700">{data.overview}</p>

          <Player id={data.id} />
          <Credits id={data.id} />
        </div>
      </Layout>
    </>
  )
}
