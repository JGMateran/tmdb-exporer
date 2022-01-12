import { useEffect } from 'react'
import { Layout } from '../components/Layout'
import { Loading } from '../components/Loading'
import { usePeople } from '../lib/tmdb'
import { Error } from './Error'

const meta = {
  title: 'Lista de personas'
}

export const People = () => {
  const {
    data,
    error
  } = usePeople()

  useEffect(
    () => {
      if (!data) return
    },
    [data]
  )

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <Layout {...meta}>
      <h2>
        Hola mundo
      </h2>
    </Layout>
  )
}
