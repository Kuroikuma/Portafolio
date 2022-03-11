import { useOnScreen } from '../../hooks/useOnScreen'
import { SkillView } from './skills.view'
import { useTitle } from '../../hooks/useTitle'

export const Skill = ({ setHead }) => {
  const [PageSkillRef] = useTitle(setHead, 'Skill')

  const [TitleSkillsRef, showTitleSkills] = useOnScreen({
    rootMargin: '-70px',
  })
  const [SkillsRef, showSkills] = useOnScreen({
    rootMargin: '20px',
  })
  return (
    <SkillView
      TitleSkillsRef={TitleSkillsRef}
      showTitleSkills={showTitleSkills}
      SkillsRef={SkillsRef}
      showSkills={showSkills}
      PageSkillRef={PageSkillRef}
    />
  )
}
