import React from 'react';
import './faculties.css';
import MoreInfoButton from '../more-info-button';
import FacultiesPeople1 from '../imgs/Group 751.png';
import FacultiesPeople2 from '../imgs/Group 753.png';
import FacultiesPeople3 from '../imgs/Group 754.png';


const Faculties = () => {
	const faculties = [
		{ id:1,
			name: 'Վեբ ծրագրավորման',
			imgs: FacultiesPeople1 ,
			color:'linear-gradient(180deg, #FFD02B 0%, #FD754A 60.62%)',
			discounts: [
				{ facName: 'Front end', dis: '25% զեղչ' },
				{ facName: 'Back end', dis: '25% զեղչ' },
				{ facName: 'Full stack', dis: '25% զեղչ' }
			]
		},
		{
			id:2,
			name: 'ծրագրավորման',
			imgs:FacultiesPeople2 ,
			color:'linear-gradient(180deg, #00C880 0%, #009E78 73.66%, #005843 115.66%)',
			discounts: [
				{ facName: 'Front end', dis: '25% զեղչ' },
				{ facName: 'Back end', dis: '25% զեղչ' },
				{ facName: 'Full stack', dis: '25% զեղչ' }
			]
		},
		{id:3,
			name: 'Մուլտիմեդիայի',
			imgs:FacultiesPeople3 ,
			color:'linear-gradient(180deg, #AB77FF 0%, #4440F5 51.95%)',
			discounts: [
				{ facName: 'Front end', dis: '25% զեղչ' },
				{ facName: 'Back end', dis: '25% զեղչ' },
				{ facName: 'Full stack', dis: '25% զեղչ' }
			]
		}
	];
	return (
		<React.Fragment>
			<div className="faculties-name">
				<h1>Ֆակուլտետ</h1>
			</div>
			<div className="faculties-container">
				{faculties.map((facultie) => (
					<span key = {facultie.id}>
						<div style = {{background:facultie.color}} className="people-back">
							<div className = "people-back-name">
							<h2>{facultie.name}</h2>
							<p>Ֆակուլտետ</p>
							</div>
								<span className="faculties-imgs">
									<div>
										<div className="people-circle">
											<img src={facultie.imgs} />
										</div>
									</div>
								</span>
						</div>
						<div >
						{facultie.discounts.map((discount) => (
							<div className="discounts">
								<div>
									<p>{discount.facName}</p> <p>{discount.dis}</p>
								</div>
							</div>
						))}
						</div>
						<MoreInfoButton />
					</span>
				))}
			</div>
		</React.Fragment>
	);
};
export default Faculties;
