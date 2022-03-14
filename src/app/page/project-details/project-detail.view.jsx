import { Gallery } from '../../Components/gallery/gallery'
import { Navigation } from '../../Components/navigate/nav'
import '../../css/project-details.style.css'

export const ProjectDetailsView = ({ technologies, image, columns }) => {
  return (
    <>
      <div className="ProjectDetailsContainer">
        <Navigation />
        <div className="ProjectDetailsContainer__title">
          <h1>AMERICAN CHEESE</h1>
        </div>
        <div className="ProjectDetailsContainer__content">
          <div className="ProjectDetailsContainer__content__image">
            <img src={image} alt="" />
          </div>
          <div className="ProjectDetailsContainer__content__buttonGroup">
            {technologies &&
              technologies.map((item, index) => (
                <button
                  key={index}
                  className="ProjectDetailsContainer__content__buttonGroup__item"
                >
                  {item}
                </button>
              ))}
          </div>
        </div>
        <div className="ProjectDetailsContainer__gallery">
          <div className="ProjectDetailsContainer__gallery__title">
            <h1>Project Image Gallery</h1>
          </div>
          <Gallery columns={columns} />
        </div>
      </div>
    </>
  )
}
