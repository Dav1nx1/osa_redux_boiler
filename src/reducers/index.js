import { combineReducers } from 'redux'
import { HELLO_WORLD } from '../actions/index'
import { routerReducer } from 'react-router-redux'

function helloWorld(state = { message: 'Hello' }, action) {
  switch (action.type) {
    case HELLO_WORLD:
      console.log('reducer: helloWorld')
      return Object.assign({}, state, { message: 'Hello, World!' })
    default:
      return state
  }
}

const mainReducer = combineReducers({
  helloWorld,
  routing: routerReducer
})

export default mainReducer
