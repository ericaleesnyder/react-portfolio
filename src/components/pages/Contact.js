import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';

export default function Contact() {
  return (
    <Container style={{marginBottom:"8rem"}}>
      <Row className="justify-content-md-center">
        <Col md="9" style={{textAlign:"center"}}>Please reach out with any questions or comments!</Col>
      </Row>
      <br></br>
      <Row className="justify-content-md-center">
        <Col md="4"><a className="mailto btn btn-primary" href="mailto:ericaleesnyder@gmail.com" style={{width:"100%", marginBottom:"1rem"}}><Envelope></Envelope> ericaleesnyder@gmail.com</a></Col>
        <Col md="4"><a className="btn btn-primary" href="https://www.linkedin.com/in/ericaleesnyder" target="_blank" rel="noopener noreferrer" style={{width:"100%", marginBottom:"1rem"}}><Linkedin></Linkedin> LinkedIn</a></Col>
        <Col md="4"><a className="btn btn-primary" href="https://github.com/ericaleesnyder" target="_blank" rel="noopener noreferrer" style={{width:"100%", marginBottom:"1rem"}}><Github></Github> GitHub</a></Col>
      </Row>
    </Container>
  );
}