import { connect } from 'react-redux'
import { HELLO_WORLD } from './../actions'
import Hello from '../components/Hello'

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.helloWorld.message,
    token: state.helloWorld.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: HELLO_WORLD })
    }
  }
}

const HelloWorld = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default HelloWorld
