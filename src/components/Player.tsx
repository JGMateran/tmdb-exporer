import { useVideo } from '../lib/tmdb'

import { useState, useEffect } from 'react'
import { VideoCard } from './VideoCard'
import { YouTubeIframe } from './YoutubeIframe'

export const Player = ({ id }: { id: number }) => {
  const {
    error,
    data
  } = useVideo(id)

  const [youtubeId, setYoutubeId] = useState('')

  useEffect(
    () => {
      if (!data) return

      const [trailer] = data.results

      if (!trailer) return

      setYoutubeId(trailer.key)
    },
    [data]
  )

  if (error || !data) return null

  return (
    <div className="my-10">
      {
        data.results.map((video) => {
          return (
            <VideoCard
              id={video.key}
              key={video.id}
              name={video.name}
              type={video.type}
              onSelect={setYoutubeId}
            />
          )
        })
      }

      <YouTubeIframe id={youtubeId} />
    </div>
  )
}
