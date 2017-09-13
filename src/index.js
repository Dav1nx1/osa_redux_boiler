import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import 'bootstrap/dist/css/bootstrap.css';

render(
  <Root />,
  document.getElementById('app')
)
