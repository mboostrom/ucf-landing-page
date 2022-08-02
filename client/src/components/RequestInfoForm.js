import React from "react"

const RequestInfoForm = (props) => {
  return (
    <div className="info-form">
      <div className="form-header">
        <p className="more-info">Get More Information</p>
        <p className="info-p">
          Fill out the form below, and we’ll email you more information about the Master of Public
          Administration, MPA program.
        </p>
      </div>
      <div className="form-input">
        <form>
          <label>
            <input type="text" name="first" placeholder="First" className="form-text" />
          </label>
          <label>
            <input type="text" name="last" placeholder="Last" className="form-text" />
          </label>
          <label>
            <input type="text" name="phone" placeholder="Phone" className="form-text" />
          </label>
          <label>
            <input type="text" name="email" placeholder="Email" className="form-text" />
          </label>
          <div>
            <input
              type="submit"
              name="submit"
              value="Request Info"
              className="request-info-button"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestInfoForm
