import React from 'react'
import './iframe-video.css'
const IframeVideo = () => {
    return(
        <div className = "iframe-container">
            <iframe 
            src="https://www.youtube.com/embed/FTxiw8BDYl0?enablejsapi=1&origin=http%3A%2F%2Fglobalitc.am&widgetid=1"  
            title="Iframe Example">
            </iframe>
        </div>
    )
}
export default IframeVideo