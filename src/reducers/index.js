import { combineReducers } from 'redux'
import { HELLO_WORLD, CHANGE_TEXT } from '../actions/index'
import { routerReducer } from 'react-router-redux'

const initialState = {
  message: 'Hello',
  text: 'Prueba de reducer'
}


function helloWorld(state = initialState, action) {
  switch (action.type) {
    case HELLO_WORLD:
      console.log('reducer: helloWorld')
      return Object.assign({}, state, { message: 'Hello, World!' })
    case CHANGE_TEXT:
      console.log('reducer: helloWorld')
      return Object.assign({}, state, { text: 'Aceptado'})
    default:
      return state
  }
}

const mainReducer = combineReducers({
  helloWorld,
  routing: routerReducer
})

export default mainReducer
