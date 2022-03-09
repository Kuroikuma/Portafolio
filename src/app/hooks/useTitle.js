import { useEffect } from 'react'
import { useOnScreen } from './useOnScreen'

export const useTitle = (setHead, title = 'Home') => {
  const [HomeRef, showHome] = useOnScreen({
    threshold: 0.4,
  })

  useEffect(() => {
    if (showHome) setHead(title)
  }, [showHome, setHead, title])
  return [HomeRef]
}
