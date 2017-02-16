import React, { Component } from 'react';

export default class Portfolio extends Component {
	render() {
		// wrapping the open link fn prevents popup blocking off resume
		const dlResume = () => {
			return window.open('https://s3-us-west-1.amazonaws.com/nprwebsitefiles/Patrick+Romana.pdf');
		}

		return (

		  <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="portfolio">
		    <h2 className="w3-text-light-grey">About Me</h2>
		    <hr style={{width:"200px"}} className="w3-opacity"></hr>
		    <p>My name's Neil, but most of my friends call me Nicko. I love to construct applications that caters to user needs and wants. While I'm away from coding, I get off the grid to explore and seek great vistas through long backpacking, hiking, and camping trips. As for now, I'm excited to contribute to a company that solves user dilemmas and that of which makes a greater impact on the society.</p>
		    <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
		    <p className="w3-wide">JavaScript</p>
		    <div className="w3-progress-container">
		      <div className="w3-progressbar" style={{width:"95%"}}></div>
		    </div>
		    <p className="w3-wide">React.js</p>
		    <div className="w3-progress-container">
		      <div className="w3-progressbar" style={{width:"85%"}}></div>
		    </div>
		    <p className="w3-wide">AngularJS</p>
		    <div className="w3-progress-container">
		      <div className="w3-progressbar" style={{width:"80%"}}></div>
		    </div><br />

		    <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
		      <div className="w3-quarter w3-section">
		        <span className="w3-xlarge">2+</span><br />
		        Years of Experience
		      </div>
		      <div className="w3-quarter w3-section">
		        <span className="w3-xlarge">4</span><br />
		        Projects Done
		      </div>
		      <div className="w3-quarter w3-section">
		        <span className="w3-xlarge">3+</span><br />
		        Blog Posts
		      </div>
		      <div className="w3-quarter w3-section">
		        <span className="w3-xlarge">327+</span><br />
		        Git Contributions
		      </div>
		    </div>

		    <button className="w3-btn w3-light-grey w3-padding-large w3-section w3-hover-grey" type="button" onClick={dlResume}>
		      <i className="fa fa-download"></i> Download Resume
		    </button>
		  </div>
		);
	}
};
