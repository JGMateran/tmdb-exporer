import { Play, Info } from 'react-feather'
import { Container } from './Container'
import { CustomLink } from './CustomLink'

import { iMovie } from '../lib/tmdb'

import { formatDate } from '../utils/formatDate'

export const Backdrop = (props: iMovie) => {
  return (
    <div className="text-white bg-gray-800 pt-14 relative">
      {
        props.backdrop_path && (
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.backdrop_path}`}
            alt={props.title}
          />
        )
      }

      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900/40 to-gray-900"></div>

      <div className="relative">
        <Container className="h-96 justify-center flex flex-col">
          <div>
            <div className="mb-8 text-gray-200 text-sm">
              {props.release_date && formatDate(props.release_date)}
            </div>
            <h2 className="mb-8 text-4xl font-extrabold">
              {props.title}
            </h2>
            <div className="flex sm:space-x-2 sm:space-y-0 sm:items-center sm:flex-row flex-col space-y-2">
              <div>
                <CustomLink to={`/movie/${props.id}#overview`}>
                  <Play className="mr-3" />
                  Reproducir
                </CustomLink>
              </div>
              <div>
                <CustomLink to={`/movie/${props.id}#overview`} >
                  <Info className="mr-3" />
                  Mas información
                </CustomLink>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
