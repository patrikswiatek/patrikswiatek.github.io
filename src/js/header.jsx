import React from 'react'
import Link from "react-router-dom/es/Link";


	class Header extends React.Component {

		render() {
			return(
				<div className='menu'>
					<header className='row container'>
						<div className='col-6 logo text-pop-up'>
							<a>Sit <span>On</span> Chair</a>
						</div>
						<nav className='col-6'>

							<ul>
								<li><Link to="/">HOME</Link></li>
								<li><Link to="/contact">CONTACT</Link></li>
								<li><Link to="">&#x25BE;DROPDOWN</Link>
									<ul>
										<li><a href="">ABOUT US</a></li>
										<li><a href="">DEVELOPERS&#x25B8;</a>
											<ul>
												<li><a href="">OVERVIEW</a></li>
												<li><a href="">DEVELOPERS TOOLS</a></li>
												<li><a href="">DOCUMENTATION</a></li>
											</ul>
										</li>
										<li><a href="">PARTNERSHIP</a></li>
										<li><a href="">OFFERINGS</a></li>
									</ul>
								</li>
								<li><Link to="">ABOUT</Link></li>
							</ul>

						</nav>
					</header>
				</div>
			);
		}
	}

	export default Header;