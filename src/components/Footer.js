import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Github, Linkedin } from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className="footer mt-auto py-3 es-footer">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="2">
            <a href="https://github.com/ericaleesnyder" className='btn btn-primary' style={{width:"100%"}} target="_blank" rel="noopener noreferrer"><Github></Github> GitHub</a>
          </Col>
          <Col xs="2">
            <a href="https://www.linkedin.com/in/ericaleesnyder" className='btn btn-primary' style={{width:"100%"}} target="_blank" rel="noopener noreferrer"><Linkedin></Linkedin> LinkedIn</a>
          </Col>
        </Row>
    </Container>
    </div>
  );
}

export default Footer;