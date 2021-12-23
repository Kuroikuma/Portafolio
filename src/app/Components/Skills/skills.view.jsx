import "./skills.style.css";

export const SkillView = (props) => {
  const {
    data1,
    data2,
    TitleSkillsRef,
    showTitleSkills,
    SkillstRef,
    showSkills,
    PageSkillRef,
  } = props;
  return (
    <div ref={PageSkillRef} className="SkillContainer">
      <div
        ref={TitleSkillsRef}
        className={
          showTitleSkills
            ? "SkillContainer__Title show"
            : "SkillContainer__Title"
        }
      >
        <h1>HABILIDADES</h1>
      </div>
      <div
        ref={SkillstRef}
        className={
          showSkills ? "SkillContainer__Skills show" : "SkillContainer__Skills"
        }
      >
        <div className="SkillContainer__Skills__Columns">
          {data1.map((item, index) => (
            <div className="SkillContainer__Skills__item">
              <div className="SkillContainer__Skills__item__Image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="SkillContainer__Skills__item__space"></div>
              <div className="SkillContainer__Skills__item__Info">
                {item.name}
              </div>
            </div>
          ))}
        </div>
        <div className="SkillContainer__Skills__Columns">
          {data2.map((item, index) => (
            <div className="SkillContainer__Skills__item">
              <div className="SkillContainer__Skills__item__Image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="SkillContainer__Skills__item__space"></div>
              <div className="SkillContainer__Skills__item__Info">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
