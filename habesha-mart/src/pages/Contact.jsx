import React from 'react'
import './Contact.css'
import {FiUser, FiPhone, FiMessageCircle} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'
const Contact = () => {
    return (
        <>
            <div className="bg-container-contact100">
                <div className="contact-header">
                    <a href="#" className="contact-header-logo">
                        <img src="" alt="LOGO" />
                    </a>
                    <div>
                        <button className='btn-show-contact100'>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="container-contact100">
                <div className="wrap-contact100">
                    <button className="btn0hide-contact100">
                        <i className="zmdi zmdi-close"></i>
                    </button>
                    <div className="contact100-form-title">
                        <span>Contact Us</span>
                    </div>
                    <form action="" className="contact100-form validate-form">
                        <div className="wrap-input100 validate-input">
                            <input type="text" id="name" className='input100' name='name' placeholder='Fullname' />
                            <span className='focus-input100'></span>
                            <label htmlFor="" className="label-input100" for="name">
                                <FiUser className="lnr lnr-user m-b-2">
                                </FiUser>
                            </label>
                        </div>
                        <div className="wrap-input100 validate-input">
                            <input type="text" id="email" className="input100" name='email' placeholder='Eg.example@email.com' />
                            <span className='focus-input100'></span>
                            <label htmlFor="email" className='label-input100'>
                                <MdEmail className="inr inr-envelope m-b-5">

                                </MdEmail>
                            </label>
                        </div>
                        <div className="wrap-input100 validate-input">
                        <input type="text" id="phone" className="input100" name='phone' placeholder='Eg. +1 800 000000' />
                            <span className='focus-input100'></span>
                            <label htmlFor="phone" className='label-input100'>
                                <FiPhone className="inr inr-smartphone m-b-2">
                                </FiPhone>
                            </label>
                        </div>
                        <div className="wrap-input100 validate-input">
                            <textarea className="input100" name='message' id="message" placeholder='Your coments ...'></textarea>
                            <span className='focus-input100'></span>
                            <label htmlFor="" className='label-input100 rs1' for="message">
                                <FiMessageCircle className="lnr lnr-bubble">

                                </FiMessageCircle>
                            </label>
                        </div>
                        <div className="container-contact100-form-btn">
                            <button className="contact100-form-btn">Send Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact