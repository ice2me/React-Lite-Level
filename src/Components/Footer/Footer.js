import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
	render() {
		return (
			<div id='footer' className='footer'>
				<div className="footer-bottom">
					<div className="container">
						<div className="footer-container">
							<div className="footer-item">
								<h1 className="footer-title">
									<a href="#">2019 &copy React Litle.Level</a>
									<p>All Right Reserved</p>
								</h1>
							</div>
							<div className="footer-item">
								<div className="module-body">
									<ul className="list-unstyled">
										<li><a href="#" tooltip='map site'>Sitemap</a></li>
										<li><a href="#" target='_blank' tooltip='Google Sitemap'>Google Sitemap</a></li>
									</ul>
								</div>
							</div>
							<div className="footer-item">
								<div className="module-body">
									<ul className="list-unstyled">
										<li><a href="#" tooltip='Contacts'>Contacts</a></li>
										<li><a href="#">Garant</a></li>
										<li><a href="#">About us</a></li>
										<li><a href="#">Rules</a></li>
										<li><a href="#">using service</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="copyringht-bar">
						<div className="flex-container">
							<div className="flex-item">
								<ul className="link">copyriting</ul>
							</div>
							<div className="flex-item">
								<div className="clearfix payment-methods">
									<ul>
										<p>2020</p>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
