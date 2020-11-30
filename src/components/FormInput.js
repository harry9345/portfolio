import React from "react";
import Form from "react-bootstrap/Form";
import Content from "./Content";
import { Button } from "react-bootstrap";

import Axios from "axios";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      disable: false,
      emailSent: null,
    };
  }
  handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.type === "chechbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      disable: true,
    });

    Axios.post("/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disable: false,
            emailSent: true,
          });
        } else
          this.setState({
            disable: false,
            emailSent: false,
          });
      })
      .catch((err) => {
        this.setState({
          disable: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <Content>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="full-name">Full Name</Form.Label>
            <Form.Control
              id="full-name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="phone-number">Phone number</Form.Label>
            <Form.Control
              id="phone-number"
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Label htmlFor="message"> Message</Form.Label>
          <Form.Control
            id="message"
            name="message"
            as="textarea"
            rows="5"
            value={this.state.message}
            onChange={this.handleChange}
          />

          <Button
            className="d-inline-block"
            variant="primary"
            type="submit"
            disabled={this.state.disable}
          >
            Send
          </Button>
          {
            (this.setState.emailSent = false && (
              <p className="d-inline error-msg">Email Not Sent</p>
            ))
          }
          {
            (this.setState.emailSent = true && (
              <p className="d-inline success-msg">Email Sent</p>
            ))
          }
        </Form>
      </Content>
    );
  }
}

export default FormInput;
