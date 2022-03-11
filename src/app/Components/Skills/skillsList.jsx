import React, { useEffect } from 'react'
import { setSkill } from '../../../redux/actions/proyect-action'
import { useDispatch, useSelector } from 'react-redux'
import { getSkill } from '../../../services/services-skill'

export const SkillsList = ({ children, SkillsRef, showSkills }) => {
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

  return (
    <div
      ref={SkillsRef}
      className={
        showSkills ? 'SkillContainer__Skills show' : 'SkillContainer__Skills'
      }
    >
      {skills.map(children)}
    </div>
  )
}
