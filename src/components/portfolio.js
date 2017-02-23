import React, { Component } from 'react';
import truescore from '../assets/truescoregame.png';
import songspace from '../assets/songspace-player-view.png';

export default class Portfolio extends Component {
	render() {
		// wrapping the open link fn prevents popup blocking off resume
		const dlResume = () => {
			return window.open('https://s3-us-west-1.amazonaws.com/nprwebsitefiles/Patrick+Romana.pdf');
		}
			/*
				<div className="w3-row w3-center w3-padding-6 w3-section w3-light-grey">
		      <div className="w3-quarter w3-section">
		        <span className="w3-xlarge">2+</span><br />
		        Years of Experience
		      </div>
		      <div className="w3-quarter w3-section">
		        <span className="w3-xlarge">4</span><br />
		        Projects Done
		      </div>
		      <div className="w3-quarter w3-section">
		        <span className="w3-xlarge">327+</span><br />
		        Git Contributions
		      </div>
		    </div>
		  */

		return (
		  <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="portfolio">
		    <h2 className="w3-text-light-grey">About Me</h2>
		    <hr style={{width:"200px"}} className="w3-opacity"></hr>
		    <p>My name's Neil, but most of my friends call me Nicko. I love to construct applications that caters to user needs and wants. While I'm away from coding, I get off the grid to explore and seek great vistas through long backpacking, hiking, and camping trips. As for now, I'm excited to contribute to a company that solves user dilemmas and that of which makes a greater impact on the society.</p>
		    <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
			    <ul className="skillList">
				    <li><p className="w3-medium">JavaScript</p></li>
				    <li><p className="w3-medium">React.js</p></li>
				    <li><p className="w3-medium">React-Native</p></li>
				    <li><p className="w3-medium">AngularJS</p></li>
				    <li><p className="w3-medium">Node.js</p></li>
				    <li><p className="w3-medium">MySQL</p></li>
				    <li><p className="w3-medium">MongoDB</p></li>
			    </ul>
		    <br />

		    <h3 className="w3-padding-16 w3-text-light-grey">Projects</h3>
				<div className="project1">
				<p className="w3-padding-4">TrueScore</p>
					<img src={truescore} alt="truescore" style={{maxWidth:"50%", maxHeight:"50%"}} />
		    <p className="w3-padding-4">songspace</p>
					<img src={songspace} alt="songspace" style={{maxWidth:"50%", maxHeight:"50%"}} />
				</div>
				<br />
		    <button className="w3-btn w3-light-grey w3-padding-large w3-section w3-hover-grey" type="button" onClick={dlResume}>
		      <i className="fa fa-download"></i> Download Resume
		    </button>
		  </div>
		);
	}
};
