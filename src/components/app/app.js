import React from 'react'
import './app.css'
import Header from '../header'
import AboutUs from '../about-us'
import Faculties from '../faculties/faculties'
import Courses from '../courses'
import Services from '../services'
import Partners from '../partners'
import OurWorks from '../our-works'
import Subscribe from '../subscribe'
const App = () =>{
    return(
        <div>
<Header/>
<AboutUs/>
<Faculties/>
<Courses/>
<Services/>
<Partners/>
<OurWorks/>
<Subscribe/>
        </div>
    )
}
export default App