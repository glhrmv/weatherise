import React from 'react';

import moment from 'moment';

const formatSettings = {
  sameDay: '[Today], MMMM Do YYYY',
  nextDay: '[Tomorrow], MMMM Do YYYY',
  nextWeek: 'dddd, MMMM Do YYYY',
  sameElse: 'dddd, MMMM Do YYYY'
};

export default class WeatherCard extends React.Component {
  render() {
    return (
      <div key={this.props.forecast.dt} className="card">
        <div className="card-content">
          <div className="columns">
            <div className="column">
              <p className="title">
                {moment.unix(this.props.forecast.dt).calendar(null, formatSettings)}
              </p>
              <p className="subtitle is-5">
                {this.props.forecast.weather[0].description}
              </p>
            </div>
            <div className="column">
              <div className="columns">
                <div className="column">
                  <p>
                    <strong>Max</strong>: {Math.round(this.props.forecast.temp.max)} ºC
                  </p>
                  <p>
                    <strong>Min</strong>: {Math.round(this.props.forecast.temp.min)} ºC
                  </p>
                </div>
                <div className="column">
                  <p>
                    <strong>Humidity</strong>: {this.props.forecast.humidity }%
                  </p>
                  <p>
                    <strong>Clouds</strong>: {this.props.forecast.clouds }%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
