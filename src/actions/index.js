import fetch from 'isomorphic-fetch'

export const HELLO_WORLD = 'HELLO_WORLD'
export const CHANGE_TEXT = 'CHANGE_TEXT'

export const helloWorld = () => {
  console.log('helloWorld actions')
  return {
    type: HELLO_WORLD
  }
}

export const changeText = () => {
  console.log('changeText actions')
  return {
    type: CHANGE_TEXT,
  }
}
