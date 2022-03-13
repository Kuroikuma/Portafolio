import '../../css/cert.style.css'
import { SkeletonLoading } from '../../Components/Skeleton/skeleton'
import { Title } from '../../container/title/title'
import { Gallery } from '../../Components/gallery/gallery'
import Helmet from 'react-helmet'
import { Navigation } from '../../Components/navigate/nav'

export const CertView = ({
  flag = true,
  previewCert,
  nextCert,
  columns,
  loading,
  counter,
}) => {
  return (
    <div className="CertContainer">
      {flag && (
        <>
          <Helmet>
            <title>Skill</title>
          </Helmet>
          <Navigation />
        </>
      )}
      <Title text="my certificates" />
      {loading ? (
        <div className="certContainer__content">
          {Array(6)
            .fill('')
            .map((item, index) => (
              <div key={index} className="certContainer__Content__item">
                <SkeletonLoading />
              </div>
            ))}
        </div>
      ) : (
        <Gallery columns={columns} />
      )}
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
