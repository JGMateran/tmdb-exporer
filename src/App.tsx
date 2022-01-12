import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { Error } from './pages/Error'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
