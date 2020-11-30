import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent p-0 jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subtitle && (
              <h3 className="display-4 font-weigth-light">{props.subtitle}</h3>
            )}
            {props.text && (
              <h3 className="lead font-weigth-light">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;