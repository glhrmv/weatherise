import React from 'react';

import { Link } from 'react-router-dom';

const InfoBox = () => (
  <div className="box has-text-centered">
    <p className="title is-4">
      <strong>
        <Link to="/">
          Weatherise
        </Link>
      </strong>
    </p>
    <p className="subtitle is-6">
      <span>
        made with
        <span className="icon social-icon">
          <i className="fa fa-heart"></i>
        </span>
        by <strong>dogui</strong>
      </span>
    </p>
    <p className="subtitle is-6 is-marginless">
      find me on
    </p>
    <p>
      <Link to="https://github.com/dogui/" target="_blank">
        <span className="icon social-icon">
          <i className="fa fa-github"></i>
        </span>
      </Link>
      <Link to="https://medium.com/@dogui" target="_blank">
        <span className="icon social-icon">
          <i className="fa fa-medium"></i>
        </span>
      </Link>
      <Link to="https://soundcloud.com/ogui" target="_blank">
        <span className="icon social-icon">
          <i className="fa fa-soundcloud"></i>
        </span>
      </Link>
    </p>
  </div>
);

export default InfoBox;
