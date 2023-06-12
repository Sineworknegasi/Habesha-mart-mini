import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <section className="Login-bg">
            <div className="Login-form-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="Login-form">
                                <div className="Login-heading">
                                    <span>Login</span>
                                    <p>Enter Login details to get access</p>
                                </div>
                                <div className="input-box">
                                    <div className="single-input-fields">
                                        <label>Username or Email Address</label>
                                        <input type="text" placeholder="Username/Email Address" />
                                    </div>
                                    <div className="single-input-fields">
                                        <label>PassWord</label>
                                        <input type="text" placeholder="Enter Password" />
                                    </div>
                                    <div className="single-input-fields Login-check">
                                        <input type="checkbox" name="keep-log" id="fruit1" />
                                        <label htmlFor="fruit1">
                                            Keep me Logged in
                                        </label>
                                        <a href="#" className='f-right'>Forgot Password</a>
                                    </div>
                                </div>
                                <div className="Login-footer">
                                    <p className='p'>
                                        Dont't have an account?
                                        <a href="/register"> Sign Up </a> 
                                         here
                                    </p>
                                    <button className="submit-btn3">Log in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Login