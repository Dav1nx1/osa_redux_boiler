import React, { PropTypes } from 'react'

const HomePage = ({ onClick, message, token }) => {
  return (
    <div>
      <h1>{ message }</h1>
      <h3>{ token }</h3>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

HomePage.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default HomePage
