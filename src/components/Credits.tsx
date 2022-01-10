import { useCredits } from '../lib/tmdb'
import { Avatar } from './Avatar'
import { LoadingText } from './LoadingText'

export const Credits = ({ id }: { id: number }) => {
  const {
    data,
    error
  } = useCredits(id)

  if (error) return null

  if (!data) {
    return (
      <LoadingText>
        Cargando reparto dos
      </LoadingText>
    )
  }

  return (
    <>

      <h2 className="text-center mt-10 mb-10 text-3xl font-bold">
        Reparto
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
        {
          data.cast
            .filter((cast) => cast.profile_path)
            .map((cast) => {
              return (
              <div key={cast.id} className="dark:text-gray-400 text-gray-700 flex items-center">
                <div>
                  <Avatar
                    src={`https://image.tmdb.org/t/p//w500/${cast.profile_path}`}
                    alt={cast.name}
                  />
                </div>
                <div className="pl-4 overflow-hidden flex flex-col">
                  <h2 className="text-black dark:text-white font-bold truncate">{cast.name}</h2>
                  <p className="text-gray-700 dark:text-gray-400 text-sm truncate">{cast.character}</p>
                </div>
              </div>
              )
            })
        }
      </div>
    </>
  )
}
