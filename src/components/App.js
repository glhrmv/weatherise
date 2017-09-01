import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NProgress from 'nprogress'

import LeftMenu from './LeftMenu'
import Home from './Home'
import Forecast from './Forecast'

export default class App extends React.Component {
  componentWillMount() {
    NProgress.start()
  }

  componentDidMount() {
    NProgress.done()
  }

  render() {
    return (
      <Router>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-3 is-offset-1">
                <LeftMenu />
              </div>
              <div className="column is-7">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/forecast" component={Forecast} />
                  <Route component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </Router>
    )
  }
}
