import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useMovie } from '../lib/tmdb'
import { Error } from './Error'

import { Loading } from '../components/Loading'

const Backdrop = ({ name }: { name: string }) => {
  return (
    <div className="relative after:pt-[56.25%] after:block">
      <img
        className="absolute inset-0 block w-full object-cover"
        src={`https://image.tmdb.org/t/p/w500/${name}`}
        alt={name}
      />
    </div>
  )
}

export const Movie = () => {
  const params = useParams()

  const { data, error } = useMovie(params.id as string)

  useEffect(
    () => {
      console.log(data)
    },
    [data]
  )

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <Layout title={data.title}>
      <Backdrop name={data.backdrop_path} />

      <div className="text-center">
        <h2 className="text-3xl font-extrabold mt-8 mb-4">{data.title}</h2>
        <p className="leading-7 dark:text-gray-400 text-gray-700">{data.overview}</p>
      </div>
    </Layout>
  )
}
