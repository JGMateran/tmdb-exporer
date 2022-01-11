import { useState, useEffect } from 'react'
import type { iMovie, iPage } from '../lib/tmdb'

import random from 'just-random'
import flatten from 'just-flatten-it'

export default function useMovieRandom (data: iPage[] | undefined) {
  const [movie, setMovie] = useState<iMovie>()

  const getRandom = () => {
    if (!data) return

    const movieRandom = random(flatten(data.map((page) => page.results)))

    setMovie(movieRandom)
  }

  useEffect(
    () => {
      if (!data) return
      getRandom()
    },
    [data]
  )

  return {
    movie,
    reload: getRandom
  }
}
