import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSkill } from '../../../redux/actions/project-action'
import { getSkill } from '../../../services/services-skill'
import { SkillListView } from '../../Components/Skills/skillsList'

export const SkillList = ({ children, SkillRef, showSkill }) => {
  const skills = useSelector((state) => state.projectReducer.skills)
  const dispatch = useDispatch()
  useEffect(() => {
    getSkill()
      .then((response) => {
        dispatch(setSkill(response))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch])

  return (
    <SkillListView SkillRef={SkillRef} skills={skills} showSkill={showSkill}>
      {children}
    </SkillListView>
  )
}
