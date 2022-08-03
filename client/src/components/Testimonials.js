import React from "react"

const Testimonials = (props) => {
  return (
    <div className="testimonials">
      <div className="test-info">
        <h2 className="testimonial-head">
          <span className="underline">TESTIMONIALS</span>
        </h2>
        <div className="test-tile-section">
          <div className="test-tile">
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque
                vulputate massa ac consectetur. Nam cursus nisl ac risus viverra.
              </p>
            </blockquote>
            <div className="quote-name">
              <h4>Sarah Smith</h4>
              <p>MPA Graduate</p>
            </div>
          </div>
          <div className="test-tile">
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque
                vulputate massa ac consectetur. Nam cursus nisl ac risus viverra.
              </p>
            </blockquote>
            <div className="quote-name">
              <h4>Elise Phillips</h4>
              <p>MPA Graduate</p>
            </div>
          </div>
          <div className="test-tile">
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque
                vulputate massa ac consectetur. Nam cursus nisl ac risus viverra.
              </p>
            </blockquote>
            <div className="quote-name">
              <h4>Mary Jones</h4>
              <p>MPA Graduate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="yellow-block"></div>
    </div>
  )
}

export default Testimonials
