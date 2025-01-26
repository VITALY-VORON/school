import amazon from './amazon.svg';
import './header.scss';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__img'>
				<img src={amazon} alt='amazon' />
			</div>
		</div>
	);
};

export default Header;
