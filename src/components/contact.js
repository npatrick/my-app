import React, { Component } from 'react';
import $ from 'jquery';

export default class Contact extends Component {
  state = { 
    name: '',
    email: '',
    subject: '',
    message: '', 
    action: ' Send Message' 
  };

  handleClick(event) {
    const that = this;
    event.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }

    $.ajax({
      type: 'POST',
      url: '/sendemail',
      data: data
    })
    .done(data => {
      console.log('Sent!');
      document.getElementById('contact-form').reset();
      that.setState({ action: ' Sent!' });
    })
    .fail(err => console.log('error: ', err));
  }

  renderButton() {
    return (
      <button className="w3-btn w3-light-grey w3-padding-large">
        <i className="fa fa-paper-plane"></i>{this.state.action}
      </button>
    )
  }

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

        <form id="contact-form" onSubmit={this.handleClick.bind(this)}>
          <p><input className="w3-input w3-padding-16" type="text" required placeholder="Name" 
            onChange={name => this.setState({ name: name.target.value, action: ' Send Message' })} />
          </p>
          <p><input className="w3-input w3-padding-16" type="text" required placeholder="Email" onChange={email => this.setState({ email: email.target.value, action: ' Send Message' })} /></p>
          <p><input className="w3-input w3-padding-16" type="text" required placeholder="Subject" onChange={subject => this.setState({ subject: subject.target.value, action: ' Send Message' })} /></p>
          <p><textarea className="w3-input w3-padding-16" type="text" required placeholder="Message" onChange={message => this.setState({ message: message.target.value, action: ' Send Message' })} /></p>
          <p>{this.renderButton()}</p>
        </form>
      </div>
    );
  }
};
