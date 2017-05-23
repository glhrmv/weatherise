import React from 'react';
import { Link } from 'react-router-dom';

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: {},
      loading: false,
      error: false
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
            <p className="card-header-title">
              Forecast
            </p>
        </div>
        <div className="card-content">
          <p>results</p>
          <Link to="/">let's go back home</Link>
        </div>
      </div>
    );
  }
}
