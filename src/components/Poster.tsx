export const Poster = ({ name }: { name: string }) => {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden relative after:pt-[150%] after:block">
      <img
        className="absolute w-full h-full inset-0 object-cover"
        src={`https://image.tmdb.org/t/p//w500/${name}`}
        alt={name}
      />
    </div>
  )
}
