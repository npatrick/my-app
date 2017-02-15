import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div className="w3-padding-64 w3-content w3-text-grey" id="contact">
		    <h2 className="w3-text-light-grey">Contact Me</h2>
		    <hr style={{width:"200px"}} className="w3-opacity"></hr>
		    <div className="w3-section">
		      <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> San Francisco, US</p>
		      <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: (310) 259 6041</p>
		      <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: npatrick.romana@gmail.com</p>
		    </div><br />
		    <p>Lets get in touch. Send me a message:</p>

		    <form action="/sendemail" method="POST">
		      <p><input className="w3-input w3-padding-16" type="text" required placeholder="Name" name="name" /></p>
		      <p><input className="w3-input w3-padding-16" type="text" required placeholder="Email" name="email" /></p>
		      <p><input className="w3-input w3-padding-16" type="text" required placeholder="Subject" name="subject" /></p>
					<p><input className="w3-input w3-padding-16" type="text" required placeholder="Message" name="message" /></p>
		      <p>
		        <button className="w3-btn w3-light-grey w3-padding-large" type="submit">
		          <i className="fa fa-paper-plane"></i> SEND MESSAGE
		        </button>
		      </p>
		    </form>
		  </div>
		);
	}
};
