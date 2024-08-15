import { Link, useLocation } from 'react-router-dom';
import '@/styles/Header.css';
import logo from '@/assets/logo.png'
import { useEffect, useState } from 'react';

export default function Header() {
	const location = useLocation();
	const [currentPath, setCurrentPath] = useState(location.pathname);

	useEffect(() => {
		setCurrentPath(location.pathname);
	}, [location.pathname]);

	const navLinks = [
		{ link: "resources", label: "Resources" },
		{ link: "b", label: "Assembly Pad" },
		{ link: "c", label: "Facilities" },
		{ link: "d", label: "Regiments" },
	];

	return (
		<div className="header">
			<img className='logo' src={logo} />
			<div className='navlink'>
				{navLinks.map(({ link, label }, index) => {
					const isActive = currentPath === '/' + link;

					return (
						<Link
							key={index}
							to={link}
							className={isActive ? 'active' : ''}
						>
							{label}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
