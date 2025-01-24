import './nav.css'
import { useNavigate } from 'react-router-dom';

export function Navbar() {
	const redirect = useNavigate();

	const home = () => {
		redirect('/home');
	}

	const shop = () => {
		redirect('/shop');
	}

	const about = () => {
		redirect('/about');
	}

	const contact = () => {
		redirect('/contact');
	}

	
	return (
		<>
			<nav className="nav">
				<span>eCommerce</span>
				<div className="options">
					<a onClick={home}>Home</a>
					<a onClick={shop}>Shop</a>
					<a onClick={about}>About</a>
					<a onClick={contact}>Contact</a>
				</div>
			</nav>
		</>
	);
}
