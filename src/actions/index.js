import fetch from 'isomorphic-fetch'

export const HELLO_WORLD = 'HELLO_WORLD'
export const CHECK_LOGIN = 'CHECK_LOGIN'
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGOUT_USER = 'LOGOUT_USER'
export const FETCH_PROTECTED_DATA_REQUEST = 'FETCH_PROTECTED_DATA_REQUEST'
export const RECEIVE_PROTECTED_DATA = 'RECEIVE_PROTECTED_DATA'


export const helloWorld = () => {
  console.log('helloWorld actions')
  return {
    type: HELLO_WORLD
  }
}

export const checkLogin = () => {
  console.log('check login actions')
  return {
    type: CHECK_LOGIN
  }
}

export const loginUserSuccess = (token) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token.token,
      email: token.uid
    }
  }
}

export const loginUserFailure = (error) => {
  console.log(error.status)
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.status,
      statusText: error.statusText
    }
  }
}

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: {
      text: 'Do something.'
    }
  }
}

export const logout = () => {
    sessionStorage.removeItem('user')
    return {
        type: LOGOUT_USER
    }
}

export const logoutAndRedirect = () => {
    return (dispatch, state) => {
        dispatch(logout());
        dispatch(pushState(null, '/'));
    }
}

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function loginUser(userform, redirect="/") {
  return function(dispatch) {
    dispatch(loginUserRequest());
    return fetch('http://localhost:3000/auth/sign_in/', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(userform)
      })
      .then(response => {
        if (response.status === 401) {
          dispatch(loginUserFailure(response))
        } else {
          let tokenData = {
            uid: response.headers.get('uid'),
            token: response.headers.get('access-token'),
            client: response.headers.get('client')
          }
          sessionStorage.setItem('user',
            JSON.stringify(tokenData))
          dispatch(loginUserSuccess(tokenData))
        }
      })
  }
}
