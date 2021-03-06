import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between  bg-light fixed-bottom  p-3">
          <Col className="p-0" md={3} sm={12}>
            Hossein Rajabi
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            This Website Has Made By HRM
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
