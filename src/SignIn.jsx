import './SignIn.css'
import google_logo from './images/google_logo.png'

function SignIn() {

    
  return (
    <div className='sign-in-container'>
        <div className='sign-in-card black-border'>
            <div id='google-logo'>
                <img src={google_logo}/>
            </div>
            <h3>Sign in</h3>
            <p>to continue to YouTube</p>
            <div className={`email-phone-div`}>
                <input type='text' placeholder='Email or phone'/>
            </div>
            <div className={`email-phone-div`}>
                <input type='text' placeholder='password'/>
            </div>
            <p id='forgot-email'>Forgot email?</p>
            <p id='guest-mode'>Not your computer? Use Guest mode to sign in privately.</p>
            <p id='learn-more'>Learn More</p>
            <div id='create-acc-next-btn-div'>
                <p>Create account</p>
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

export default SignIn