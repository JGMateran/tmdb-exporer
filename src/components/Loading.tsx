import { Spinner } from './Spinner'

export const Loading = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center">
      <Spinner />
      <h2 className="mt-6">
        Cargando
      </h2>
    </div>
  )
}
