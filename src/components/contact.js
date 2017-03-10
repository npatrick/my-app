import React, { Component } from 'react';
import $ from 'jquery';
import Recaptcha from 'react-recaptcha'

export default class Contact extends Component {
  state = { 
    name: '',
    email: '',
    subject: '',
    message: '', 
    action: ' Send Message' 
  };

  validateEmail(email) {
    const reg =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  }

  callback() {
    console.log('Dependencies Loaded!');
  }

  handleSubmit(event) {
    const that = this;
    const { name, email, subject, message } = this.state;
    event.preventDefault();
    // checks for field inputs
    if (name.length < 1) {
      return alert('You need to fill the Name field');
    }
    if (!this.validateEmail(email)) {
      return alert('Invalid Email');
    }
    if(subject.length < 1) {
      return alert('You Need to fill the Subject field');
    }
    if(message.length < 1) {
      return alert('You need to fill the Message content');
    }

    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

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
  // render based of action state
  renderButton() {
    return (
      <button type="submit" className="btn btn-block btn-custom-2 wow fadeInUp" data-wow-delay=".3s">{this.state.action}
      </button>
    )
  }

  render() {
    return (
      <section id="contact" class="module">
        <div class="container">
          <div class="row">

            <div class="col-sm-6 col-sm-offset-3">

              <div class="module-header">
                <h2 class="module-title">Contact</h2>
                <div class="module-line"></div>
                <div class="module-subtitle">
                  Let's get in touch. Send me a message.
                </div>
                <div class="module-line"></div>
              </div>

            </div>

          </div>

          <div class="row">

            <div class="col-sm-6 col-sm-offset-3">

              <form id="contact-form" role="form" onSubmit={this.handleSubmit.bind(this)}>
                <div class="form-group wow fadeInUp">
                  <label class="sr-only" for="c_name">Name</label>
                  <input type="text" id="c_name" class="form-control" name="c_name" placeholder="Name" onChange={name => this.setState({ name: name.target.value, action: ' Send Message' })} />
                </div>

                <div class="form-group wow fadeInUp" data-wow-delay=".1s">
                  <label class="sr-only" for="c_email">Email address</label>
                  <input type="email" id="c_email" class="form-control" name="c_email" placeholder="E-mail" onChange={email => this.setState({ email: email.target.value, action: ' Send Message' })} />
                </div>

                <div class="form-group wow fadeInUp" data-wow-delay=".1s">
                  <label class="sr-only" for="c_email">Subject</label>
                  <input type="email" id="c_email" class="form-control" name="c_email" placeholder="Subject" onChange={subject => this.setState({ subject: subject.target.value, action: ' Send Message' })} />
                </div>

                <div class="form-group wow fadeInUp" data-wow-delay=".2s">
                  <textarea class="form-control" id="c_message" name="c_message" rows="7" placeholder="Your message" onChange={message => this.setState({ message: message.target.value, action: ' Send Message' })} />
                </div>
                <p>{this.renderButton()}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
