import React from 'react';
import cooking from './cooking.jpg'
import marketing from './digital-marketing-meeting.jpg'
import weather from './weather.jpg'
import start from './start-page.png.png'

export default function Portfolio() {
  return (
    <div className="container">
      <h2>My Work</h2>
      <div className="row">
        <div className= "col-6">
          <div className="card large">
            <div className="card-img-overlay">
              <h3>Rapid Recipes</h3>
              <p>HTML/CSS, JavaScript, Third Party APIs</p>
            </div>
            <a href="https://ericaleesnyder.github.io/meal-search-engine/" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <img className="card-img" src={cooking} alt="rapid recipes food result"></img>
            </a>
          </div>
        </div>
        <br></br>
        <div className= "col-6">
          <div className="card small">
            <div className="card-img-overlay">
              <h3>Horiseon Marketing Company</h3>
              <p>HTML/CSS Refactoring</p>
            </div>
            <a href="https://ericaleesnyder.github.io/horiseon_marketing_company/" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <img className="card-img" src={marketing} alt="horiseon marketing company"></img>
            </a>
          </div>
          </div>
          <br></br>
          <div className="col-6">
          <div className="card small">
            <div className="card-img-overlay">
              <h3>Weather Dashboard</h3>
              <p>HTML, Bootstrap, JavaScript, APIs</p>
            </div>
            <a href="https://ericaleesnyder.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <img className="card-img" src={weather} alt="weather"></img>
            </a>
          </div>
          </div>
          <br></br>
          <div  className="col-6">
          <div className="card small">
            <div className="card-img-overlay">
              <h3>myTripJournal</h3>
              <p>MySQL, Sequelize, JavaScript, Node.js, Express</p>
            </div>
            <a href="https://my-trip-journal2.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <img className="card-img" src={start} alt="my trip journal start page"></img>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
