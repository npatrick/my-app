import React, { Component } from 'react';

class Portfolio extends Component {
	render() {
		return (

		  <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="portfolio">
		    <h2 className="w3-text-light-grey">My Name</h2>
		    <hr style={{width:"200px"}} className="w3-opacity"></hr>
		    <p>I will talk about myself for this portion of the view</p>
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
		        <span className="w3-xlarge">4+</span><br />
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

		    <button className="w3-btn w3-light-grey w3-padding-large w3-section w3-hover-grey">
		      <i className="fa fa-download"></i> Download Resume
		    </button>
		  </div>
		);
	}
}

export default Portfolio;
