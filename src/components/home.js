import React, { Component } from 'react';
import selfpic from '../assets/selfpic.JPG';

export default class Home extends Component {
	render() {
		return (
			<section className="module-image js-height-full" id="home">
				<div className="intro">
			    <h1>Neil Romana</h1>
			    <div className="who-creates">Software Engineer.</div>
		    </div>

		    <div className="mouse-icon">
		    	<div className="wheel" />
		    </div>

		  </section>
		);
	}
};
