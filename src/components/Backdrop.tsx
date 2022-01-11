import { Play, Info } from 'react-feather'
import { Container } from './Container'
import { iMovie } from '../lib/tmdb'

import {
  format,
  parseISO
} from 'date-fns'

import { es } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import React from 'react'

function formatDate (date: string) {
  return format(parseISO(date), 'dd MMMM yyyy', { locale: es })
}

const CustomLink = ({
  to,
  children
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      className="active:scale-95 focus:ring-2 ring-blue-300 focus:outline-none uppercase font-semibold inline-flex items-center border text-sm border-transparent h-11 px-4 rounded-md bg-blue-600 text-white"
    >
      {children}
    </Link>
  )
}

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
            <div className="mb-4 text-gray-200">
              {props.release_date && formatDate(props.release_date)}
            </div>
            <h2 className="mb-8 text-4xl font-extrabold">
              {props.title}
            </h2>
            <div className="flex sm:space-x-2 sm:space-y-0 sm:items-center sm:flex-row flex-col space-y-2">
              <div>
                <CustomLink to={`/movie/${props.id}`}>
                  <Play className="mr-3" />
                  Reproducir
                </CustomLink>
              </div>
              <div>
                <CustomLink to={`/movie/${props.id}`} >
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
