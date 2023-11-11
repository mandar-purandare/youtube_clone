import React from 'react'
import TopNav from './TopNav'
import LeftMenu from './LeftMenu'
import './History.css'
import steve_harvey from './images/history-page/steve_harvey.png'
import pooja_dutt from './images/history-page/pooja_dutt.png'
import ronie_colman from './images/history-page/ronnie_coleman.png'
import rishabh_mishra from './images/history-page/rishabh_mishra.png'

function History() {

    const videoTemplateArray = [{url: steve_harvey,title:'Funniest Celebrity Family Fued Moments Of All TIME! With Stev...',pageName:'Steve Harvey',views:'155K views',description:'Funniest Celebrity Family Fued Moments Of all TIME! with Steve Harvey! The funniest answers, reactions and interactions ever on...'},
                                {url: pooja_dutt,title:`Use these YouTubers' KILLER techniques to become a softwar...`,pageName:'Pooja Dutt',views:'51K views',description:`📒[ZERO TO MASTERY]📒 -- this great way to level up your skills!🎙 Courses:https://links.zerotomastery.io/courses_pooja_youtubers`},
                                {url: ronie_colman,title:'Whole Gym to Myself',pageName:'Ronnie Coleman',views:'2.6M views',description:'Subscribe: https://www.youtube.com/channel/fasdofnaosdfinioasndf'}]
  return (
    <div className='history-container'>
        <TopNav/>
        <div className='history-body'>
            <section className='history-left-menu'>
                <LeftMenu/>
            </section>
            <section className='history-video-list'>
                <h1>Watch history</h1>
                <h4>Yesterday</h4>
                {videoTemplateArray.map((obj,i) => (
                    <div className='history-video-template black-border'>
                         <div className='history-video-screen black-border'><img src={obj.url}/></div>
                         <div className='history-video-info'>
                             <h4>{obj.title}</h4>
                             <p>{obj.pageName} . {obj.views}</p>
                             <p>{obj.description}</p>
                         </div>
                    </div>
                ))}
            </section>
            <section></section>
        </div>
    </div>
  )
}

export default History