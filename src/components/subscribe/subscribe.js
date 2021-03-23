import React from 'react'
import './subscribe.css'

const Subscribe = () =>{
    return(
        <div className = "subscribe-container">
            <div className = "subscribe">
                <h2>Բաժանորդագրվել</h2>
                <form>
                    <input placeholder = "E-mail"/>
                    <button>Ուղարկել</button>
                </form>
            </div>
        </div>
    )
}
export default Subscribe