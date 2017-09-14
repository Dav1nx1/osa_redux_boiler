import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import configureStore from './stores/index'
import Root from './containers/Root'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/main.scss'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
)
