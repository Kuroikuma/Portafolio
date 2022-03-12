import { useOnScreen } from '../../hooks/useOnScreen'
import { SkillView } from './skills.view'

export const Skill = () => {
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
    />
  )
}
