import { Play } from 'react-feather'
import { useVideo } from '../lib/tmdb'

export const Player = ({ id }: { id: number }) => {
  const {
    error,
    data
  } = useVideo(id)

  if (error || !data) return null

  return (
    <div className="my-10">
      {
        data.results.map((video) => {
          return (
            <a
              href={`https://www.youtube.com/watch?v=${video.key}`}
              target="_blank"
              key={video.id}
              rel="noreferrer"
              className="flex items-center py-4 border-b border-gray-300 dark:border-gray-800"
            >
              <div>
                <Play className="mr-4 flex-1" />
              </div>
              <div className="overflow-hidden text-left items-start justify-center">
                <h2 className="flex-1 truncate font-semibold">
                  {video.name}
                </h2>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  {video.type}
                </p>
              </div>
            </a>
          )
        })
      }
    </div>
  )
}
