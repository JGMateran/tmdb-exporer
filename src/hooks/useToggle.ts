import { useState } from 'react'

export function useToggle (initial: boolean): [
  boolean,
  {
    on: () => void;
    off: () => void;
    toggle: () => void;
  },
] {
  const [isActive, setIsActive] = useState<boolean>(initial)

  const toggle = () => setIsActive(!isActive)
  const on = () => setIsActive(true)
  const off = () => setIsActive(false)

  return [
    isActive,
    { on, off, toggle }
  ]
}
