import useSWRImmutable from 'swr/immutable'
import useSWRInfinite from 'swr/infinite'

const API_KEY = import.meta.env.VITE_API_KEY

export interface iVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number
  type: string;
}

interface iVideoPage {
  id: number;
  results: iVideo[];
}

export interface iCrew {
  adult: boolean;
  credit_id: string
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface iCast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

interface iCredits {
  id: number;
  cast: iCast[];
  crew: iCrew[];
}

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

export interface iPerson {
  adult: boolean;
  gender: number;
  id: number;
  known_for: iMovie[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}

export function createBaseUrl (url: string) {
  return `https://api.themoviedb.org/3${url}?api_key=${API_KEY}&language=es-ES`
}

export interface iPage {
  page: number;
  results: iMovie[];
  total_pages: number;
  total_results: number;
}

export function fetcher (url: string) {
  return fetch(createBaseUrl(url))
    .then((res) => res.json())
}

export function useMovie (id: string) {
  return useSWRImmutable<iMovie>(`/movie/${id}`, fetcher)
}

export function popularFetcher (page: string) {
  return fetch(`${createBaseUrl('/movie/popular')}${page}`)
    .then((res) => res.json())
}

export const getKey = (index: number) => {
  return `&page=${index + 1}`
}

export function usePopular () {
  return useSWRInfinite<iPage>(getKey, popularFetcher)
}

export function useCredits (id: number) {
  return useSWRImmutable<iCredits>(`/movie/${id}/credits`, fetcher)
}

export function useVideo (id: number) {
  return useSWRImmutable<iVideoPage>(`/movie/${id}/videos`, fetcher)
}

export function usePeople () {
  return useSWRImmutable<iPerson>('/person/popular', fetcher)
}
