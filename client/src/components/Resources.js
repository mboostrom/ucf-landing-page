import React from "react"

const Resources = (props) => {
  return (
    <div className="resources-info">
      <h2 className="resources-head">
        <span className="underline">RESOURCES</span>
      </h2>
      <div className="resources-tile-section">
        <div className="resources-tile">
          <div className="resource-img-1"></div>
          
        </div>
        <div className="verticle-line-resource"></div>
        <div className="resources-tile">
          <div className="resource-img-2"></div>
          
        </div>
        <div className="verticle-line-resource"></div>
        <div className="resources-tile">
          <div className="resource-img-3"></div>
          
        </div>
      </div>
      <div className="resource-titles">
        <p>Articles</p>
        <p className="financial-aid">Financial Aid Resources</p>
        <p className="guides">Guides</p>
      </div>
    </div>
  )
}

export default Resources