import React from 'react'

import { Routes, Route } from 'react-router-dom'

import GeneratePasswordPage from 'Components/GeneratePasswordPage'
import HomePage from 'Components/HomePage'
import ErrorPage from 'HelperComponents/ErrorPage'

import './App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exacth path="/" element={<HomePage />} />
        <Route exact path="/generatePasswordPage" element={<GeneratePasswordPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
