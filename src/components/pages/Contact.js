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
        <Col xs="3"><a className="btn btn-primary" href="https://www.linkedin.com/in/ericaleesnyder" style={{width:"100%"}}><Linkedin></Linkedin> LinkedIn</a></Col>
        <Col xs="3"><a className="btn btn-primary" href="https://github.com/ericaleesnyder" style={{width:"100%"}}><Github></Github> GitHub</a></Col>
      </Row>
    </Container>
  );
  
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');

//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setName(inputValue);
//     } else if (inputType === 'message') {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setErrorMessage('Please enter a valid email');
//       return;
//     }
//     if (!name) {
//       setErrorMessage('Name field cannot be blank');
//       return;
//     }
//     if (!message) {
//       setErrorMessage('Message field cannot be blank');
//       return;
//     }

//     setName('');
//     setEmail('');
//     setMessage('');
//     setErrorMessage('');
//   };

//   return (
//     <div className="container">
//       <h2>Contact Me</h2>
//     <div className="mb-3">
//       <form className="form">
//         <label className="form-label">Email</label>
//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="email"
//           placeholder="email@example.com"
//           className="form-control"
//           />
//         <label className="form-label">Name</label>
//         <input
//           value={name}
//           name="name"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="First Last"
//           className="form-control"
//           />
//         <label className="form-label">Message</label>
//         <textarea
//           value={message}
//           name="message"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Message"
//           className="form-control"
//           rows="3"
//         />
//         <br></br>
//         <button type="button" onClick={handleFormSubmit} className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//       <br></br>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//     </div>
  // );
}