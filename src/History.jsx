import React from 'react'
import TopNav from './TopNav'
import LeftMenu from './LeftMenu'
import './History.css'
import steve_harvey from './images/history-page/steve_harvey.png'
import pooja_dutt from './images/history-page/pooja_dutt.png'
import ronie_colman from './images/history-page/ronnie_coleman.png'
import rishabh_mishra from './images/history-page/rishabh_mishra.png'

import codebasics_thumbnail from './images/video-page/codebasics_hindi_thumbnail.png'
import rishabh_mishra_thumbnail from './images/video-page/rishabh_mishra_thumbnail.png'
import matt_mike_thumbnail from './images/video-page/matt_mike_thumbnail.png'
import engg_trends_thumbnail from './images/video-page/engg_trends_thumbnail.png'
import apna_college_thumbnail from './images/video-page/apna_college_thumbnail.png'

function History() {

    const videoTemplateArray = [{
                                    day:'Yesterday', 
                                    watched: [{url: steve_harvey,title:'Funniest Celebrity Family Fued Moments Of All TIME! With Stev...',pageName:'Steve Harvey',views:'155K views',description:'Funniest Celebrity Family Fued Moments Of all TIME! with Steve Harvey! The funniest answers, reactions and interactions ever on...'},
                                              {url: pooja_dutt,title:`Use these YouTubers' KILLER techniques to become a softwar...`,pageName:'Pooja Dutt',views:'51K views',description:`📒[ZERO TO MASTERY]📒 -- this great way to level up your skills!🎙 Courses:https://links.zerotomastery.io/courses_pooja_youtubers`},
                                              {url: ronie_colman,title:'Whole Gym to Myself',pageName:'Ronnie Coleman',views:'2.6M views',description:'Subscribe: https://www.youtube.com/channel/fasdofnaosdfinioasndf'}
                                            ]
                                },
                                {
                                    day:'Thursday', 
                                    watched: [
                                              {url: codebasics_thumbnail, title:'Complete data Analyst Roadmap 2023 in Hindi | Learn...', pageName:'codebasics hindi', views:'568K views', description:'9 months ago'},
                                              {url: rishabh_mishra_thumbnail, title:'Data Analyst Roadmap 2023 | How to Become a Data Analys...', pageName:'Rishabh Mishra', views:'616K views', description:'8 months ago'},
                                              {url: matt_mike_thumbnail, title:'Become a Data Analyst in 3-6 Months', pageName:'Matt Mike', views:'17K Views', description:'1 month ago'},
                                              {url: engg_trends_thumbnail, title:'Software Engineering main aane wale Top 10 trends | ..', pageName:'Tanay Pratap', views:'100K Views', description:'1 month ago'},
                                              {url: apna_college_thumbnail, title:'What is Data Science? | Complete RoadMap | Simply..', pageName:'Apna College', views:'300K Views', description:'1 month ago'}
                                            ]
                                }]
  return (
    <div className='history-container'>
        <TopNav/>
        <div className='history-body'>
            <section className='history-left-menu'>
                <LeftMenu/>
            </section>
            <section className='history-video-list'>
                <h1>Watch history</h1>
                {videoTemplateArray.map((obj,i) => (
                    <div>
                        <h4>{obj.day}</h4>
                        {obj.watched.map((video,i) => (
                            <div className='history-video-template'>
                                <div className='history-video-screen'><img src={video.url}/></div>
                                <div className='history-video-info'>
                                    <h4>{video.title}</h4>
                                    <p>{video.pageName} . {video.views}</p>
                                    <p>{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </section>
            <section className='history-manage'>
                <div id='history-search-input'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type='text' placeholder='Search watch history'/>
                </div>
                <ul className='history-manage-list'>
                    <li className='li-with-icons'><i class="fa-regular fa-trash-can"></i>Clear all watch history</li>
                    <li className='li-with-icons'><i class="fa-solid fa-pause"></i>Pause watch history</li>
                    <li className='li-with-icons'><i class="fa-solid fa-gear"></i>Manage all history</li>
                    <li>Comments</li>
                    <li>Community posts</li>
                    <li>Live chat</li>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default History