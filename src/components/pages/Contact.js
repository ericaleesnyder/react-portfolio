import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';

export default function Contact() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="9" style={{textAlign:"center"}}>Please reach out with any questions or comments!</Col>
      </Row>
      <br></br>
      <Row className="justify-content-md-center">
        <Col xs="3"><a className="mailto btn btn-primary" href="mailto:ericaleesnyder@gmail.com" style={{width:"100%"}}><Envelope></Envelope> ericaleesnyder@gmail.com</a></Col>
        <Col xs="3"><a className="btn btn-primary" href="https://www.linkedin.com/in/ericaleesnyder" target="_blank" rel="noopener noreferrer" style={{width:"100%"}}><Linkedin></Linkedin> LinkedIn</a></Col>
        <Col xs="3"><a className="btn btn-primary" href="https://github.com/ericaleesnyder" target="_blank" rel="noopener noreferrer" style={{width:"100%"}}><Github></Github> GitHub</a></Col>
      </Row>
    </Container>
  );
}