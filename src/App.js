import React from 'react'

import { Routes, Route } from 'react-router-dom'

import GeneratePasswordPage from 'Components/GeneratePasswordPage'
import HomePage from 'Components/HomePage'
import NoRoutePage from 'HelperComponents/NoRoutePage'

import './App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exacth path="/" element={<HomePage />} />
        <Route exact path="/generatePasswordPage" element={<GeneratePasswordPage />} />
        <Route path="*" element={<NoRoutePage />} />
      </Routes>
    </div>
  )
}

export default App
