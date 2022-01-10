import { useEffect } from 'react'
import { Sun, Moon } from 'react-feather'
import { useLocalStorage } from 'react-use'

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
      className="active:scale-95 focus:outline-none focus:ring-2 dark:ring-blue-600 dark:ring-offset-gray-900 ring-offset-4"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <Sun color="#fff" /> : <Moon color="#000" />}
    </button>
  )
}
