import React from 'react'

import { useNavigate } from 'react-router-dom'

import GLOBAL_CONSTANTS from 'Constants/GlobalConstants'

const HomePage = () => {
  const navigate = useNavigate()
  const navigateToGeneratePassword = () => {
    navigate('/generatePasswordPage')
  }
  return (
    <div>
      <h2>{GLOBAL_CONSTANTS.HOME_PAGE_TITLE}</h2>
      <h3>{GLOBAL_CONSTANTS.HOME_PAGE_SUBTITLE}</h3>
      <button onClick={navigateToGeneratePassword}>Enter The Generate Password Page</button>
    </div>
  )
}

export default HomePage
