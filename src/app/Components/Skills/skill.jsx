export const Skill = ({ name, img, rank }) => {
  return (
    <div className="SkillContainer__Skills__item">
      <div className="SkillContainer__Skills__item__range">
        <div className="SkillContainer__Skills__item__range__content">
          <h1>{rank}</h1>
        </div>
      </div>
      <div className="SkillContainer__Skills__item__Image">
        <img src={img} alt={name} />
      </div>
      <div className="SkillContainer__Skills__item__space"></div>
      <div className="SkillContainer__Skills__item__Info">
        <p>{name}</p>
      </div>
    </div>
  )
}
