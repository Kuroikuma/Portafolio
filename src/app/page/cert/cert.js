import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCert,
  fetchCertPagination,
  setUrl,
} from '../../../redux/slices/cert'
import { useMasonry } from '../../hooks/useMasonry'
import { CertView } from './cert.view'

export const Cert = ({ flag = true }) => {
  let dispatch = useDispatch()
  const next = useSelector((state) => state.cert.next)
  const loading = useSelector((state) => state.cert.loading)
  const url = useSelector((state) => state.cert.url)
  const previous = useSelector((state) => state.cert.previous)
  const [counter, setCounter] = useState(1)
  const [columns, setData] = useMasonry()

  useEffect(() => {
    if (url) {
      dispatch(fetchCertPagination(setData))
    } else {
      dispatch(fetchCert(setData))
    }
  }, [url])

  useEffect(() => {
    console.log(loading)
  }, [loading])

  const nextCert = () => {
    if (counter < 4) {
      setCounter(counter + 1)
      dispatch(setUrl(next))
    }
  }

  const previewCert = () => {
    if (counter > 1) {
      setCounter(counter - 1)
      dispatch(setUrl(previous ? previous : ''))
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
