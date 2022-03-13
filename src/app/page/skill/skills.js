import { useOnScreen } from '../../hooks/useOnScreen'
import { SkillView } from './skills.view'

export const Skill = ({ flag = true }) => {
  const [SkillRef, showSkill] = useOnScreen({
    rootMargin: '20px',
  })
  return <SkillView SkillRef={SkillRef} showSkill={showSkill} flag={flag} />
}
