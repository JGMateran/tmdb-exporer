import { Layout } from '../components/Layout'

const meta = {
  title: '404: Pagina no encontrada'
}

export const Error = () => {
  return (
    <Layout {...meta} topbar="dark">
      <div className="min-h-[calc(100vh-90px)] pt-14 flex items-center justify-center text-center">
        <h2 className="text-5xl font-extrabold leading-normal">
          ¡Ups! algo ha salido mal
        </h2>
      </div>
    </Layout>
  )
}
