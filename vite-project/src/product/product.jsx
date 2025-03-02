import Card from '../components/ui/card/card';
import { data } from './data';
import './product.scss';

const Product = () => {
	return (
		<div className='product'>
			<div className='product__in-stock'>В наличии:</div>
			<div className='product__card'>
				{data.map(el => (
					<Card name={el.name} image={el.image} key={el.id} />
				))}
			</div>
			<div className='product__delivery'>
				<div className='product__delivery__text1'>Привезем</div>
				<div className='product__delivery__info'>
					<div>Быстро</div>
					<div>Бесплатной доставкой</div>
					<div>По всей России</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
