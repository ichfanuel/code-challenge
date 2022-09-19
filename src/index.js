import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import App from 'App'
import ErrorBoundary from 'HelperComponents/ErrorBoundary'

import 'index.css'

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </ErrorBoundary>,
  document.getElementById('root'),
)
