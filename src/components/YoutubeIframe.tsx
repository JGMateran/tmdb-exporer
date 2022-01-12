export const YouTubeIframe = ({ id }: { id: string; }) => {
  if (!id) return null

  return (
    <div className="relative after:pt-[56.25%] after:block">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute w-full h-full"
      />
    </div>
  )
}
