import { useParams } from 'react-router-dom'
import { CombinedCredits } from '../components/CombinedCredits'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'
import { Loading } from '../components/Loading'
import { usePerson } from '../lib/tmdb'
import { Error } from './Error'

export const Person = () => {
  const params = useParams()
  const { data, error } = usePerson(Number(params.id))

  if (error) {
    return <Error />
  }

  if (!data) {
    return <Loading />
  }

  return (
    <Layout
      topbar="dark"
      title={data.name}
      description={data.biography}
      image={`https://image.tmdb.org/t/p//w500/${data.profile_path}`}
    >
      <Container className="pt-14 pb-10">
        <div className="flex items-center flex-col mt-16">
          <div className="h-60 w-60 rounded-full flex flex-col items-center p-1 bg-gradient-to-r from-purple-600 to-blue-600">
            <img
              className="h-full w-full object-cover rounded-full"
              src={`https://image.tmdb.org/t/p//w500/${data.profile_path}`}
              alt={data.name}
            />
          </div>
          <p className="mt-10 dark:text-gray-400 text-gray-600">
            {data.known_for_department}
          </p>
          <h2 className="text-4xl mb-4 mt-3 font-extrabold">
            {data.name}
          </h2>
          <p className="dark:text-gray-300 leading-7 text-center">
            {data.biography}
          </p>
        </div>

        <CombinedCredits id={data.id} />
      </Container>
    </Layout>
  )
}
