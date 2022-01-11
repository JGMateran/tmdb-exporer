import { Link } from 'react-router-dom'
import { iMovie } from '../lib/tmdb'
import { formatDate } from '../utils/formatDate'
import { Poster } from './Poster'

export const Popular = (props: iMovie) => {
  return (
    <Link
      className="focus:outline-none focus:scale-105 hover:scale-105 duration-150"
      to={`movie/${props.id}`}
    >
      <div className="relative">
        <Poster name={props.poster_path} />
        <div className="absolute top-0 w-full p-2 text-right inset-x-0">
          <div className="text-xs py-1 px-2 inline-block rounded bg-red-600 text-white">
            {props.vote_average}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-base font-extrabold truncate">
          {props.title}
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          {formatDate(props.release_date)}
        </div>
      </div>
    </Link>
  )
}
