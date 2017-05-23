import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => (
  <div className="card">
    <div className="card-header">
        <p className="card-header-title">
          Home
        </p>
    </div>
    <div className="card-content">
      <p>asd</p>
      <Link to="/forecast">let's go forecast</Link>
    </div>
  </div>
);

export default Home;
