import React from "react";
import './You.css'
import TopNav from "./TopNav";
import LeftMenu from "./LeftMenu";
import switch_account_icon from './images/you-page/user-icon.png'
import google_icon from './images/you-page/google-icon.png'
import dp_image from './images/you-page/dp_image.png'

import steve_harvey from './images/history-page/steve_harvey.png'
import pooja_dutt from './images/history-page/pooja_dutt.png'
import ronie_colman from './images/history-page/ronnie_coleman.png'
import rishabh_mishra from './images/history-page/rishabh_mishra.png'

import codebasics_thumbnail from './images/video-page/codebasics_hindi_thumbnail.png'
import rishabh_mishra_thumbnail from './images/video-page/rishabh_mishra_thumbnail.png'
import matt_mike_thumbnail from './images/video-page/matt_mike_thumbnail.png'
import engg_trends_thumbnail from './images/video-page/engg_trends_thumbnail.png'
import apna_college_thumbnail from './images/video-page/apna_college_thumbnail.png'

function You(){

    const videoTemplateArray = [{
                                category:'History', 
                                watched: [{url: steve_harvey,title:'Funniest Celebrity Family Fued Moments Of All TIME! With Stev...',pageName:'Steve Harvey',views:'155K views',description:'Funniest Celebrity Family Fued Moments Of all TIME! with Steve Harvey! The funniest answers, reactions and interactions ever on...',time:'1 month ago'},
                                        {url: pooja_dutt,title:`Use these YouTubers' KILLER techniques to become a softwar...`,pageName:'Pooja Dutt',views:'51K views',description:`📒[ZERO TO MASTERY]📒 -- this great way to level up your skills!🎙 Courses:https://links.zerotomastery.io/courses_pooja_youtubers`, time:'2 weeks ago'},
                                        {url: ronie_colman,title:'Whole Gym to Myself',pageName:'Ronnie Coleman',views:'2.6M views',description:'Subscribe: https://www.youtube.com/channel/fasdofnaosdfinioasndf', time:'1 month ago'}
                                        ]
                                },
                                {
                                    category:'Watch Later', 
                                    watched: [
                                            {url: codebasics_thumbnail, title:'Complete data Analyst Roadmap 2023 in Hindi | Learn...', pageName:'codebasics hindi', views:'568K views', time:'9 months ago'},
                                            {url: rishabh_mishra_thumbnail, title:'Data Analyst Roadmap 2023 | How to Become a Data Analys...', pageName:'Rishabh Mishra', views:'616K views', time:'8 months ago'},
                                            {url: matt_mike_thumbnail, title:'Become a Data Analyst in 3-6 Months', pageName:'Matt Mike', views:'17K Views', time:'1 month ago'},
                                            {url: engg_trends_thumbnail, title:'Software Engineering main aane wale Top 10 trends | ..', pageName:'Tanay Pratap', views:'100K Views', time:'1 month ago'},
                                            {url: apna_college_thumbnail, title:'What is Data Science? | Complete RoadMap | Simply..', pageName:'Apna College', views:'300K Views', time:'1 month ago'}
                                            ]
                                }]

    return(
    
        <div className="you-container">
            <TopNav/>
            <LeftMenu/>
            <section id="you-profile">
                <div id="you-display-pic">
                    <img src={dp_image}/>
                </div>
                <div id="you-info">
                    <h1>Mandar Purandare</h1>
                    <p>@mandarpurandare2340 . View channel</p>
                    <div className="you-button-container">
                        <button><img src={switch_account_icon}/>Switch account</button>
                        <button><img src={google_icon}/>Google Account</button>
                    </div>
                </div>
            </section>
            <section id="you-video-categories">
                {videoTemplateArray.map((obj,i) => (
                    <div>
                        <div className="you-video-category-title">
                            <h3>{obj.category}</h3>
                            <p className="text-blue">See all</p>
                        </div>
                        <div className="you-video-grid">
                            {obj.watched.map((obj,i) => (
                                <div className="you-video-template">
                                    <div className="you-video-screen"><img src={obj.url}/></div>
                                    <h5 className="you-video-title">{obj.title}</h5>
                                    <p className="you-video-page-name">{obj.pageName}</p>
                                    <p className="you-video-views-time">{obj.views} . {obj.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    
    )
}

export default You