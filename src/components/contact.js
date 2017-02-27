import React, { Component } from 'react';
import $ from 'jquery';

export default class Contact extends Component {
	state = { name: '', sent: false, action: ' Send Message' };

	renderButton() {
    return (
    	<button className="w3-btn w3-light-grey w3-padding-large" type="submit">
      	<i className="fa fa-paper-plane"></i>{this.state.action}
    	</button>
    );
	}

	render() {
		const that = this;
		const handleClick = (event) => {
			event.preventDefault();

			let formValue = document.getElementById('contact-form');
			let data = {
				name: formValue.elements['name'].value,
				email: formValue.elements['email'].value,
				subject: formValue.elements['subject'].value,
				message: formValue.elements['message'].value
			}

			$.ajax({
				type: 'POST',
				url: '/sendemail',
				data: data
			})
			.done(data => {
				console.log('Sent!');
				document.getElementById('contact-form').reset();
				that.setState({ sent: true, action: ' Sent!' });
			})
			.fail(err => console.log('error: ', err));
		};

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

		    <form id="contact-form" onSubmit={handleClick}>
		      <p><input className="w3-input w3-padding-16" type="text" required placeholder="Name" name="name" 
		      	onChange={name => this.setState({ 
		      		name: name, 
		      		sent: false, 
		      		action: ' Send Message' })
		      }/>
		      </p>
		      <p><input className="w3-input w3-padding-16" type="text" required placeholder="Email" name="email" /></p>
		      <p><input className="w3-input w3-padding-16" type="text" required placeholder="Subject" name="subject" /></p>
					<p><input className="w3-input w3-padding-16" type="text" required placeholder="Message" name="message" /></p>
		      <p>
		      	{this.renderButton()}
		      </p>
		    </form>
		  </div>
		);
	}
};
