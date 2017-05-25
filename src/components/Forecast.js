import React from 'react';

import { Link, Redirect } from 'react-router-dom';
import NProgress from 'nprogress';
import qs from 'qs';
import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5';
const apiKey = 'df4e03736c39bd4ff908e176104afde8';

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
      cityName: null,
      forecast: {},
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
    axios.all([
      axios.get(baseUrl + '/weather', { params: {
        q: cityName,
        type: 'accurate',
        APPID: apiKey
      }}),
      axios.get(baseUrl + '/forecast', { params: {
        q: cityName,
        type: 'accurate',
        cnt: 5,
        APPID: apiKey
      }}),
    ]).then((res) => {
      NProgress.done();

      this.setState({
        cityName: res[0].data.name,
        forecast: res,
        loading: false
      }, () => console.log('update set state'));
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
      <div className="card">
        <div className="card-header">
            <p className="card-header-title">
                {
                  this.state.cityName ? (
                    <span>
                      Forecast for {this.state.cityName}
                      <Link to="/"> (back home)</Link>
                    </span>
                  ) : (
                    <span>Looking up {this.state.search}</span>
                  )
                }
            </p>
        </div>
        <div className="card-content">
          {this.state.loading ? (
            <p>loading...</p>
          ) : (
            <div>
              done!

              <pre>
                {JSON.stringify(this.state.forecast, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    );
  }
}
