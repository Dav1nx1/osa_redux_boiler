import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../stores/index'
import App from '../components/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import HomePage from '../components/home/HomePage'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component= {HomePage} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
