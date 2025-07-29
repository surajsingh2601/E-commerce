import React from 'react'

import './CSS/LoginSignup.css'
import { useState } from 'react'

const LoginSignup = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleEmail = (e)=> {
    setEmail(e.target.value);
  }

  const handlePassword = (e)=> {
    setPassword(e.target.value);
  }



  return (


    <div  className='loginsignup'>


      <div className="loginsignup-container">

        <h1>Sign Up</h1>

        <div className="loginsignup-fields">

          <input onChange={handleText} type="text" value={text}  placeholder='Your Name' />
          <input onChange={handleEmail}  type="email" value={email} placeholder='Your Email Address' />
          <input onChange={handlePassword}  type="password" value={password} placeholder='Enter Your Password' />
        </div>

        <button> Continue </button>
        <p className="loginsignup-login"> Already have an account? <span> Login here </span></p>

        <div className="loginsingup-agree">
          <input type="checkbox" name='' id='' />
          <p> By continuing, i agree to the terms of use and privacy policy. </p>
        </div>

      </div>



    </div>
  )
}

export default LoginSignup
