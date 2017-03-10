import React, { Component } from 'react';

export default class About extends Component {
	render() {
		// wrapping the open link fn prevents popup blocking off resume
		const dlResume = () => {
			return window.open('https://s3-us-west-1.amazonaws.com/nprwebsitefiles/Patrick+Romana.pdf');
		}

		return (
			<section id="about">

				<div class="row position-relative margin-0">

					<div class="col-xs-12 col-md-6 side-image"></div>

					<div class="col-xs-12 col-md-6 col-md-offset-6 side-image-text">

						<div class="row">

							<div class="col-sm-12">

								<div class="module-header module-header-left wow fadeInUp">
									<h2 class="module-title">About me</h2>
									<div class="module-subtitle">
										My name's Neil, but most of my friends call me Nicko. I love to construct applications that caters to user needs and wants. While I'm away from coding, I get off the grid to explore and seek great vistas through long backpacking, hiking, and camping trips. As for now, I'm excited to contribute to a company that solves user dilemmas and that of which makes a greater impact on the society.
									</div>
									<div class="module-line"></div>
								</div>

							</div>

						</div>

						<div class="row">

							<div class="col-sm-6">

								<div class="iconboxleft wow fadeInUp">
									<div class="iconboxleft-icon">
										<span class="icon-camera"></span>
									</div>
									<div class="iconboxleft-text">
										<h3 class="iconboxleft-title">JavaScript</h3>
										<div class="iconboxleft-desc">
											Thus, then, one of our own noble stamp, even a whaleman, is the tutelary guardian of England.
										</div>
									</div>
								</div>

							</div>

							<div class="col-sm-6">

								<div class="iconboxleft wow fadeInUp" data-wow-delay=".2s">
									<div class="iconboxleft-icon">
										<span class="icon-earphones"></span>
									</div>
									<div class="iconboxleft-text">
										<h3 class="iconboxleft-title">React.js</h3>
										<div class="iconboxleft-desc">
											Thus, then, one of our own noble stamp, even a whaleman, is the tutelary guardian of England.
										</div>
									</div>
								</div>

							</div>

						</div>

						<div class="row">

							<div class="col-sm-6">

								<div class="iconboxleft wow fadeInUp">
									<div class="iconboxleft-icon">
										<span class="icon-ghost"></span>
									</div>
									<div class="iconboxleft-text">
										<h3 class="iconboxleft-title">AngularJS</h3>
										<div class="iconboxleft-desc">
											Thus, then, one of our own noble stamp, even a whaleman, is the tutelary guardian of England.
										</div>
									</div>
								</div>

							</div>

							<div class="col-sm-6">

								<div class="iconboxleft wow fadeInUp" data-wow-delay=".2s">
									<div class="iconboxleft-icon">
										<span class="icon-magic-wand"></span>
									</div>
									<div class="iconboxleft-text">
										<h3 class="iconboxleft-title">Node.js</h3>
										<div class="iconboxleft-desc">
											Thus, then, one of our own noble stamp, even a whaleman, is the tutelary guardian of England.
										</div>
									</div>
								</div>

							</div>

						</div>

					</div>

				</div>
			</section>
		);
	}
};
