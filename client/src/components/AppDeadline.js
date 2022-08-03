import React from "react"

const AppDeadline = (props) => {
  return (
    <div className="app-deadline">
      <div className="start-dates">
        <h2 className="date-header">
          <span className="underline">UPCOMING</span> START DATES
        </h2>
        <div className="dates">
          <div className="date-line">
            <div className="checkmark"></div>
            <p>September 6, 2021</p>
          </div>
          <div className="date-line">
            <div className="checkmark"></div>
            <p>August 18, 2021</p>
          </div>
          <div className="date-line">
            <div className="checkmark"></div>
            <p>October 23, 2021</p>
          </div>
        </div>
      </div>
      <div className="middle-bar"></div>
      <div className="deadline-dates">
        <h2 className="date-header">
          <span className="underline">APPLICATION</span> DEADLINE
        </h2>
        <div className="dates">
          <div className="date-line">
            <div className="checkmark"></div>
            <p>July 22, 2021</p>
          </div>
          <div className="date-line">
            <div className="checkmark"></div>
            <p>August 8, 2021</p>
          </div>
          <div className="date-line">
            <div className="checkmark"></div>
            <p>September 12, 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDeadline
