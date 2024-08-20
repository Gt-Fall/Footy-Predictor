import navbarLogo from '../img/navbar-logo.png';
import homeIcon from '../img/homeIcon.png';
import scoreIcon from '../img/scoreIcon.png';
import tableIcon from '../img/tableIcon.png';
import predictIcon from '../img/predictIcon.png';
import saveIcon from '../img/saveIcon.png';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [burgerIsClosed, setBurgerIsClosed] = useState(true);

  function burgerHandler() {
    setBurgerIsClosed(!burgerIsClosed);
  }

  return (
    <>
      <div className="navbar">
        <img src={navbarLogo} alt="" className="navbar__logo" />
        <ul className="navbar__links-list">
          <li>
            <Link to="/" className="navbar__links">
              <img src={homeIcon} alt="" className="navbar__icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/results" className="navbar__links">
              <img src={scoreIcon} alt="" className="navbar__icon" />
              Results
            </Link>
          </li>
          <li>
            <Link to="/tables" className="navbar__links">
              <img src={tableIcon} alt="" className="navbar__icon" />
              Tables
            </Link>
          </li>
          <li>
            <Link to="/predictions" className="navbar__links">
              <img src={predictIcon} alt="" className="navbar__icon" />
              Predictions
            </Link>
          </li>
          <li>
            <Link to="/guesses" className="navbar__links">
              <img src={saveIcon} alt="" className="navbar__icon" />
              Set Scores
            </Link>
          </li>
          <div className="navbar__burger_button_container">
            <button className="burger_button" onClick={burgerHandler}>
              <span
                className={
                  burgerIsClosed
                    ? 'burger burger-4'
                    : 'burger burger-4 is-closed'
                }
              ></span>
            </button>
          </div>
        </ul>
      </div>
      <div className={!burgerIsClosed ? 'navbar__hamburger' : 'hidden'}>
        <span className="navbar__hamburger__bar">
          <Link to="/" className="navbar__hamburger__bar__link">
            <img
              src={homeIcon}
              alt=""
              className="navbar__hamburger__bar__icon"
            />
            <span className="navbar__hamburger__bar__link__text">Home</span>
          </Link>
        </span>
        <span className="navbar__hamburger__bar">
          <Link to="/results" className="navbar__hamburger__bar__link">
            <img
              src={scoreIcon}
              alt=""
              className="navbar__hamburger__bar__icon"
            />
            <span className="navbar__hamburger__bar__link__text">Results</span>
          </Link>
        </span>
        <span className="navbar__hamburger__bar">
          <Link to="/tables" className="navbar__hamburger__bar__link">
            <img
              src={tableIcon}
              alt=""
              className="navbar__hamburger__bar__icon"
            />
            <span className="navbar__hamburger__bar__link__text">Tables</span>
          </Link>
        </span>
        <span className="navbar__hamburger__bar">
          <Link to="/predictions" className="navbar__hamburger__bar__link">
            <img
              src={predictIcon}
              alt=""
              className="navbar__hamburger__bar__icon"
            />
            <span className="navbar__hamburger__bar__link__text">
              Predictions
            </span>
          </Link>
        </span>
        <span className="navbar__hamburger__bar">
          <Link to="/guesses" className="navbar__hamburger__bar__link">
            <img
              src={saveIcon}
              alt=""
              className="navbar__hamburger__bar__icon"
            />
            <span className="navbar__hamburger__bar__link__text">
              Set Scores
            </span>
          </Link>
        </span>
      </div>
    </>
  );
}
