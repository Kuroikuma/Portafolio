export const SkillListView = ({ children, SkillRef, showSkill, skills }) => {
  return (
    <div
      ref={SkillRef}
      className={
        showSkill ? 'SkillContainer__Skills show' : 'SkillContainer__Skills'
      }
    >
      {skills.map(children)}
    </div>
  )
}
