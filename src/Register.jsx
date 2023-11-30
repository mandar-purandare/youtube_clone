import React from 'react'
import './SignIn.css'
import './Register.css'
import google_logo from './images/google_logo.png'

function Register() {
    
  return (
            <div className='sign-in-container register-container' >
            <div className='sign-in-card black-border'>
                <div id='google-logo'>
                    <img src={google_logo}/>
                </div>
                <h3>Sign up</h3>
                <p>Create a Google Account</p>
                <div className='label'>Enter your name</div>
                <div className={`email-phone-div register-email-phone`}>
                    <input type='text' placeholder='First name'/>
                </div>
                <div className={`email-phone-div register-email-phone`}>
                    <input type='text' placeholder='Surname (optional)'/>
                </div>
                <div className='label'>Enter your birthday and gender</div>
                <div className='dob-divs-container'>
                    <div className={`dob-divs`}>
                        <input type='text' placeholder='Day'/>
                    </div>
                    <div className={`dob-divs`}>
                        <input type='text' placeholder='Month'/>
                    </div>
                    <div className={`dob-divs`}>
                        <input type='text' placeholder='Year'/>
                    </div>
                </div>
                <div className={`email-phone-div register-email-phone`}>
                    <input type='text' placeholder='Gender'/>
                </div>
                <div className='label'>Create you own Gmail Address</div>
                <div className={`email-phone-div register-email-phone`}>
                    <input type='text' placeholder='Create Gmail Address'/>
                </div>
                <div className='label'>Create a strong password</div>
                <div className={`email-phone-div register-email-phone`}>
                    <input type='text' placeholder='Password'/>
                </div>
                <div className={`email-phone-div register-email-phone confirm-password`}>
                    <input type='text' placeholder='Confirm Password'/>
                </div>
                <div className='show-password'>
                    <input type='checkbox'/><span>Show password</span>
                </div>
                <div className='privacy-terms-checkbox'>
                    <input type='checkbox'/><span>Privacy and Terms</span>
                </div>
                <div className='privacy-terms'>
                    <p>To create a Google Account, you'll need to agree to the <span className='blue-text'>Terms of Service</span> below.</p>
                    <p>You are agreeing to the <span className='blue-text'>Google Play Terms of Service</span> to enable discovery and management of apps.</p>
                    <p>In addition, when you create an account, we process your information as described in our <span className='blue-text'>Privacy Policy.</span></p>
                </div>
                
                <div id='create-acc-next-btn-div'>
                    <p></p>
                    <button>Next</button>
                </div>
            </div>
            <div id='bottom-options'>
                <select>
                    <option>English (United Kingdom)</option>
                </select>
                <ul>
                    <li>Help</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
            </div>
  )
}

export default Register