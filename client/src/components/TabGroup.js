import React from "react"
import { useState, useEffect } from "react"

import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

const TabGroup = (props) => {
  return (
    <div className="tab-group">
      <Tabs defaultActiveKey="inState" id="fill-tab-example" className="mb-3" justify>
        <Tab eventKey="inState" title="In State" className="tab-option">
          <div className="tab-detail">
            <h2>$327.32</h2>
            <p>COST PER CREDIT HOUR</p>
          </div>
        </Tab>
        <Tab eventKey="outOfState" title="Out Of State" className="tab-option">
          <div className="tab-detail">
            <h2>$553.50</h2>
            <p>COST PER CREDIT HOUR</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default TabGroup
