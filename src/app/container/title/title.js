import { useOnScreen } from '../../hooks/useOnScreen'
import { TitleView } from '../../Components/title/title'

export const Title = ({ text }) => {
  const [TitleRef, showTitle] = useOnScreen({
    rootMargin: '-70px',
  })
  return <TitleView TitleRef={TitleRef} text={text} showTitle={showTitle} />
}
