import React, { useEffect } from 'react'
import './info-blocks.css'
import HeaderImg1 from '../../imgs/header-img1.png'
import HeaderImg2 from '../../imgs/header-img2.png'
import HeaderImg3 from '../../imgs/header-img3.png'
const InfoBlocks = () =>{
   const insfoBlocks = [
       {img:HeaderImg1,name:'Պրոֆեսիոնալ մոտեցում',
       info:'Մեր մասնագետները ամեն ինչ կանեն որ ձեզ ապահովեն բարձրորակ կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և բարձորակ աշխատանքային մոտեցումը կտա իր արձյունքը։'
    },
    {img:HeaderImg2,name:'Որակյալ աշխատանք',
    info:' Մեր պրոֆեսիոնալ աշխատակազմը երաշխավորում է բարձրորակ ծառայությունների մատուցում։ Եթե դուք վստահել եք ձեր աշխատանքը մեր թիմին ապա կարող եք վսահ լինել որ արձյունքը ձեզ կգոհացնի։'
},
    {img:HeaderImg3,name:'Բարձրորակ կրթություն',
    info:'Մեր մասնագետները ամեն ինչ կանեն, որ ձեզ ապահովեն բարձրորակ կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և բարձորակ աշխատանքային մոտեցումը կտա իր արձյունքը։'
}
   ]
   useEffect(() =>{
    slideShow()
   })
   const slideShow = () =>{
    const { innerWidth: width, innerHeight: height } = window;
    if(width <= 400){

    }
   }
    return(
        <div className = "info-block-container">
            {
                insfoBlocks.map((insfoBlock) => (
        <span>
            <img src = {insfoBlock.img}/>
            <div>
                <h4>{insfoBlock.name}</h4>
                <p>{insfoBlock.info}</p>
            </div>
        </span>
                ))
}
       
    </div>
    )
}
export default InfoBlocks