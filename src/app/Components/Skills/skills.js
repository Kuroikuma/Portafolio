import { useOnScreen } from '../../hooks/useOnScreen'
import { SkillView } from './skills.view'
import React, { useEffect } from 'react'
import { setSkill } from '../../../redux/actions/proyect-action'
import { useDispatch, useSelector } from 'react-redux'
import { getSkill } from '../../../services/services-skill'
import { useTitle } from '../../hooks/useTitle'

export const Skill = (props) => {
  const { setHead } = props

  const [PageSkillRef] = useTitle(setHead, 'Skill')

  const skills = useSelector((state) => state.proyectReducer.skills)
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
  const index = skills.length
  const data1 = skills.slice(0, index / 2)
  const data2 = skills.slice(index / 2, index)
  const [TitleSkillsRef, showTitleSkills] = useOnScreen({
    rootMargin: '-70px',
  })
  const [SkillsRef, showSkills] = useOnScreen({
    rootMargin: '-100px',
  })
  return (
    <SkillView
      data1={data1}
      data2={data2}
      skills={skills}
      TitleSkillsRef={TitleSkillsRef}
      showTitleSkills={showTitleSkills}
      SkillsRef={SkillsRef}
      showSkills={showSkills}
      PageSkillRef={PageSkillRef}
    />
  )
}
