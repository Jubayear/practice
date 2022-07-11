import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <div className="contact-form">
        <p>Name:</p>
        <input type="text" placeholder="Enter your name" />
        <p>Email:</p>
        <input type="text" placeholder="Enter your email" />
        <p>Message:</p>
        <textarea
          cols="30"
          rows="5"
          placeholder="Enter your message"
        ></textarea>
        <Button>Send</Button>
      </div>
    </Container>
  );
};

export default Contact;
