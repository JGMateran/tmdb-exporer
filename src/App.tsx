import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { Error } from './pages/Error'
import { People } from './pages/People'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/people" element={<People />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
