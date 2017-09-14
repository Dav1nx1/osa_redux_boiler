import React, { PropTypes } from 'react'

const DumbDash = ({ onClick, text }) => {
  return (
    <div>
      <h1>{ text }</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

DumbDash.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default DumbDash
