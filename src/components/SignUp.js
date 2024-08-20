import React, { useState, useEffect } from 'react';
import supabase from './supabase';

export default function SignUp() {
  const [inputFirstName, setInputFirstName] = useState('');
  const [inputSurname, setInputSurname] = useState('');
  const [inputPasscode, setInputPasscode] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [signUpClick, setSignUpClick] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    let playerID = `${inputFirstName} ${Array.from(
      inputSurname
    )[0].toUpperCase()}`;

    let sendSurname = inputSurname.replace(/\s+/g, '').toUpperCase();

    alert(`Sign up Complete! Welcome ${playerID}`);

    async function uploadPlayer() {
      const { data, error } = await supabase.from('Players').insert([
        {
          First_name: inputFirstName,
          Surname: sendSurname,
          Player_Id: playerID,
          Code: inputPasscode,
          Email: inputEmail,
        },
      ]);
    }
    uploadPlayer();
    setSignUpClick(true);
  }

  return (
    <>
      <div className="signUp__welcome">
        <h1>Welcome to F.F.P.</h1>
        <p>
          Hi all and welcome. <br />
          <br />
          F.F.P. is a regular season score predictor. Every week 7 games are
          selected from across the Scottish and English leauges, as well as 1
          wildcard from Europe. <br />
          Your job is to predict as may scoreline right as possible. <br />
          <br />
          You can predicts next months scores at anytime up to the deadline in
          the "Set Scores" section. You can change your mind as many times as
          you like up to the deadline and your currenet guesses will be
          displayed. <br />
          <br />
          Want to see how your doing? Checkout the "Tables" page to see your
          weekly, monthly and overall position. But I cant remember my
          predictions?? Head over to the "Predictions" page, login and the
          current game months predictions will be show. Check out the rules for
          scoring below, and sign up if you would like to play.
          <br />
          <br />
          This is a project to help keep my (Graeme) coding skills sharp and
          show employers what I can do, there is no fee to pay, I just ask you
          submit your predictions every month.
        </p>
      </div>
      <div className="signUp__signUpInfo">
        <h1>Sign up</h1>
        <p>
          Before you can submit score predictions you need to set up a player
          profile. <br />
          All thats needed is your first name, surname and a passcode entred in
          the boxes below.
          <br />
          If you add your email you will get reminders of deadlines and a weekly
          round up of the results.
          <br /> Your first name and the first letter of your surname make up
          your Screen Name. Your surname will be used to login, to submit or
          recall predictions.
          <br />
          **Please do not use passwords that you use for other websites or
          accounts.** <br /> A pets name or and simple code should be enough.
          Your passcode isnt really a password its more a reference so that the
          app doesn't display everyones predictions when recalling yours.
        </p>
        <div className={signUpClick ? 'hidden' : 'home_signUp__form'}>
          <form className="signUp__form" onSubmit={handleSubmit}>
            <label htmlFor="firstname" className="signUp__form__label">
              First Name:
            </label>
            <input
              className="signUp__form__firstName signUp__form__input"
              id="firstname"
              title="Upper or Lower Case only"
              required
              pattern="[A-Za-z]+"
              onChange={(e) => setInputFirstName(e.target.value)}
            />
            <label htmlFor="surname" className="signUp__form__label">
              Surname:
            </label>
            <input
              className="signUp__form__surname signUp__form__input"
              id="surname"
              title="Upper or Lower Case only"
              required
              pattern="[A-Za-z]+"
              onChange={(e) => setInputSurname(e.target.value)}
            />
            <label htmlFor="passcode" className="signUp__form__label">
              Code:
            </label>
            <input
              className="signUp__form__code signUp__form__input"
              id="passcode"
              title="Numbers,Upper or Lower Case only"
              pattern="[a-zA-Z0-9]+"
              required
              onChange={(e) => setInputPasscode(e.target.value)}
            />
            <label htmlFor="email" className="signUp__form__label">
              Email:
            </label>
            <input
              className="signUp__form__code signUp__form__input"
              title="Must have @ and characters after . As in name@domain.co"
              id="email"
              pattern="([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$)|(^$)"
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <button className={'signUp__form__btn'}>Sign Up</button>
          </form>
        </div>
      </div>
      <div className={!signUpClick ? 'hidden' : 'signUp__sucessful'}>
        <h1>Sign Up Sucessful!!</h1>
      </div>
      <h1 className="rulesHeading">Scoring Rules</h1>
      <div className="section-rules">
        <div className="section-rules__left">
          <h3 className="smaller-heading">The Rules</h3>
          <p className="section-rules__text">
            The following points are awarded on each match: <br /> <br />+ 1
            point for the correct match outcome (winning team/draw) <br />+ 1
            point for each teams match goals predicted correctly
            <br />+ 2 points if you get the scoreline correct <br />
          </p>
        </div>
        <div className="section-rules__right">
          <h3 className="smaller-heading">Examples</h3>
          <p className="section-rules__text">
            You predict Home 1 Away 0 <br />
            <br />- Actual score: Home 3 Away 2 = 1 point for outcome of match.
            <br />- Actual socre: Home 1 Away 1 = 1 point for correct home team
            goals.
            <br />- Actual socre: Home 3 Away 0 = 2 points - 1 for correct away
            team goals and 1 for correct outcome.
            <br />
            - Actual score: Home 1 Away 0 = 5 points (max) - 1 for outcome, 1
            for home goals, 1 for away goals and 2 for correct result. <br />
          </p>
        </div>
      </div>
    </>
  );
}
