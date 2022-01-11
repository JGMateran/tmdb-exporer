import { useEffect } from 'react'
import { Sun, Moon } from 'react-feather'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const DarkButton = () => {
  const [isDark, setIsDark] = useLocalStorage('is-dark-mode', false)

  useEffect(
    () => {
      document.documentElement.classList.toggle('dark', isDark)
    },
    [isDark]
  )

  return (
    <button
      className="active:scale-90 focus:outline-none"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  )
}
