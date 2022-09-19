import React, { Component } from 'react'

import GLOBAL_CONSTANTS from 'Constants/GlobalConstants'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(Error) {
    return {
      hasError: true,
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>{GLOBAL_CONSTANTS.ERROR_BOUNDARY_MESSAGE}</h1>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
