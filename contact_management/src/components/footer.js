import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './footer.css';

export const Footer = () => {
	return (
		<div className="footer">
			<ul className="icon-links">
				<li>
					<BsFacebook />
				</li>
				<li>
					<AiFillTwitterCircle />
				</li>
				<li>
					<BsInstagram />
				</li>
			</ul>
			<div className="privacy-policy">
				<div className="info">
					<p>Term of use, Privacy Policy</p>
					<p id="copyright">&copy;2021 mechack200</p>
				</div>
			</div>
		</div>
	);
};
