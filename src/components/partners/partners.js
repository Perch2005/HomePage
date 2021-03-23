import React from 'react'
import './partners.css'
import PartnersImg1 from '../imgs/microsoft_PNG6 5.png'
import PartnersImg2 from '../imgs/microsoft_PNG6 1.png'
const Partners = () =>{
    const partners = [
        {id:1,img:PartnersImg2},
        {id:2,img:PartnersImg1},
        {id:3,img:PartnersImg2},
        {id:4,img:PartnersImg2},
    ]
    return(
        <React.Fragment>
            <div className = "partners-name">
                <h1>Մեր գործընկերները</h1>
            </div>
        <div className= "partners-container">

            { partners.map((partner) => (
            <span key = {partner.id}><img src = {partner.img}/></span>
            ))
}
        </div>
        </React.Fragment>
    )

}
export default Partners