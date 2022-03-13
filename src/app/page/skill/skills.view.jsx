import { SkillCard } from '../../Components/Skills/skill-card'
import '../../css/skills.style.css'
import { SkillList } from '../../container/skill/skillList'
import { Title } from '../../container/title/title'
import { Navigation } from '../../Components/navigate/nav'
import Helmet from 'react-helmet'

export const SkillView = ({ SkillRef, showSkill, flag }) => {
  return (
    <div className="SkillContainer">
      {flag && (
        <>
          <Helmet>
            <title>Skill</title>
          </Helmet>
          <Navigation />
        </>
      )}
      <Title text="my skills" />
      <SkillList SkillRef={SkillRef} showSkill={showSkill}>
        {(skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            img={skill.img}
            rank={skill.rank}
          />
        )}
      </SkillList>
    </div>
  )
}
