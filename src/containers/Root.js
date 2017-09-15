import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import configureStore from '../stores/index'
import AppContainer from './AppContainer';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import HelloWorld from './HelloWorld';
import SmartDash from './SmartDash'

const store = configureStore()

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <Route path="/" component={ AppContainer } history={this.props.history} >
            <IndexRoute component= { SmartDash } />
            <Route path="dashboard" component={ HelloWorld } />
          </Route>
        </Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
