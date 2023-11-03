import React from "react";
import TopNav from "./TopNav";
import './Video.css';
import { useParams } from "react-router-dom";
import sort_filter from './images/video-page/sort_by_icon.png'

function Video(){
    let {id} = useParams();
    return(
        <div className="video-container black-border">
            <TopNav/>
            <div id="video-body">
                <section id="video-body-left">
                    <div id="video-screen"></div>
                    <h2 id="video-title">Earn 54,166 per month from HOME | Data Analyst Roadmap 2024 | Tanay Pratap Hindi</h2>
                    <div id="video-actions">
                        <div>
                            <div id="channel-pic-title">
                                <div id="channel-pic"></div>
                                <div id="channel-title">
                                    <h4>Tanay Pratap</h4>
                                    <p id="channel-subscribers">228K subscribers</p>
                                </div>
                            </div>
                            <button id="subscribe-button">Subscribe</button>
                        </div>
                        <div>
                            <div className="video-action-buttons"><i class="fa-regular fa-thumbs-up"></i><span>4.8K</span> | <i class="fa-regular fa-thumbs-down"></i></div>
                            <div className="video-action-buttons"><i class="fa-solid fa-share"></i><span>Share</span></div>
                            <div className="video-action-buttons"><i class="fa-solid fa-download"></i><span>Download</span></div>
                            <div className="video-action-buttons round-btn">...</div>
                        </div>
                    </div>
                    <div id="video-captions">
                        <p><span>80K views</span><span>11 days ago</span><span>#dataanalyst#tanaypratap#data</span></p>
                        <p>In this Lambi lakeer video, understand how you can become a data analyst and what things to focus on early!</p>
                        <p>See more..</p>
                    </div>
                    <div id="comments-sort-by">
                        <h3>726 Comments</h3>
                        <div><img src={sort_filter}/></div>
                        <h4>Sort by</h4>
                    </div>
                    <div className="comment-template">
                        <div className="comment-template-left">
                            <div className="commenter-profile-pic"></div>
                        </div>
                        <div>
                            <div className="commenter-id-and-time"></div>
                            <div className="comment-text"></div>
                            <div className="comment-reactions"></div>
                            <div className="comment-replies"></div>
                        </div>
                    </div>
                </section>
                <section id="video-body-right"></section>
            </div>
        </div>
    );
}

export default Video