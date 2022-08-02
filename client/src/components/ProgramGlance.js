import React, { useState } from "react"

import TabGroup from "./TabGroup"

const ProgramGlance = (props) => {
  return (
    <div className="program-glance">
      <h3 className="program-head">PROGRAM AT A GLANCE</h3>
      <div className="yellow-line-1"></div>
      <div className="program-row">
      <TabGroup />
      <div className="program-middle">
        <div className="program-middle-div">
          <h2>42</h2>
          <p>CREDIT HOURS</p>
        </div>
        <div className="program-middle-div">
          <h2>10</h2>
          <p>WEEKS AVERAGE TIME<br />TO COMPLETE</p>
        </div>
      </div>
      <div className="program-right">
        <div className="program-pic"></div>
      </div>
      </div>
    </div>
  )
}

export default ProgramGlance
