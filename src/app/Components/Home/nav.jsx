import { ButtonNav } from './buttonNav'

export const Navigation = ({ show, ScrollChange }) => {
  return (
    <div className={`HomeContainer__NavBar`}>
      <div
        className={
          show
            ? `HomeContainer__NavBar__Right show`
            : `HomeContainer__NavBar__Right`
        }
      >
        <ButtonNav ScrollChange={ScrollChange} type="Home" />
        <ButtonNav ScrollChange={ScrollChange} type="Skills" />
        <ButtonNav ScrollChange={ScrollChange} type="Certificates" />
        <ButtonNav ScrollChange={ScrollChange} type="Project" />
        <ButtonNav ScrollChange={ScrollChange} type="Contact" />
      </div>
    </div>
  )
}
