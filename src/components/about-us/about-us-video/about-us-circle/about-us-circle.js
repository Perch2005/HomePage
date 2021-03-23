import React from 'react'

const AboutUsCircle = (props) => {
    return (
   
        <div >
          <div style={{ width: "240px", marginBottom:'30px' }}>{props.children}</div>
          <div >
            <h3 className="h5">{props.label}</h3>
            <p>{props.description}</p>
          </div>
        </div>
     
    );
  }
  export default AboutUsCircle