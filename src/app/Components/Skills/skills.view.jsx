import { Skill } from './skill'
import './skills.style.css'
import { SkillsList } from './skillsList'
import { Title } from './title'

export const SkillView = (props) => {
  const {
    TitleSkillsRef,
    showTitleSkills,
    SkillsRef,
    showSkills,
    PageSkillRef,
  } = props
  return (
    <div ref={PageSkillRef} className="SkillContainer">
      <Title
        TitleSkillsRef={TitleSkillsRef}
        showTitleSkills={showTitleSkills}
      />
      <SkillsList SkillsRef={SkillsRef} showSkills={showSkills}>
        {(skill) => (
          <Skill
            key={skill.id}
            name={skill.name}
            img={skill.img}
            rank={skill.rank}
          />
        )}
      </SkillsList>
    </div>
  )
}
