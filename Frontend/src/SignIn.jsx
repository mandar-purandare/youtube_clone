import { useContext, useState } from 'react'
import './SignIn.css'
import google_logo from './images/google_logo.png'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from './Config/Axios.config';
import { AuthContext } from './Context/Auth.context';

function SignIn() {

    const router = useNavigate();

    const [user, setUser] = useState({email:'', password:''});

    const {Login} = useContext(AuthContext);

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }

    async function UserLogin(){
        if(!user.email || !user.password) return toast.error('Email or Password not provided');
        try{
            const response = await api.post('/auth/login', {...user});
            if(response.data.success){
                toast.success(response.data.message);
                Login(response.data.user);
                localStorage.setItem('yt-user-token',JSON.stringify(response.data.token));
                setTimeout(()=>{
                    router('/');
                },2000)
            }

        }catch(error){
            toast.error(error.message);
        }
    }
    
  return (
    <div className='sign-in-container'>
        <div className='sign-in-card black-border'>
            <div id='google-logo'>
                <img src={google_logo}/>
            </div>
            <h3>Sign in</h3>
            <p>to continue to YouTube</p>
            <div className={`email-phone-div`}>
                <input type='email' name='email' placeholder='Email or phone' onChange={handleChange}/>
            </div>
            <div className={`email-phone-div`}>
                <input type='password' name='password' placeholder='password' onChange={handleChange}/>
            </div>
            <p id='forgot-email'>Forgot email?</p>
            <p id='guest-mode'>Not your computer? Use Guest mode to sign in privately.</p>
            <p id='learn-more'>Learn More</p>
            <div id='create-acc-next-btn-div'>
                <p onClick={()=>{router('/register')}}>Create account</p>
                <button onClick={UserLogin}>Next</button>
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

export default SignIn