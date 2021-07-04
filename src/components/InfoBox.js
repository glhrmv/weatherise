import React from 'react'

import { Link } from 'react-router-dom'

const InfoBox = () => (
  <div className="box has-text-centered">
    <p className="title is-4">
      <strong>
        <Link to="/">Weatherise</Link>
      </strong>
    </p>
    <p className="subtitle is-6 is-marginless">a side project</p>
    <p className="subtitle is-6">
      <span>
        made with
        <span className="icon social-icon">
          <i className="fa fa-heart" />
        </span>
        by{' '}
        <strong>
        <Link to={{ pathname: "http://github.com/glhrmv" }} target="_blank" >
            glhrmv
          </Link>
        </strong>
      </span>
    </p>
  </div>
)

export default InfoBox
