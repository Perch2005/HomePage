import React from 'react'
import './our-works.css'
import OurWorksImg1 from '../imgs/download 1.png'
import OurWorksImg2 from '../imgs/icon-final 1.png'

const OurWorks = () =>{
    const ourWorks = [
        {id:1,img:OurWorksImg1},
        {id:2,img:OurWorksImg2}
    ]
    return(
        <React.Fragment>
            <div className = "our-works-name">
                <h1>
                Մեր աշխատանքները
                </h1>
            </div>
        <div className = "our-works-container">
            {
                ourWorks.map((ourWork) => (
            <span key = {ourWork.id}>
                <img src = {ourWork.img}/>
                <div>
                <button>Տեսնել կայքը</button>
                </div>
            </span>
                ))
}
        </div>
        </React.Fragment>
    )
}
export default OurWorks