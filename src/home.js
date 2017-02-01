import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<header className="w3-container w3-padding-32 w3-center w3-black" id="home">
		    <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Neil Romana</h1>
		    <p>Software Engineer.</p>
		    <img src="/w3images/man_smoke.jpg" alt="myself" className="w3-image" style={{width:"600px", height:"800px"}} />
		  </header>
		);
	}
}

export default Home;
