import './footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__content'>
				<div className='footer__content__left'>
					<div>Котов Кирилл Кириллович</div>
					<div>89381184502</div>
					<div>kotov@kit.ru</div>
				</div>
				<div className='footer__content__right'>
					<button>Заказать звонок</button>
					<div>
						ООО “Котовикотенко” юр адрес такой-то <p>Все права защищены</p>
						<p>Пользовательское соглашение</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
