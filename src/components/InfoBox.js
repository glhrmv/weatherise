import React from 'react';

import { Link } from 'react-router-dom';

const InfoBox = () => (
  <div className="box has-text-centered">
    <p>
      <strong>
        Weatherise
      </strong>
    </p>
    <p>
      <span>
        made by <strong><Link to="https://github.com/dogui" target="_blank">dogui</Link></strong>
      </span>
    </p>
  </div>
);

export default InfoBox;
