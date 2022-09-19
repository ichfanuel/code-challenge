import React, { useRef } from 'react'

import bcrypt from 'bcryptjs-react'

import GLOBAL_CONSTANTS from 'Constants/GlobalConstants'

import 'Components/Components.css'

const GeneratePasswordPage = () => {
  const userIdRef = useRef()
  const hashedPasswordRef = useRef()
  const dateRef = useRef()

  const providedPasswordRef = useRef()

  const generateThePassword = e => {
    e.preventDefault()
    const userId = userIdRef.current.value

    dateRef.current = new Date()

    // const userIdAndDate = userId.toString() + dateRef.current.toTimeString()

    const firstBatch = Math.random().toString(36).slice(2)
    const secondBatch = Math.random().toString(36).slice(2)
    const thirdBatch = Math.random().toString(36).slice(2)

    const password =
      userId.toString().slice(0, 2) +
      firstBatch +
      userId.toString().slice(1) +
      secondBatch +
      dateRef.current.toLocaleString().trim() +
      thirdBatch

    alert('the password is: ' + password)

    const salt = bcrypt.genSaltSync(10)
    hashedPasswordRef.current = bcrypt.hashSync(password, salt)
  }

  const verifyExpirationTime = date => {
    const differenceInMs = date - dateRef.current
    if (differenceInMs > 30000) {
      return 'expired'
    } else {
      return 'available'
    }
  }

  const verifyThePassword = e => {
    e.preventDefault()
    if (verifyExpirationTime(Date.now()) === 'available') {
      const providedPassword = providedPasswordRef.current.value
      const hashedPassword = hashedPasswordRef.current
      if (bcrypt.compareSync(providedPassword, hashedPassword)) {
        console.log(providedPassword)
        console.log(hashedPassword)
        console.log(bcrypt.compareSync(providedPassword, hashedPassword))
        alert('the password is available and correct')
      } else {
        alert("the password it's incorect")
      }
    } else {
      alert('the password has expired')
    }
    e.preventDefault()
  }

  return (
    <div>
      <div className="generateThePasswordDiv">
        <h2 className="divTitle">{GLOBAL_CONSTANTS.GENERATE_PASSWORD_PAGE_TITLE}</h2>
        <form>
          <div className="userIdInput">
            <label>Your UserId: </label>
            <input type="text" name="userId" placeholder="eg. 354xcs32" ref={userIdRef} />
            {/*a 'required' function for the field was nice to add, but I didn't have so much time
            left*/}
          </div>
          <button className="generateButton" onClick={generateThePassword}>
            Generate your password
          </button>
        </form>
      </div>
      <div className="testThePasswordDiv">
        <form>
          <input type="password" name="verifyPassword" ref={providedPasswordRef} />
          <button className="verifyButton" onClick={verifyThePassword}>
            Verify the password
          </button>
        </form>
      </div>
    </div>
  )
}

export default GeneratePasswordPage
