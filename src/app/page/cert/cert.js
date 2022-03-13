import { useEffect, useState } from 'react'
import { getCert, getCertPagination } from '../../../services/services.cert'
import { useMasonry } from '../../hooks/useMasonry'
import { CertView } from './cert.view'

export const Cert = ({ flag = true }) => {
  const [next, setNext] = useState('')
  const [url, setUrl] = useState('')
  const [previous, setPrevious] = useState('')
  const [counter, setCounter] = useState(1)
  const [loading, setLoading] = useState(false)
  const [columns, setData] = useMasonry()

  useEffect(() => {
    setLoading(true)
    if (url) {
      getCertPagination(url).then((response) => {
        const imageFilter = response.result.map((item) => item.image)
        setData(imageFilter)
        setLoading(false)
        setNext(response.next)
        setPrevious(response.previous)
      })
    } else {
      getCert().then((response) => {
        const imageFilter = response.result.map((item) => item.image)
        setData(imageFilter)
        setLoading(false)
        setNext(response.next)
        setPrevious(response.previous)
      })
    }
  }, [url])

  const nextCert = () => {
    if (counter < 4) {
      setCounter(counter + 1)
      setUrl(next)
    }
  }

  const previewCert = () => {
    if (counter > 1) {
      setCounter(counter - 1)
      setUrl(previous ? previous : '')
    }
  }

  return (
    <CertView
      counter={counter}
      loading={loading}
      flag={flag}
      columns={columns}
      nextCert={nextCert}
      previewCert={previewCert}
    />
  )
}
