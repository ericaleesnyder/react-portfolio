import React from 'react';
import cooking from './cooking-min.jpg'
import marketing from './digital-marketing-meeting-min.jpg'
import weather from './weather-min.jpg'
import start from './start-page.png-min.png'
import note from './note-taker.png'
import fitness from './dashboard.png'

export default function Portfolio() {
  return (
    <div className="container work">
      <h2>My Work</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className= "col">
          <div className="card large">
            <div className="card-img-overlay">
              <h3 className="card-title txt-white">Rapid Recipes</h3>
              <p className="card-text txt-white-details">HTML/CSS, JavaScript, Third Party APIs</p>
            </div>
            <a href="https://ericaleesnyder.github.io/meal-search-engine/" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <img className="card-img" src={cooking} alt="rapid recipes food result"></img>
            </a>
          </div>
        </div>
        <br></br>
        <div className= "col">
          <div className="card small">
            <div className="card-img-overlay">
              <h3 className="card-title txt-white">Horiseon Marketing Company</h3>
              <p className="card-text txt-white-details">HTML/CSS Refactoring</p>
            </div>
            <a href="https://ericaleesnyder.github.io/horiseon_marketing_company/" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <img className="card-img" src={marketing} alt="horiseon marketing company"></img>
            </a>
          </div>
        </div>
        <br></br>
        <div className="col">
          <div className="card small">
            <div className="card-img-overlay">
              <h3 className="card-text txt-white">Weather Dashboard</h3>
              <p className="card-text txt-white-details">HTML, Bootstrap, JavaScript, APIs</p>
            </div>
            <a href="https://ericaleesnyder.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <img className="card-img" src={weather} alt="weather"></img>
            </a>
          </div>
        </div>
        <br></br>
        <div  className="col">
          <div className="card small">
            <div className="card-img-overlay">
              <h3 className="card-text txt-white">myTripJournal</h3>
              <p className="card-text txt-white-details">MySQL, Sequelize, JavaScript, Node.js, Express</p>
            </div>
            <a href="https://my-trip-journal2.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <img className="card-img" src={start} alt="my trip journal start page"></img>
            </a>
          </div>
        </div>
        <br></br>
        <div  className="col">
          <div className="card small">
            <div className="card-img-overlay">
              <h3 className="card-text txt-white">Note Taker</h3>
              <p className="card-text txt-white-details">JavaScript, Node.js, Express</p>
            </div>
            <a href="https://note-taker-els-2021.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <img className="card-img" src={note} alt="note taker start page"></img>
            </a>
          </div>
        </div>
        <br></br>
        <div  className="col">
          <div className="card small">
            <div className="card-img-overlay">
              <h3 className="card-text txt-white">Fitness Tracker</h3>
              <p className="card-text txt-white-details">MongoDB, Mongoose, JavaScript, Node.js, Express</p>
            </div>
            <a href="https://fitness-tracker-els-2021.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="stretched-link">
              <img className="card-img" src={fitness} alt="workout dashboard"></img>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
