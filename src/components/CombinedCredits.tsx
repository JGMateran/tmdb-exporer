import { useMovieCredits } from '../lib/tmdb'
import { Error } from '../pages/Error'
import { Popular } from './Popular'

export const CombinedCredits = ({ id }: { id: number; }) => {
  const { data, error } = useMovieCredits(id)

  if (error) return <Error />
  if (!data) return null

  return (
    <div className="mt-10 grid md:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8">
      {
        data.cast.map((movie) => {
          if (!movie.poster_path || !movie.release_date) return null

          return (
            <Popular key={movie.id} {...movie} />
          )
        })
      }
    </div>
  )
}
