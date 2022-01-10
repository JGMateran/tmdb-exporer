import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

const meta = {
  title: 'No se ha encontrado lo que buscas'
}

export const Error = () => {
  return (
    <Layout {...meta}>
      <Link to="/">Ir al inicio</Link>
      <h2>No se ha encontrado lo que buscas</h2>
    </Layout>
  )
}
