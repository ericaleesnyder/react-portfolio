import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar nav-style">
      <div className="container-fluid">
        <div className="navbar-brand">Erica Snyder</div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              
              className={currentPage === 'About' ? 'nav-link active es-active' : 'nav-link es-inactive'}
              >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              
              className={currentPage === 'Portfolio' ? 'nav-link active es-active' : 'nav-link es-inactive'}
              >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              
              className={currentPage === 'Resume' ? 'nav-link active es-active' : 'nav-link es-inactive'}
              >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active es-active' : 'nav-link es-inactive'}
              >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
