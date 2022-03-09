import { GitHub } from '../icons/gitHub'
import { Facebook } from '../icons/facebook'
import { LinkedIn } from '../icons/linkedin'
import { Link } from './link'

export const Contact = () => {
  return (
    <div className="HomeContainer__Info__Contact">
      <Link Component={LinkedIn} />
      <Link Component={Facebook} />
      <Link Component={GitHub} />
    </div>
  )
}
