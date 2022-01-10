import { Link } from 'react-router-dom'
import { iMovie } from '../lib/tmdb'
import { Poster } from './Poster'

export const Popular = (props: iMovie) => {
  return (
    <Link to={`movie/${props.id}`}>
      <Poster name={props.poster_path} />
      <div className="text-base font-extrabold p-4 truncate">
        {props.title}
      </div>
    </Link>
  )
}
