import { useEffect, useRef, useState } from 'react'

export const useOnScreen = (options) => {
  const elementRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  const onChange = (entries) => {
    const titleProject = entries[0]
    setIsVisible(titleProject.isIntersecting)
  }

  useEffect(() => {
    let observerRefValue = null // <-- variable to hold ref value

    const observer = new IntersectionObserver(onChange, options)

    if (elementRef.current) {
      observer.observe(elementRef.current)
      observerRefValue = elementRef.current // <-- save ref value
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue) // <-- use saved value
    }
  }, [elementRef, options])

  return [elementRef, isVisible]
}
