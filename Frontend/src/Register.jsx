import React, { useState } from 'react'
import './SignIn.css'
import './Register.css'
import google_logo from './images/google_logo.png'
import toast, { Toaster } from 'react-hot-toast';
import api from './Config/Axios.config';
import { useNavigate } from 'react-router-dom';

function Register() {

    const router = useNavigate();

    const [user, setUser] = useState({name:'', surname:'', day:'', month:'', year:'', gender:'', email:'', password:'', confirmPass:''});

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }

     async function registerUser(event){
        event.preventDefault();
        if(!user.name || !user.password || !user.confirmPass || !user.email || !user.gender || !user.day || !user.month || !user.year){
            return toast.error('Please fill all mandatory fields');
        }

        if(user.password !== user.confirmPass){
            return toast.error('Password and Confirm password do not match');
        }

        try{
            const response = await api.post('/auth/register',{...user});
            if(response.data.success){
                toast.success(response.data.message);
                router('/signin');
            }

        }catch(error){
            toast.error(error.response.data.message);
        }
        
    }
    
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
                        <input type='text' placeholder='First name' name='name' onChange={handleChange}/>
                    </div>
                    <div className={`email-phone-div register-email-phone`}>
                        <input type='text' placeholder='Surname (optional)' name='surname' onChange={handleChange}/>
                    </div>
                    <div className='label'>Enter your birthday and gender</div>
                    <div className='dob-divs-container'>
                        <div className={`dob-divs`}>
                            <input type='text' placeholder='Day' name='day' onChange={handleChange}/>
                        </div>
                        <div className={`dob-divs`}>
                            <input type='text' placeholder='Month' name='month' onChange={handleChange}/>
                        </div>
                        <div className={`dob-divs`}>
                            <input type='text' placeholder='Year' name='year' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className={`email-phone-div register-email-phone`}>
                        <input type='text' placeholder='Gender' name='gender' onChange={handleChange}/>
                    </div>
                    <div className='label'>Create you own Gmail Address</div>
                    <div className={`email-phone-div register-email-phone`}>
                        <input type='text' placeholder='Create Gmail Address' name='email' onChange={handleChange}/>
                    </div>
                    <div className='label'>Create a strong password</div>
                    <div className={`email-phone-div register-email-phone`}>
                        <input type='password' placeholder='Password' name='password' onChange={handleChange}/>
                    </div>
                    <div className={`email-phone-div register-email-phone confirm-password`}>
                        <input type='password' placeholder='Confirm Password' name='confirmPass' onChange={handleChange}/>
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
                        <button onClick={registerUser}>Next</button>
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
                <Toaster/>
            </div>
  )
}

export default Register