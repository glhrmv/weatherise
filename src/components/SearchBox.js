import React from 'react';

import { withRouter } from 'react-router-dom';
import { init } from 'ityped';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    init(this.cityName, {
      strings: [
        'New York',
        'London',
        'Brussels',
        'Los Angeles',
        'Oslo',
        'Tokyo',
        'Edinburgh',
        'Porto',
        'San Francisco',
        'Dublin'
      ],
      typeSpeed: 60,
      backSpeed: 60,
      startDelay: 200,
      backDelay: 1500,
      showCursor: false,
      loop: true
    });
  }

  handleChange(e) {
    // The cityName property of the state can be altered
    // by the dynamic span element that changes its innerHTML
    // to a suggestion of a city to place in the input.
    // It can also be changed by the user typing something
    // into the text input in the form

    // If the event target has a value property, this means that the
    // input came from the user, and not from one of the suggestions.
    e.target.value
    ? this.setState({ cityName: e.target.value })
    : this.setState({ cityName: e.target.innerHTML });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.cityName.trim() !== '') {
      this.props.history.push('/forecast?q=' + this.state.cityName.trim());
      this.setState({ cityName: '' });
    }
  }

  render() {
    return (
      <div className="box">
        <div className="content has-text-centered">
          <p className="title is-3"
            >what's the weather in
          </p>
          <p className="subtitle is-2">
            <span
              onClick={this.handleChange}
              className="suggestion-city"
              ref={(s) => {this.cityName = s}}>
            </span>?
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="field has-addons has-addons-centered">
            <p className="control">
              <input
                onChange={this.handleChange}
                value={this.state.cityName}
                className="input"
                type="text"
                placeholder="City" />
              </p>
            <p className="control">
              <button type="submit" className="button is-info is-outlined">
                <span className="icon">
                  <i className="fa fa-globe"></i>
                </span>
                <span>Search</span>
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBox);
