import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }
    if (!name) {
      setErrorMessage('Name field cannot be blank');
      return;
    }
    if (!message) {
      setErrorMessage('Message field cannot be blank');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
    <div className="mb-3">
      <form className="form">
        <label className="form-label">Email</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email@example.com"
          className="form-control"
          />
        <label className="form-label">Name</label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="First Last"
          className="form-control"
          />
        <label className="form-label">Message</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          className="form-control"
          rows="3"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </div>
  );
}