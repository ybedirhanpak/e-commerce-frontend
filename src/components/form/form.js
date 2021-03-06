import React, { Component } from "react";
import { PostWithUrlBody } from "../../services/url-helper";
import { API } from "../../api-config";

export default class form extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage() {
    const body = {
      senderName: this.state.fullName,
      senderEmail: this.state.email,
      mailContent: this.state.message
    };

    PostWithUrlBody(API + "/mails/SendEmail", body)
      .then(response => {
        console.log(response);
        console.log("dispatch");
      })
      .catch(error => console.log("Error when sending email\n", error));
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="ad">Full Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your full name."
            required
            name="fullName"
            onChange={this.handleChange}
            value={this.state.fullName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email address."
            required
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="5"
            className="form-control"
            required
            value={this.state.message}
            onChange={this.handleChange}
          />
        </div>
        <br />

        <button
          className="btn btn-danger btn-lg btn-block"
          onClick={this.sendMessage}
        >
          Send
        </button>
        <br />
      </div>
    );
  }
}
