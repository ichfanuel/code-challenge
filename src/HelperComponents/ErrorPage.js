import React, { Component } from 'react'
import GLOBAL_CONSTANTS from 'Constants/GlobalConstants'

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <h1>{GLOBAL_CONSTANTS.ERROR_PAGE_MESSAGE}</h1>
      </div>
    )
  }
}

export default ErrorPage
