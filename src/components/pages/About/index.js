import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import headshot from './es_headshot.jpg'

export default function About() {
  return (
    <Container style={{marginBottom:"8rem"}}>
      <h2>About Me</h2>
      <Row>
      <Col md="4">
        <Card>
          <Card.Img src={headshot} alt="erica snyder headshot"/>
        </Card>
      </Col>
      <Col>
        <p>
          Hi! My name is Erica. My eclectic education and professional experience has brought me to full stack web development.
          I am currently located in San Diego, though I have lived in places as far from the California coast as Florence, Italy. 
          I learned to nurture my creative eye and combine big ideas with intuitive, experiential frameworks during my time studying Architecture at Cal Poly San Luis Obispo.  
          After working in the architecture and design industry and identifying my troubleshooting, problem solving, and design strengths, I have now started on my new journey as a web developer.
        </p>
        <p>
          When not attempting to satisfy my insatiable appetite for new and exciting skills, I can be found playing (endless) games of fetch with my dog Peanut Butter or enjoying the impeccable San Diego coastline. 
        </p>
      </Col>
      </Row>
    </Container>
  );
}
