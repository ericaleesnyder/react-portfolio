import React from 'react';
import resume from './bootcamp_portfolio.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        <a href={resume} download>Resume</a>
      </p>
    </div>
  );
}
