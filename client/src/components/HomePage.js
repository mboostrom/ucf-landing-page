import React from "react"

import RequestInfoForm from "./RequestInfoForm"
import ProgramGlance from "./ProgramGlance"
import ApplyNowSection from "./ApplyNowSection"
import AppDeadline from "./AppDeadline"
import VideoContainer from "./VideoContainer"
import WhyUCF from "./WhyUCF"
import Testimonials from "./Testimonials"
import Resources from "./Resources"

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
        <ApplyNowSection />
      </div>
      <AppDeadline />
      <VideoContainer />
      <div className="home-page-info">
        <WhyUCF />
      </div>
      <Testimonials />
      <Resources />
      <div className="apply-now-bar">
        <h2>Apply Now</h2>
        <div className="arrow-button"></div>
      </div>
      <div className="footer-block">
        <div className="footer"></div>
      </div>
    </div>
  )
}

export default HomePage
