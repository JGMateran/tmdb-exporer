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
              className="hover:bg-gray-800/50 p-4 border-b border-gray-800 flex items-center" rel="noreferrer"
            >
              <Play className="mr-4" />
              <div className="flex flex-col items-start">
                <h2 className="text-base text-white font-bold">
                  {video.name}
                </h2>
                <p className="text-sm text-gray-400">
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
