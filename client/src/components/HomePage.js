import React from "react"

import RequestInfoForm from "./RequestInfoForm"
import ProgramGlance from "./ProgramGlance"

const HomePage = (props) => {
  return (
    <div>
      <div className="nav-container">
        <div className="black-bar"></div>
        <div className="yellow-bar"></div>
        <div className="nav-pic"></div>
      </div>
      <div className="header">
        <h2>
          Online Master
          <br /> of Public
          <br /> Administration, MPA
        </h2>
      </div>
      <RequestInfoForm />
      <div className="home-page-info">
        <ProgramGlance />
      </div>
    </div>
  )
}

export default HomePage
