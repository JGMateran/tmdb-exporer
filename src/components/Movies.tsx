import { iPage } from '../lib/tmdb'
import { Popular } from './Popular'

export const Movies = ({ data }: { data: iPage[] }) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8">
      {
        data.map((page) => {
          return page.results.map((movie) => <Popular key={movie.id} {...movie} />)
        })
      }
    </div>
  )
}
