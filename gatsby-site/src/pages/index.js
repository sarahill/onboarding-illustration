import React from 'react'
import Link from 'gatsby-link'
import computerimage from '../images/computer@2x.png'
import trackerlogo from '../images/tracker@2x.png'
import cardimage from '../images/card@2x.png'
import ghlogo from '../images/gh@2x.png'

const IndexPage = () => (
  <div className="onboarding-container">
    <div className="illustration">
      <img className="code-block" src={cardimage} alt="code brick" width="231px" height="119px" />
      <div className="logos">
        <img className="tracker-logo" src={trackerlogo} alt="tracker logo" width="45px" height="49px" />
        <img className="gh-logo" src={ghlogo} alt="github logo" width="41px" height="41px" />
      </div>
      <img className="computer" src={computerimage} alt="computer" width="272px" height="263px;" />
    </div>
    <div className="education">
      <h1 className="education-title">Integrate your code with Tracker</h1>
      <h2 className="education-text">Authenticate your GitHub account to view and attach code to Tracker stories. See the status of branches and pull requests in context.</h2>
      <div className="authenticate">
          <a href="#" className="btn btn-positive">Authenticate</a>
          <a href="#" className="btn btn-link">Ill do this later</a>
      </div>
    </div>
  </div>
)

export default IndexPage