import { usePopular } from '../lib/tmdb'
import { Layout } from '../components/Layout'
import { Movies } from '../components/Movies'
import { Loading } from '../components/Loading'
import { Button } from '../components/Button'

const meta = {
  title: 'El mejor lugar para las mejores películas'
}

export const Home = () => {
  const {
    data,
    error,
    setSize
  } = usePopular()

  if (error) {
    return (
      <h2>
        Error
      </h2>
    )
  }

  if (!data) return <Loading />

  return (
    <Layout {...meta}>
      <h2 className="text-4xl font-extrabold mb-6">
        Peliculas populares
      </h2>

      <Movies data={data} />

      <div className="mt-8 text-center">
        <Button onClick={() => setSize((prev) => prev + 1)}>
          Ver mas
        </Button>
      </div>
    </Layout>
  )
}
