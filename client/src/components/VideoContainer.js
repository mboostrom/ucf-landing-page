import React from "react"

const VideoContainer = (props) => {
  return (
    <div className="video-container">
      <div>
        <iframe
          width="929"
          height="523"
          src="https://www.youtube.com/embed/2n9F8ts0k_M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default VideoContainer
