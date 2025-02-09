import './landing.scss';

const Landing = () => {
	return (
		<div className='landing'>
			<div className='landing__top'>
				<div className='landing__top__text1'>Кошачий корм</div>
				<div className='landing__top__text2'>Дешево-быстро-надежно</div>
			</div>
			<div className='landing__bottom'>
				<button>Заказать</button>
			</div>
		</div>
	);
};

export default Landing;
