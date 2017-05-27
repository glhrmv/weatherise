import React from 'react';

import PropTypes from 'prop-types';
import moment from 'moment';

const formatSettings = {
  sameDay: '[Today], MMMM Do YYYY',
  nextDay: '[Tomorrow], MMMM Do YYYY',
  nextWeek: 'dddd, MMMM Do YYYY',
  sameElse: 'dddd, MMMM Do YYYY'
};

const WeatherCard = ({forecast }) => (
  <div key={forecast.dt} className="card">
    <div className="card-content">
      <div className="columns">
        <div className="column">
          <p className="title">
            {moment.unix(forecast.dt).calendar(null, formatSettings)}
          </p>
          <p className="subtitle is-5">
            {forecast.weather[0].description}
          </p>
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              <p>
                <strong>Max</strong>: {Math.round(forecast.temp.max)} ºC
              </p>
              <p>
                <strong>Min</strong>: {Math.round(forecast.temp.min)} ºC
              </p>
            </div>
            <div className="column">
              <p>
                <strong>Humidity</strong>: {forecast.humidity }%
              </p>
              <p>
                <strong>Clouds</strong>: {forecast.clouds }%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

WeatherCard.propTypes = {
  forecast: PropTypes.object.isRequired
}

export default WeatherCard;
