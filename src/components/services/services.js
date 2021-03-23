import React, { useEffect, useState } from 'react';
import './services.css';
import ServicesImg1 from '../imgs/scrum_board 2.png';
import ServicesImg2 from '../imgs/report_analysis_ 1.png';
import ServicesImg3 from '../imgs/Group 270.png';
import ServicesImg4 from '../imgs/Group 269.png';
import ServicesImg5 from '../imgs/coding__isometric 1.png';
import ServicesImg6 from '../imgs/code_development_ (1) 1.png';
const Services = () => {
	const services = [
		{ id:1,name: 'Վեբ Կայքերի պատրաստում', img: ServicesImg1 },
		{ id:2,name: 'Համակարչային հավելվածներ', img: ServicesImg2 },
		{ id:3,name: 'Վեբ և գրաֆիկ դիզայն', img: ServicesImg3 },
		{ id:4,name: 'Բջջային հավելվածներ', img: ServicesImg4 },
		{ id:5,name: 'Բջջային և համ․խաղեր', img: ServicesImg5 },
		{ id:6,name: 'ՍԵՈ և ՍՄՄ առաջխաղացում', img: ServicesImg6 }
	];
	return (
		<React.Fragment>
			<div className = "services-name">
				<h1>Ծառայություններ</h1>
			</div>
		<div className="services-container">
            {
                services.map((service) => (
			<span key = {service}>
				<div>
					<h3>{service.name}</h3>
					<button>Պատվիրել</button>
				</div>
				<img src={service.img} />
			</span>
                ))
}
		</div>
		</React.Fragment>
	);
};
export default Services;
