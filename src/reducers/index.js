import { combineReducers } from 'redux'
import { HELLO_WORLD, LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGOUT_USER, LOGIN_USER_SUCCESS } from '../actions/index'
import { routerReducer } from 'react-router-redux'
import jwtDecode from 'jwt-decode';

const initialState = {
    token: null,
    email: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null,
    message: ''
};

function helloWorld(state = initialState, action) {
  switch (action.type) {
    case HELLO_WORLD:
      console.log('reducer: helloWorld')
      return Object.assign({}, state, {
        message: 'Hello World'
      })
    case LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        'isAuthenticating': true,
        'statusText': `Iniciando el request ${action.payload.text}`
      });
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        'isAuthenticating': false,
        'isAuthenticated': true,
        'token': action.payload.token,
        'email': action.payload.email,
        'statusText': 'You have been successfully logged in.'
      });
    case LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
        token: 555555,
        message: 'Login',
        statusText: `Error autenticando codigo: ${action.payload.status} mensaje: ${action.payload.statusText}`
      })
    case LOGOUT_USER:
      return Object.assign({}, state, {
        'isAuthenticated': false,
        'token': null,
        'email': null,
        'statusText': 'You have been successfully logged out.'
      });
    default:
      return state
  }
}

const mainReducer = combineReducers({
  helloWorld,
  routing: routerReducer
})

export default mainReducer
