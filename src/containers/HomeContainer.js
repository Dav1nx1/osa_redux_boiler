import { connect } from 'react-redux'
import { HELLO_WORLD } from './../actions'
import HomePage from '../components/home/HomePage'

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

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomeContainer
