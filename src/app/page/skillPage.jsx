import Helmet from 'react-helmet'
import { Navigation } from '../Components/navigate/nav'
import { Skill } from '../Components/Skills/skills'

export const SkillPage = () => {
  return (
    <>
      <Helmet>
        <title>Skill</title>
      </Helmet>
      <Navigation />
      <Skill />
    </>
  )
}
