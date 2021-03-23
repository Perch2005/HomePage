import React,{useEffect,useState} from 'react'
import './header.css'
import NavBar from '../nav-bar'
import InfoBlocks from './info-blocks'
import MoreInfoButton from '../more-info-button'
import {FiPhoneCall} from 'react-icons/fi'
import HeaderImg from '../imgs/header-img.png'
import HeaderImg1 from '../imgs/Group 771115.png'
import HeaderImg2 from '../imgs/Group.png'
const Header = () =>{
const headerImgs = [
    {id:1,img:HeaderImg},
    {id:2,img:HeaderImg1},
    {id:3,img:HeaderImg2}
]

const [headerId,setHeaderId] = useState({img:null})
    useEffect(() => {
        typeWriter()
       
    })




let i = 0;
let txt = 'Սովորիր Ծրագրավորում';
 const typeWriter = () => {

            
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }


}
    return (
        <div className = "header">
            {/* <NavBar/> */}
            <div className = "header-container">
<div className = "header-info-container">
    <p>Եղիր առաջինը</p>
<h3 id="demo"></h3>
    <MoreInfoButton/>
    <button className = "header-info-order"><FiPhoneCall style = {{
        ["font-size"]:"20px",
        margin:"0px"}}/></button>
</div>

<div className = "header-img-container"><img src = {HeaderImg}/></div>

            </div>
           <InfoBlocks/>
        </div>
    )
}
export default Header