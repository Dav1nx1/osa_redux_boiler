import { connect } from 'react-redux'
import { HELLO_WORLD } from './../actions'
import App from '../components/App'
import { logoutAndRedirect } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.helloWorld.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(logoutAndRedirect())
    },
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
