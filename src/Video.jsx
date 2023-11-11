import React from "react";
import TopNav from "./TopNav";
import './Video.css';
import { useParams } from "react-router-dom";
import sort_filter from './images/video-page/sort_by_icon.png'
import commenter_1 from './images/video-page/commenter_1_pic.png'
import commenter_2 from './images/video-page/commenter_2_pic.png'
import tanay_pratap_pic from './images/video-page/tanay_pratap_profile_pic.png'
import video_start_frame from './images/video-page/video_start_frame.png'
import codebasics_thumbnail from './images/video-page/codebasics_hindi_thumbnail.png'
import rishabh_mishra_thumbnail from './images/video-page/rishabh_mishra_thumbnail.png'
import matt_mike_thumbnail from './images/video-page/matt_mike_thumbnail.png'
import engg_trends_thumbnail from './images/video-page/engg_trends_thumbnail.png'
import apna_college_thumbnail from './images/video-page/apna_college_thumbnail.png'

function Video(){
    let {id} = useParams();

    let videoObj = {url: 'https://www.youtube.com/embed/BBkFLEN2G6A', 
                    title:'Earn 54,166 per month from HOME | Data Analyst Roadmap 2024 | Tanay Pratap Hindi', 
                    channel_pic: tanay_pratap_pic,
                    channel_name: 'Tanay Pratap', 
                    subscribers:'228K subscribers',
                    likes:'4.8K', 
                    dislikes:'', 
                    views:'80K', 
                    time:'11 days ago', 
                    comments:'726 comments', 
                    hashtag:'#dataanalyst#tanaypratap#data', 
                    captions:''}

    const commentsArray = [{comment_user_pic: commenter_1,comment_user_id:'@fourbytes', comment_text:`I am a Tech Lead in Machine Learning, here's the true insights. 1. Data Cleaning is the truth. You have to do the hard work. 
    2. Insights and pattern recognition is important before even thinking about machine learning. Statistics pure dil se ana chahiye.`, comment_time:'11 days ago', likes: '72', dislikes: '', replies: '26 replies', reply_pic: tanay_pratap_pic},
                           {comment_user_pic: commenter_2,comment_user_id:'@mahfoozalam281', comment_text:`Thanks bhaiya for educating
                           I'm Mahfooz Alam from Allahabad Uttar Pradesh and I'm in training for a Financial Analyst that's provided by you, The course is really amazing. Firstly I understand that the game means concepts and enjoy playing with exercises. The contents, you provide, anybody can be an expert. I really appreciate it for providing the training.`, comment_time:'2 days ago', likes: '1', dislikes: '', replies: '',  reply_pic:''}];
    
    const videoListArray = [{thumbnail: codebasics_thumbnail, title:'Complete data Analyst Roadmap 2023 in Hindi | Learn...', channel_name:'codebasics hindi', views:'568K views', upload_time:'9 months ago'},
                            {thumbnail: rishabh_mishra_thumbnail, title:'Data Analyst Roadmap 2023 | How to Become a Data Analys...', channel_name:'Rishabh Mishra', views:'616K views', upload_time:'8 months ago'},
                            {thumbnail: matt_mike_thumbnail, title:'Become a Data Analyst in 3-6 Months', channel_name:'Matt Mike', views:'17K Views', upload_time:'1 month ago'},
                            {thumbnail: engg_trends_thumbnail, title:'Software Engineering main aane wale Top 10 trends | ..', channel_name:'Tanay Pratap', views:'100K Views', upload_time:'1 month ago'},
                            {thumbnail: apna_college_thumbnail, title:'What is Data Science? | Complete RoadMap | Simply..', channel_name:'Apna College', views:'300K Views', upload_time:'1 month ago'}]
    return(
        <div className="video-container black-border">
            <TopNav/>
            <div id="video-body">
                <section id="video-body-left">
                    {/* <div id="video-screen"><img src={video_start_frame}/></div> */}
                    <iframe id="video-screen" src={videoObj.url}></iframe>
                    <h2 id="video-title">{videoObj.title}</h2>
                    <div id="video-actions">
                        <div>
                            <div id="channel-pic-title">
                                <div id="channel-pic"><img src={videoObj.channel_pic}/></div>
                                <div id="channel-title">
                                    <h4>{videoObj.channel_name}</h4>
                                    <p id="channel-subscribers">{videoObj.subscribers}</p>
                                </div>
                            </div>
                            <button id="subscribe-button">Subscribe</button>
                        </div>
                        <div>
                            <div className="video-action-buttons"><i class="fa-regular fa-thumbs-up"></i><span>{videoObj.likes}</span> | <i class="fa-regular fa-thumbs-down"></i></div><span>{videoObj.dislikes}</span>
                            <div className="video-action-buttons"><i class="fa-solid fa-share"></i><span>Share</span></div>
                            <div className="video-action-buttons"><i class="fa-solid fa-download"></i><span>Download</span></div>
                            <div className="video-action-buttons round-btn">...</div>
                        </div>
                    </div>
                    <div id="video-captions">
                        <p><span>{videoObj.views}</span><span>{videoObj.time}</span><span>{videoObj.hashtag}</span></p>
                        <p>In this Lambi lakeer video, understand how you can become a data analyst and what things to focus on early!</p>
                        <p>See more..</p>
                    </div>
                    <div id="comments-sort-by">
                        <h3>726 Comments</h3>
                        <div><img src={sort_filter}/></div>
                        <h4>Sort by</h4>
                    </div>
                    {commentsArray.map(obj => (
                            <div className="comment-template">
                                <div className="comment-template-left">
                                    <div className="commenter-profile-pic"><img src={obj.comment_user_pic}/></div>
                                </div>
                                <div>
                                    <div className="commenter-id-and-time">
                                        <strong>{obj.comment_user_id}</strong>
                                        <p>{obj.comment_time}</p>
                                    </div>
                                    <div className="comment-text"><p>{obj.comment_text}</p></div>
                                    <div className="comment-reactions">
                                        <i class="fa-regular fa-thumbs-up"></i>
                                        <span>{obj.likes}</span>
                                        <i class="fa-regular fa-thumbs-down"></i>
                                        <span>{obj.dislikes}</span>
                                        <strong>Reply</strong>
                                    </div>
                                    {obj.replies? 
                                    <div className="comment-replies">
                                        <i class="fa-solid fa-caret-down"></i>
                                        <div className="commenter-profile-pic reply-profile-pic"><img src={obj.reply_pic}/></div>
                                        <span>.</span>
                                        <p>{obj.replies}</p>
                                    </div> : <div></div>}
                                </div>
                        </div>
                    ))}
                    
                </section>
                <section id="video-body-right">
                    { videoListArray.map(obj => (
                            <div className="video-list-template">
                                    <div className="video-list-thumbnail"><img src={obj.thumbnail}/></div>
                                    <div className="video-list-info">
                                        <h4 className="video-list-title">{obj.title}</h4>
                                        <p className="video-list-channel-name">{obj.channel_name}</p>
                                        <div className="video-list-views-time">
                                            <span>{obj.views}</span>.<span>{obj.upload_time}</span>
                                        </div>
                                    </div>
                            </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Video