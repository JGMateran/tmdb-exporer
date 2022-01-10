export const Avatar = ({ src, alt }: { src: string; alt: string; }) => {
  return (
    <div className="sm:w-14 sm:h-14 w-12 h-12 relative after:pt-[100%] after:block dark:bg-gray-800 bg-gray-300 rounded-full">
      <img className="absolute inset-0 w-full h-full rounded-full object-cover" src={src} alt={alt} />
    </div>
  )
}
