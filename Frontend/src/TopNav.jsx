import React, { useContext, useEffect, useState } from 'react'
import youtube_logo from './images/youtube_logo.png'
import handicam_icon from './images/handicam_icon.png'
import bell_icon from './images/bell_icon.png'
import './TopNav.css'
import { useNavigate } from "react-router-dom";
import { AuthContext } from './Context/Auth.context'

function TopNav() {
    const {loginState, Logout} = useContext(AuthContext);
    const [accountActions, setAccountActions] = useState(false);
    const router = useNavigate();

    function toggleAccountActions(){
        setAccountActions(accountActions => !accountActions)
    }

    function goTo(path){
        router('/'+path);
    }

  return (
    <div>
        <nav className="top-nav">
                <div className="top-nav-left">
                    <i class="fa-solid fa-bars fa-xl"></i>
                    <div><img src={youtube_logo}/></div>
                </div>
                <div className="top-nav-centre">
                    <div className="top-nav-search-div">
                        <input type="text" placeholder="Search"/>
                        <div>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-microphone"></i>
                    </div>
                </div>
                <div className="top-nav-right">
                    <div>
                        {/* <img src={handicam_icon}/> */}
                        <i class="fa-solid fa-video"></i>
                    </div>
                    <div>
                        {/* <img src={bell_icon}/> */}
                        <i class="fa-regular fa-bell"></i>
                    </div>
                    {/* console.log(loginState.user); */}
                    
                    { 
                        loginState?.user?.name? 
                            <div className='welcome-div'>
                                <div onClick={toggleAccountActions}>{loginState?.user?.name}</div>
                                <div onClick={() => {Logout()}}>Logout</div>
                            </div>
                            :
                            <div>
                                <div className='user-logo-div' onClick={toggleAccountActions}>
                                <i class="fa-solid fa-user"></i>
                                </div>
                            </div>
                    }
                    {
                         accountActions?
                         <div className='account-actions'>
                             <div onClick={() => goTo('register')}>Register</div>
                             <div onClick={() => goTo('signin')}>Login</div>
                         </div>:<div></div>
                    }
                    
                </div>
            </nav>
    </div>
  )
}

export default TopNav