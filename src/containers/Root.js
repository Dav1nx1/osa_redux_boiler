import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../stores/index'
import AppContainer from '../containers/AppContainer'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import HelloWorld from '../containers/HelloWorld'
import LoginForm from '../containers/LoginForm'
import { loginUserSuccess } from '../actions/index'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

//sessionStorage.removeItem('user')

if (sessionStorage.user) {
  store.dispatch(loginUserSuccess(JSON.parse(sessionStorage.user)));
}

export default class Root extends Component {
  render() {

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={AppContainer}>
            <IndexRoute component= {HelloWorld} />
            <Route path="/login" component={LoginForm}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}
