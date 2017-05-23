import React from 'react';

const SearchBox = () => (
  <div className="box">
    <div className="content has-text-centered">
      <h1 className="title-2">what's the weather in...</h1>
      <h3 className="title-4">New York ?</h3>
    </div>
    <div className="field has-addons has-addons-centered">
      <p className="control">
        <input className="input" type="text" placeholder="City" />
      </p>
      <p className="control">
        <a className="button is-info is-outlined">
          <span className="icon">
            <i className="fa fa-globe"></i>
          </span>
          <span>Search</span>
        </a>
      </p>
    </div>
  </div>
);

export default SearchBox;
