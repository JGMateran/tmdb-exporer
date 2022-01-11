import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useMovie } from '../lib/tmdb'
import { Error } from './Error'

import { Loading } from '../components/Loading'
import { Credits } from '../components/Credits'
import { Backdrop } from '../components/Backdrop'

export const Movie = () => {
  const params = useParams()

  const { data, error } = useMovie(params.id as string)

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <>
      <Backdrop {...data} />

      <Layout title={data.title}>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Sinopsis
          </h2>
          <p className="leading-7 dark:text-gray-400 text-gray-700">{data.overview}</p>
        </div>

        <Credits id={data.id} />
      </Layout>
    </>
  )
}
