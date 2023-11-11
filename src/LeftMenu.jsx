import React from 'react'
import './LeftMenu.css'
import home_icon from './images/house_icon.png'
import shorts_icon from './images/youtube-shorts-logo-15252.png'
import subscriptions_icon from './images/subscriptions_icon.png'
import your_channel_icon from './images/your_channel_icon.png'
import history_icon from './images/history_icon.png'
import your_videos_icon from './images/your_videos_icon.png'
import watch_later_icon from './images/watch_later_icon.png'

function LeftMenu() {

    const profileMenuArray = [{icon: home_icon, text:'Home'},{icon: shorts_icon, text:'Shorts'},{icon: subscriptions_icon, text:'Subscriptions'}];
    const userMenuArray = [{icon: your_channel_icon, text:'Your channel'},{icon: history_icon, text:'History'},{icon: your_videos_icon, text:'Your videos'},{icon: watch_later_icon, text:'Watch Later'}];

    return (
        <div className="left-menu">
                        <div className="side-menu">
                            <ul>
                                {profileMenuArray.map(obj => (
                                    <li><div><img src={obj.icon}/></div>{obj.text}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="side-menu">
                            <h3>You <i class="fa-solid fa-chevron-right"></i></h3>
                            <ul>
                                {userMenuArray.map(obj => (
                                    <li><div><img src={obj.icon}/></div>{obj.text}</li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="subscriptions-menu"></div> */}
                    </div>
    )
}

export default LeftMenu