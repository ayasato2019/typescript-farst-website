//compornent
import GbNav from './compornent/GbNav';

function Header() {
	return (
		<header className='l-header u-flexwrap'>
			<div className='p-brand'>
				<a href='https://borderlesss.net/' className='text'>BORDERLESSS</a>
			</div>
			<GbNav />
		</header>
	);
}

export default Header;
