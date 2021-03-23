import React, { useState } from 'react';
import './about-us-video.css';
import VideoImg from '../../imgs/836 [Converted] 1.png';
import CircleOut from '../../imgs/vector-circle-out.png';
import CircleIn from '../../imgs/vector-circle-in.png';
import VideoButton from '../../imgs/Group 215.png';
import IframeVideo from '../about-us-video/iframe-video';
import { AiOutlineClose } from 'react-icons/ai';

const AboutUsVide = () => {
	const [ iframe, setIframe ] = useState(false);
	return (
		<div className="about-us-video-container">
			<div className="about-name">
				<h2>Մեր մասին կարճ տեսանյութ</h2>
				<p>
					Դիտելով այս հոլովակը դուք կստանաք ձեր բոլոր
					<div>հարցերի պատասխանները</div>
				</p>
			</div>

			<div className="about-us-video">
				<span className="about-us-video-img">
					<img src={VideoImg} />
				</span>
                {
                    iframe?
				<div className = "iframe">
					<span onClick = {() => setIframe((e) => !e)}>
						<AiOutlineClose />
					</span>
					<IframeVideo />
				</div>
                :null
}
				<span className="video-container">
					<span className="video">
						<span className="circle-out">
							<img src={CircleOut} />
						</span>
						<span className="circle-in">
							<img src={CircleIn} />
						</span>
						<span onClick={() => setIframe((e) => !e)} className="video-button">
							<img src={VideoButton} />
						</span>
					</span>
				</span>
			</div>
		</div>
	);
};
export default AboutUsVide;
