import React from 'react';

import NProgress from 'nprogress';
import qs from 'qs';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import WeatherCard from './WeatherCard';

const baseUrl = 'http://api.openweathermap.org/data/2.5';
const apiKey = 'df4e03736c39bd4ff908e176104afde8';

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
      cityName: null,
      cityCountry: null,
      forecast: [],
      loading: true
    };

    this.fetchForecast = this.fetchForecast.bind(this);
    this.getQuery = this.getQuery.bind(this);
  }

  getQuery(props) {
    let search = qs.parse(props.location.search.substring(1));

    if (search.q) {
      this.setState({ search: search.q });
    }
  }

  fetchForecast(cityName) {
      axios.get(baseUrl + '/forecast/daily', { params: {
        q: cityName,
        type: 'like',
        units: 'metric',
        cnt: 5,
        APPID: apiKey
      }}).then((res) => {
        NProgress.done();

        console.log(res.data.list);

        this.setState({
          cityName: res.data.city.name,
          cityCountry: res.data.city.country,
          forecast: res.data.list,
          loading: false
        });
      });
  }

  componentWillMount(nextProps) {
    this.getQuery(this.props);
  }

  componentDidMount(prevProps) {
    NProgress.start();

    this.fetchForecast(this.state.search);
  }

  componentWillUpdate(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.setState({
        cityName: null,
        forecast: {},
        loading: true
      }, this.getQuery(nextProps));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      NProgress.start();

      this.fetchForecast(this.props.location.search);
    }
  }

  render() {
    if (!this.state.search && this.state.search !== '') {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div className="card">
          <div className="card-header">
            <p className="card-header-title">
              {
                this.state.cityName ? (
                  <span>
                    Forecast for {this.state.cityName}, {this.state.cityCountry}
                    <Link to="/"> (back home)</Link>
                  </span>
                ) : (
                  <span>Looking up {this.state.search}</span>
                )
              }
            </p>
          </div>
          {this.state.loading &&
            <div className="card-content">
                <p>loading...</p>
            </div>
          }
        </div>
        {
          !this.state.loading &&
            this.state.forecast.map((f) =>
              <WeatherCard key={f.dt} forecast={f} />
            )
        }
      </div>
    );
  }
}
