import React from 'react'
import  './about-us.css'
import AboutUsVide from './about-us-video'
//  import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import AboutUsCircle from "./about-us-video/about-us-circle/about-us-circle"
  import ChangingProgressProvider from "./about-us-video/about-us-circle/ChangingProgressProvider";

const AboutUs = () =>{
const aboutUs = [
    {id:1,info:'հաջող մեկնարկված պռոեկտներ', circle:50, circleLable:200},
    {id:2,info:'Մենք շուկայում ենք 2017թ -ից', circle:100, circleLable:'2017թ'},
    {id:3,info:'Ավելի քան 250 գոհ հաճախորդ', circle:40, circleLable:250},
    {id:4,info:'Մենք ունենք 124 ավարտած աշակերներ', circle:75, circleLable:124}
]
  
    return(
        <div className = "about-us">
            <div className = "about-us-name">
            <h2>Մեր մասին</h2>
            </div>
       <div className = "about-us-container">
           {aboutUs.map((about) =>(
                <span key = {about.id}>
          <AboutUsCircle >
      <ChangingProgressProvider values={[0, about.circle]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={about.circleLable}
            styles={buildStyles({
                
              pathTransition:
                percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
            })}
          />
        )}
      </ChangingProgressProvider>
    </AboutUsCircle>
                <p>
                    {about.info}
                </p>
                </span>
           ))

           }
           </div>
            <AboutUsVide/>
        </div>
    )
}


export default AboutUs