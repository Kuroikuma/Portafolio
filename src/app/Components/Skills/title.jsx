export const Title = ({ TitleSkillsRef, showTitleSkills }) => {
  return (
    <div
      ref={TitleSkillsRef}
      className={
        showTitleSkills ? 'SkillContainer__Title show' : 'SkillContainer__Title'
      }
    >
      <h1>MY SKILLS</h1>
    </div>
  )
}
