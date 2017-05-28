import React from 'react';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const Home = () => (
  <CSSTransitionGroup
    transitionName="fade"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">
          Weatherise
        </p>
      </div>
      <div className="card-content content">
        <blockquote>
          make (a house or other building) resistant to cold weather, typically by adding insulation.
        </blockquote>

        <p>Find the current weather and a 7 day forecast for anywhere in the world!</p>
        <p>You can click on one of the suggestions to the left to get started.</p>
      </div>
    </div>
  </CSSTransitionGroup>

);

export default Home;
