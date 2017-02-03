import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="w3-content w3-padding-medium w3-text-grey w3-xlarge">
		    <a href="https://www.linkedin.com/in/neilromana/" target="_blank">
		    	<i className="fa fa-linkedin w3-hover-text-indigo"></i>
		    </a>
		    <a href="https://github.com/npatrick" target="_blank">
		    	<i className="fa fa-github w3-hover-text-purple"></i>
		    </a>
		    <a href="">
		    	<i className="fa fa-facebook-official w3-hover-text-indigo"></i>
		    </a>
		    <a href="">
		    	<i className="fa fa-twitter w3-hover-text-light-blue"></i>
		    </a>
		  </footer>
		);
	}
}

export default Footer;