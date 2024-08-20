import React, { useState, useEffect } from 'react';
import tickIcon from '../img/tickIcon.png';

export default function Login({
  players,
  logedIn,
  setLogedIn,
  setLogedInPlayer,
  setLogedInCode,
}) {
  const [inputName, setInputName] = useState('');
  const [inputCode, setInputCode] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    let theresAMatch = false;

    if (!logedIn) {
      players.map((player) => {
        if (player.Code == inputCode && player.Surname == inputName) {
          setLogedIn(true);
          setLogedInPlayer(player);
          setLogedInCode(player.Code);
          theresAMatch = true;
          alert('Logged In!');
        }
      });
    }
    if (theresAMatch == false) {
      alert('error logging in. Please try again');
    }
  }
  return (
    <>
      <div className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form__input">
            <label htmlFor="loginFormSurname" className="login__form__label">
              Surname:
            </label>
            <input
              className="login__form__surname"
              title="Upper or Lower Case only"
              required
              pattern="[A-Za-z]+"
              id="loginFormSurname"
              onChange={(e) =>
                setInputName(e.target.value.replace(/\s+/g, '').toUpperCase())
              }
            />
          </div>
          <div className="login__form__input">
            <label htmlFor="loginFormCode" className="login__form__label">
              Code:
            </label>
            <input
              className="login__form__code"
              title="Numbers,Upper or Lower Case only"
              pattern="[a-zA-Z0-9]+"
              required
              id="loginFormCode"
              onChange={(e) => setInputCode(e.target.value)}
            />
          </div>
          <div>
            <button className={logedIn ? 'hidden' : 'login__form__btn'}>
              Log In
            </button>
          </div>
          <div>
            <img
              src={tickIcon}
              alt=""
              className={logedIn ? 'login__icon' : 'hidden'}
            />
            <span className={logedIn ? 'Login__text' : 'hidden'}>
              Logged In
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
