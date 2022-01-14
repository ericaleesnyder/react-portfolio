import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import headshot from './es_headshot.jpg'

export default function About() {
  return (
    <Container style={{marginBottom:"8rem"}}>
      <h2>About Me</h2>
      <Row>
      <Col md="4">
        <Card style={{marginBottom:"1rem"}}>
          <Card.Img src={headshot} alt="erica snyder headshot"/>
        </Card>
      </Col>
      <Col>
        <p>
          Through my formal architectural education and professional experience, I developed the philosophy that “design” is solving problems without creating new ones. 
          I believe this perspective will make me a great development engineer. 
        </p>
        <p>
          My work at an architecture and design firm quickly revealed that my favorite things about the job involved learning to use complex software programs and tools. 
          I am able to methodically boil down often frustrating software quirks into digestible pieces and identify solutions. 
          My tenacity and eagerness to learn made me the in-house, self taught software expert for the entire firm. My coworkers approached me for help not because I had the answer in hand, but because I was able to deduct the solutions on the fly. 
          I have a foundational understanding of how to figure out what questions to ask, and therefore where to begin. 
        </p>
        <p>
          The day I was introduced to web development was, unequivocally, a great day. 
          I have often said the only thing I want to do is learn; and the realization that I could, quite literally, work in a field that would require me to be a “professional learner” catapulted me towards this career change, and has left me eager to apply my skills to this exciting, dynamic industry. 
        </p>
      </Col>
      </Row>
    </Container>
  );
}
