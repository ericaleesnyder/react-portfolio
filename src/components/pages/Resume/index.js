import React from 'react';
import resume from './erica_snyder_resume_2021.pdf'

export default function Resume() {
  return (
    <div className="container">
      <h2>Resume</h2>
      <div>
        Skills
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>SQL & Sequelize</li>
          <li>MongoDB & Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <p>
        Click below to download my resume.
        <br></br>
        <a href={resume} className="btn btn-primary" download>Resume</a>
      </p>
    </div>
  );
}
