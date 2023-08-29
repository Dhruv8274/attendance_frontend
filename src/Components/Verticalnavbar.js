import React, { useState } from 'react';
import './Verticalnavbar.css';

function Verticalnavbar() {
  const [activeNavItem, setActiveNavItem] = useState(2);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (
    <div className="container">
      <nav className="side-nav">
        <ul className="nav-menu">
          <li
            className={`nav-item ${activeNavItem === 0 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(0)}
          >
            <a href="/">
              <i className="fas fa-tachometer-alt"></i>
              <span className="menu-text">Dashboard</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === 1 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(1)}
          >
            <a href="/">
              <i className="fas fa-user"></i>
              <span className="menu-text">Personal Details</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === 2 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(2)}
          >
            <a href="/">
              <i className="fas fa-file-alt"></i>
              <span className="menu-text">Mid Sem Feedback</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === 3 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(3)}
          >
            <a href="/">
              <i className="fas fa-play"></i>
              <span className="menu-text">Marks & Credit</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === 4 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(4)}
          >
            <a href="/">
              <i className="fas fa-sign-out-alt"></i>
              <span className="menu-text">Attendance</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === 5 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(5)}
          >
            <a href="/">
              <i className="fas fa-sign-out-alt"></i>
              <span className="menu-text">Timetable</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === 6 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(6)}
          >
            <a href="/">
              <i className="fas fa-sign-out-alt"></i>
              <span className="menu-text">Internal Marks</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === 7 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(7)}
          >
            <a href="/">
              <i className="fas fa-sign-out-alt"></i>
              <span className="menu-text">Finance Details</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === 8 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(8)}
          >
            <a href="/">
              <i className="fas fa-sign-out-alt"></i>
              <span className="menu-text">Exam Hall Ticket</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === 9 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(9)}
          >
            <a href="/">
              <i className="fas fa-sign-out-alt"></i>
              <span className="menu-text">Exit</span>
            </a>
          </li>
          <li
            className={`nav-item ${activeNavItem === 10 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(10)}
          >
            <a href="/">
              <i className="fas fa-play"></i>
              <span className="menu-text">Your</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Verticalnavbar;
