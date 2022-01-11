import { Layout } from '../components/Layout'

const meta = {
  title: 'No se ha encontrado lo que buscas'
}

export const Error = () => {
  return (
    <Layout {...meta}>
      <div className="min-h-screen flex items-center justify-center text-center">
        <h2 className="text-5xl font-extrabold leading-normal">
          404: Pagina no encontrada
        </h2>
      </div>
    </Layout>
  )
}
