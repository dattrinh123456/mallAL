import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
      email:'',
      phone:'',
      message:''
    }
  }

  onChangeValue = (event) => {
    let target = event.target;
    let value = target.value
    let name = target.name;
    console.log(value)
    this.setState({
      [name]: value
    });

  }

  sendMail = ( e) => {
    e.preventDefault()
    console.log(this.state.email)
  }

  render() {
    return (
      <div>
        <section className="page-section" id="contact">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Contact Us</h2>
      <h3 className="section-subheading text-muted">
        Lorem ipsum dolor sit amet consectetur.
      </h3>
    </div>
    <form id="contactForm" name="sentMessage" noValidate="novalidate">
      <div className="row align-items-stretch mb-5">
        <div className="col-md-6">
          <div className="form-group">
            <input onChange={this.onChangeValue} className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
            <p className="help-block text-danger" />
          </div>
          <div className="form-group">
            <input onChange={this.onChangeValue} className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
            <p className="help-block text-danger" />
          </div>
          <div className="form-group mb-md-0">
            <input onChange={this.onChangeValue} className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
            <p className="help-block text-danger" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form-group-textarea mb-md-0">
            <textarea onChange={this.onChangeValue} className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
            <p className="help-block text-danger" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <div id="success" />
        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit" onClick={this.sendMail}>
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>

      </div>
    );
  }
}
