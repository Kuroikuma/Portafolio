import { useEffect, useState } from 'react'
import './cert.style.css'
import { getCert, getCertPagination } from '../../../services/services.cert'
import { SkeletonLoading } from '../Skeleton/skeleton'

export const Cert = () => {
  const [certs, setCerts] = useState([])
  const [next, setNext] = useState('')
  const [url, setUrl] = useState('')
  const [previous, setPrevious] = useState('')
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (url) {
      getCertPagination(url).then((response) => {
        setCerts(response.result)
        setLoading(false)
        setNext(response.next)
        setPrevious(response.previous)
      })
    } else {
      getCert().then((response) => {
        setCerts(response.result)
        setLoading(false)
        setNext(response.next)
        setPrevious(response.previous)
      })
    }
  }, [url])

  console.log(loading)
  const nextCert = () => {
    if (counter < 4) {
      setCounter(counter + 1)
      setUrl(next)
    }
  }

  const previewCert = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      setUrl(previous ? previous : '')
    }
  }

  return (
    <div className="CertContainer">
      <div className="certContainer__title">
        <h1>CERTIFICATES</h1>
      </div>
      <div className="certContainer__content">
        {loading
          ? Array(6)
              .fill('')
              .map((item, index) => (
                <div key={index} className="certContainer__Content__item">
                  <SkeletonLoading />
                </div>
              ))
          : certs.map((item) => (
              <div key={item.id} className="certContainer__Content__item">
                <img src={item.image} />
              </div>
            ))}
      </div>
      <div className="certContainer__buttonGroup">
        <button
          onClick={previewCert}
          className="certContainer__buttonGroup__item"
        >
          previous
        </button>
        <p>{counter}</p>
        <button onClick={nextCert} className="certContainer__buttonGroup__item">
          next
        </button>
      </div>
    </div>
  )
}
