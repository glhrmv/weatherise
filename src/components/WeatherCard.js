import React from 'react'

import PropTypes from 'prop-types'
import moment from 'moment'

const formatSettings = {
  sameDay: '[Today], MMMM Do YYYY',
  nextDay: '[Tomorrow], MMMM Do YYYY',
  nextWeek: 'dddd, MMMM Do YYYY',
  lastDay: '[Yesterday], MMMM Do',
  sameElse: 'dddd, MMMM Do YYYY'
}

const WeatherCard = ({ forecast }) => (
  <div key={forecast.dt} className="card weather-card">
    <div className="card-content">
      <div className="columns">
        <div className="column is-5">
          <p className="title is-4">
            {moment.unix(forecast.dt).calendar(null, formatSettings)}
          </p>
          <p className="subtitle is-6">
            <span className="icon weather-icon">
              <i className={forecast.weather[0].icon} />
            </span>
            &nbsp;
            {forecast.weather[0].description}
          </p>
        </div>
        <div className="column is-7">
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
                <strong>Humidity</strong>: {forecast.humidity || 0}%
              </p>
              <p>
                <strong>Clouds</strong>: {forecast.clouds || 0}%
              </p>
            </div>
            <div className="column">
              <p>
                <strong>Rain</strong>: {forecast.rain || 0}%
              </p>
              <p>
                <strong>Winds</strong>: {forecast.speed} m/s
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

export default WeatherCard
