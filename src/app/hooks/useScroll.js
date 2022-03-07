import { useState } from 'react'

export const useScroll = () => {
  const [show, setShow] = useState(false)
  const [head, setHead] = useState('')
  const ScrollChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  return [show, head, setHead, ScrollChange]
}
