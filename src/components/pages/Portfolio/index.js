import React from 'react';
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import cooking from './cooking-min.jpg';
import abcode from './abcode.png';
import weather from './weather-min.jpg';
import start from './start-page.png-min.png';
import note from './note-taker.png';
import question from './question-page.png'

export default function Portfolio() {
  return (
    <Container className="work" style={{marginBottom:"8rem"}}>
      <h2>My Work</h2>
      <Row>
        <Col lg="6">
          <Card style={{marginBottom:"1rem"}}>
            <Card.Img src={abcode} alt="ABCode Home Page" style={{height: "250px", objectFit: "cover", objectPosition: "top"}}/>
            <Card.ImgOverlay>
              <Card.Header as="h3" className="txt-white">ABCode</Card.Header>
              <Card.Text className="txt-white-details">
                HTML/CSS, JavaScript, GraphQL, MongoDB/Mongoose, React
                <br></br>
                <Row>
                  <Col>
                    <Button 
                    variant="primary" 
                    href="https://abcode-zl-21.herokuapp.com/" 
                    target="_blank" rel="noopener noreferrer" 
                    style={{margin: "0.5rem 0", width:"100%"}}>
                      Deployed App
                    </Button>
                  </Col>
                  <Col>
                    <Button 
                    variant="primary" 
                    href="https://github.com/bridgettequiambao/ABCode" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{margin: "0.5rem 0 ", width:"100%"}}>
                      Github Repo
                    </Button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <br></br>
        <Col lg="6">
          <Card style={{marginBottom:"1rem"}}>
            <Card.Img src={start} alt="myTripJournal start page" style={{height: "250px", objectFit: "cover", objectPosition: "top"}}/>
            <Card.ImgOverlay>
              <Card.Header as="h3" className="txt-white">myTripJournal</Card.Header>
              <Card.Text className="txt-white-details">
                HTML/CSS, JavaScript, MySQL, Sequelize, Node.js, Express
                <br></br>
                <Row>
                  <Col>
                    <Button 
                    variant="primary" 
                    href="https://my-trip-journal2.herokuapp.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{margin: "0.5rem 0", width:"100%"}}>
                      Deployed App
                    </Button>
                  </Col>
                  <Col>
                    <Button 
                    variant="primary" 
                    href="https://github.com/jmoniz155/my-trip-journal" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{margin: "0.5rem 0", width:"100%"}}>
                      Github Repo
                    </Button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <br></br>
        <Col lg="6">
          <Card style={{marginBottom:"1rem"}}>
            <Card.Img src={cooking} alt="rapid recipes food result" style={{height: "250px", objectFit: "cover", objectPosition: "top"}}/>
            <Card.ImgOverlay>
              <Card.Header as="h3" className="txt-white">Rapid Recipes</Card.Header>
              <Card.Text className="txt-white-details">
                HTML/CSS, JavaScript, Third Party APIs
                <br></br>
                <Row>
                  <Col>
                    <Button 
                    variant="primary" 
                    href="https://ericaleesnyder.github.io/meal-search-engine/" 
                    target="_blank" rel="noopener noreferrer" 
                    style={{margin:"0.5rem 0", width:"100%"}}>
                      Deployed App
                    </Button>
                  </Col>
                  <Col>
                    <Button 
                    variant="primary" 
                    href="https://github.com/ericaleesnyder/meal-search-engine" 
                    target="_blank" rel="noopener noreferrer" 
                    style={{margin:"0.5rem 0", width:"100%"}}>
                      Github Repo
                      </Button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <br></br>
        <Col lg="6">
          <Card style={{marginBottom:"1rem"}}>
            <Card.Img src={weather} alt="weather" style={{height: "250px", objectFit: "cover", objectPosition: "top"}}/>
              <Card.ImgOverlay>
                <Card.Header as="h3" className="txt-white">Weather Dashboard</Card.Header>
                <Card.Text className="txt-white-details">
                  HTML, Bootstrap, JavaScript, APIs
                  <br></br>
                  <Row>
                    <Col>
                      <Button 
                      variant="primary" 
                      href="https://ericaleesnyder.github.io/weather-dashboard/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{margin: "0.5rem 0", width:"100%"}}>
                        Deployed App
                      </Button>
                    </Col>
                    <Col>
                      <Button 
                      variant="primary" 
                      href="https://github.com/ericaleesnyder/weather-dashboard" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{margin: "0.5rem 0", width:"100%"}}>
                        Github Repo
                      </Button>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
        </Col>
        <br></br>
        <Col lg="6">
          <Card style={{marginBottom:"1rem"}}>
            <Card.Img src={note} alt="note taker start page" style={{height: "250px", objectFit: "cover", objectPosition: "top"}}/>
            <Card.ImgOverlay>
              <Card.Header as="h3" className="txt-white">Note Taker</Card.Header>
              <Card.Text className="txt-white-details">
                JavaScript, Node.js, Express
                <br></br>
                <Row>
                  <Col>
                    <Button 
                    variant="primary" 
                    href="https://note-taker-els-2021.herokuapp.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{margin: "0.5rem 0", width:"100%"}}>
                      Deployed App
                    </Button>
                  </Col>
                  <Col>
                    <Button 
                    variant="primary" 
                    href="https://github.com/ericaleesnyder/note-taker" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{margin: "0.5rem 0", width:"100%"}}>
                      Github Repo
                    </Button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <br></br>
        <Col lg="6">
          <Card style={{marginBottom:"1rem"}}>
            <Card.Img src={question} alt="code quiz question page" style={{height: "250px", objectFit: "cover", objectPosition: "top"}}/>
            <Card.ImgOverlay>
              <Card.Header as="h3" className="txt-white">Code Quiz</Card.Header>
              <Card.Text className="txt-white-details">
                HTML, CSS, JavaScript
                <br></br>
                <Row>
                  <Col>
                    <Button 
                    variant="primary" 
                    href="https://ericaleesnyder.github.io/code-quiz/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{margin: "0.5rem 0", width:"100%"}}>
                      Deployed App
                    </Button>
                  </Col>
                  <Col>
                    <Button 
                    variant="primary" 
                    href="https://github.com/ericaleesnyder/code-quiz" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{margin: "0.5rem 0", width:"100%"}}>
                      Github Repo
                    </Button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
