import './card.scss';

const Card = ({ name, image }) => {
	return (
		<div className='card'>
			<div className='card__name'>{name}</div>
			<div className='card__image'>
				<img src={image} alt='' />
			</div>
		</div>
	);
};

export default Card;
