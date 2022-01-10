import useSWRImmutable from 'swr/immutable'
import useSWRInfinite from 'swr/infinite'

const API_KEY = import.meta.env.VITE_API_KEY

export interface iMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export function createBaseUrl (url: string) {
  return `https://api.themoviedb.org/3${url}?api_key=${API_KEY}&language=es-ES`
}

export interface iMoviePage {
  page: number;
  results: iMovie[];
  total_pages: number;
  total_results: number;
}

export function movieFetcher (url: string) {
  return fetch(createBaseUrl(url))
    .then((res) => res.json())
}

export function useMovie (id: string) {
  return useSWRImmutable<iMovie>(`/movie/${id}`, movieFetcher)
}

export function popularFetcher (url: string) {
  return fetch(`${createBaseUrl('/movie/popular')}${url}`)
    .then((res) => res.json())
}

export const getKey = (index: number) => {
  return `&page=${index + 1}`
}

export function usePopular () {
  return useSWRInfinite<iMoviePage>(getKey, popularFetcher)
}
