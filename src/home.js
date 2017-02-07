import React, { Component } from 'react';
import selfpic from './assets/selfpic.JPG';

class Home extends Component {
	render() {
		return (
			<header className="w3-container w3-padding-32 w3-center" id="home">
		    <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Neil Romana</h1>
		    <p>Software Engineer.</p>
		    <img src={selfpic} alt="myself" className="w3-image" style={{maxWidth:"100%", height:"auto"}} />
		  </header>
		);
	}
}

export default Home;
