import React from 'react';
import resume from './bootcamp_portfolio.pdf'

export default function Resume() {
  return (
    <div className="container">
      <h1>Resume</h1>
      <p>
        Skills
        <ul>
          <li>Skill One</li>
          <li>Skill Two</li>
          <li>Skill Three</li>
          <li>Skill Four</li>
          <li>Skill Five</li>
        </ul>
      </p>
      <p>
        Click below to download my resume.
        <br></br>
        <a href={resume} className="btn btn-primary"download>Resume</a>
      </p>
    </div>
  );
}
