import { connect } from 'react-redux'
import { changeText } from './../actions'
import DumbDash from '../components/DumbDash'

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.helloWorld.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(changeText())
    }
  }
}

const SmartDash = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbDash)

export default SmartDash
