import React from "react";
import './Home.css'
import TopNav from "./TopNav";
import bigmuscle from './images/big_musc_nutri.png'
import tanay_pratap from './images/tanay_pratap.png'
import amul_whey from './images/amul_whey.png'
import byte_by_byte from './images/byte_by_byte.png'
import java_dev from './images/java_dev.png'
import song_mix from './images/song_mix.png'
import shorts_red from './images/shorts_logo_red.png'
import anatoly_1 from './images/anatoly_1.png'
import anatoly_2 from './images/anatoly_2.png'
import anatoly_3 from './images/anatoly_3.png'
import anatoly_4 from './images/anatoly_4.png'
import steve_harvey from './images/steve_harvey.png'
import { useNavigate } from "react-router-dom";
import LeftMenu from "./LeftMenu";

function Home(){
    const router = useNavigate();
    function goTo(id){
        router(`/video/${id}`);
    }

    const videoGalleryNavArray = ['All','Music','Python','Mixes','Overhead press','Protein','News','T-Series','Live','Steve Harvey','Server'];
    const videoTemplateArray = [
                                    {img: bigmuscle,title:'100% Genuine Products. Free Gift With Every Purchase. Free shipping',small_title:'Sponsored. BigMuscles Nutrition'},
                                    {img: tanay_pratap,title:'Mix - Tanay Pratap',small_title:'more from this channel for you'},
                                    {img: amul_whey,title:'Amul Whey Protein: Worth the hype? | Review + Lab Test',small_title:'Kabir Grover'},
                                    {img: byte_by_byte,title:'Solve subarray problems FASTER (using Sliding Windows)',small_title:'Byte by Byte'},
                                    {img: java_dev,title:'Java Developer - Market Scenario May 2023',small_title:'SSquare IT Solutions'},
                                    {img: song_mix,title:'Mix - Khairiyat Video | Chhichhore | Nitesh tiwari | Arjit Singh | Sushant, Shraddha ...',small_title:'T-series'}];

    const shortsTemplateArray = [{img: anatoly_1,title:'ANATOLY Pretend to be a CLEANER in the Gym...',views:'2.1M views'},
                                 {img: steve_harvey,title:'A valuable lesson #shorts #steveharvey...',views:'4M views'},
                                 {img: anatoly_2,title:'ANATOLY AESTHETIC IN PUBLIC PRANK 😱...',views:'676K views'},
                                 {img: anatoly_3,title:'How to Prank a Calisthenics Gym Bro...',views:'29M views'},
                                 {img: anatoly_4,title:'120 Kg Dumbell Press For 7 Reps Naturally ...',views:'12M views'}]
    return(
        <div className="home-container">
            <TopNav/>
            <div className="content">
                <LeftMenu/>
                <div className="video-gallery">
                    <div className="video-gallery-nav">
                        <ul>
                            {videoGalleryNavArray.map(category => (
                                <li><div>{category}</div></li>
                            ))}
                        </ul>
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="video-grid">
                        {videoTemplateArray.map((obj,i) => (
                            <div className="video-template" onClick={() => goTo(i)}>
                                <div className="">
                                    <img src={obj.img}/>
                                </div>
                                <h4>{obj.title}</h4>
                                <p>{obj.small_title}</p> 
                            </div>
                        ))}
                    </div>
                    <section className="shorts">
                        <div className="shorts-heading">
                            <img src={shorts_red}/>
                            <h3>Shorts</h3>
                        </div>
                        <div className="shorts-grid">
                            {shortsTemplateArray.map(obj => (
                                 <div className="shorts-template">
                                    <div className="shorts-image">
                                        <img src={obj.img}/>
                                    </div>
                                    <h3>{obj.title}</h3>
                                    <p>{obj.views}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home;