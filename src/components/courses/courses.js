import React from 'react'
import './courses.css'
import CoursesImg1 from '../imgs/Group 495.png'
import CoursesImg2 from '../imgs/Group 496.png'
import {AiOutlineUser} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {BiCalendarCheck} from 'react-icons/bi'

const Courses = () =>{
const courses = [
    {id:1,name:'Front-end',info:'Վեբ ծրագրավորումը ներկայումս աշխատաշուկայում ամենապահանջված մասնագիտություններից է։ Այն բաժանվում է 2 հիմնական մասնագիտացումների՝ Front-End և Back-End ծրագրավորում, որոնցից յուրաքանչյուրն ունի...',
     img:CoursesImg1,
    people:'3-5',person:'1-2',month:'4-6'},
    {id:2,name:'Back end',info:'Ծրագրավորումը շուկայում պահանջվող և ամենաբարձր վճարվող մասնագիտություններից մեկն է որը ընտրելով որպես բարձորակ և որակյալ մասնագետ դառնալուն մի քայլ էլ եք մոտենում։',
img:CoursesImg2,
people:'3-5',person:'1-2',month:'4-6'}
]

    return(
        <React.Fragment>
            <div className = "courses-name">
                <h1>Դասընթացներ</h1>
            </div>
        <div className = "courses-container">
            
           {
               courses.map((course) =>(
            <span key = {course.id}> 
                <img src = {course.img}/>
                <div className = "courses-info">
                <div>
                    <h4>{course.name}</h4>
                    <h2>ծրագրավորում</h2>
                    <p>{course.info}</p>
                </div>
                <ul>
                    <li><AiOutlineUser style = {{margin:"20px"},{color: "#1D607A"}} /> {course.people} անձ</li>
                    <li><FiUsers style = {{margin:"20px"},{color: "#1D607A"}}/> {course.person} անձ</li>
                    <li><BiCalendarCheck style = {{margin:"20px"},{color: "#1D607A"}}/> {course.month} ամիս</li>
                </ul>
                </div>
                <div className = "courses-buttons">
                    <button className = "courses-button1">Դիմել</button>
                    <button className = "courses-button2">Ուս․ ծրագիր</button>
                </div>
            </span>
               ))
}
       
            
        </div>
        </React.Fragment>
    )
}
export default Courses