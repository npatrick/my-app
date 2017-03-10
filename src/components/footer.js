import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<footer id="footer">
					<div class="container">
						<div class="row">

							<div class="col-sm-12">

								<ul class="social-links">
									<li><a href="https://www.linkedin.com/in/neilromana/" target="_blank" class="wow fadeInUp" data-wow-delay=".3s"><i class="fa fa-linkedin"></i></a></li>
									<li><a href="https://www.facebook.com/npromana" target="_blank" class="wow fadeInUp"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#" class="wow fadeInUp" data-wow-delay=".5s"><i class="fa fa-envelope"></i></a></li>
								</ul>

							</div>

						</div>
					</div>
				</footer>
				<div class="scroll-up">
					<a href="#home"><i class="fa fa-angle-double-up"></i></a>
				</div>
			</div>
		);
	}
};
