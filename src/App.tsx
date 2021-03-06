import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { Error } from './pages/Error'
import { Person } from './pages/Person'

function App () {
  return (
    <div className="min-h-screen text-black dark:bg-gray-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
