import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../Button'
import { IconContext } from 'react-icons/lib';
import './Navbar.css'

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

	useEffect (() => {
		showButton();
	}, []);

  return (
		<>
		<IconContext.Provider value={{ color: '#fff' }}>
			<nav className='navbar'>
				<div className='navbar-container container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						<MdFingerprint className='navbar-icon' />
						WEB3 TESTERS
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='#step'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Steps
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/services'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Services
							</Link>
						</li>
						<li className='nav-btn'>
							{button ? (
								<Link to='/sign-up' className='btn-link'>
									<Button buttonStyle='btn--outline'>JOIN WAITLIST</Button>
								</Link>
							) : (
								<Link to='/sign-up' className='btn-link'>
									<Button
										buttonStyle='btn--outline'
										buttonSize='btn--mobile'
										onClick={closeMobileMenu}
									>
										JOIN WAITLIST
									</Button>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</nav>
		</IconContext.Provider>
	</>
);
}

export default Navbar;