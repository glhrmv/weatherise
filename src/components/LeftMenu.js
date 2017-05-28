import React from 'react';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

const LeftMenu = () => (
  <div>
    <CSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <SearchBox />
      <InfoBox />
    </CSSTransitionGroup>
  </div>
);

export default LeftMenu;
