import supabase from './supabase';

export default function RandomSG() {
  let scores = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4,
    5, 6, 7, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2,
    2, 2, 2, 2, 2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3,
  ];
  let monthsAway = [];
  let monthsHome = [];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let w = 0; w < 6; w++) {
    let awayGuesses = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < awayGuesses.length - 1; i++) {
      let randomPosition = getRandomInt(scores.length - 1);

      awayGuesses[i] = scores[randomPosition];
    }
    monthsAway[w] = awayGuesses;
  }

  for (let w = 0; w < 6; w++) {
    let homeGuesses = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < homeGuesses.length - 1; i++) {
      let randomPosition = getRandomInt(scores.length - 1);

      homeGuesses[i] = scores[randomPosition];
    }
    monthsHome[w] = homeGuesses;
  }
  console.log('scores length', scores.length);
  console.log(monthsAway);
  console.log(monthsHome);

  async function sendPredictions() {
    const { data, error } = await supabase
      .from('Players')
      .update({ M1H_Guesses: monthsHome, M1A_Guesses: monthsAway })
      .eq('Surname', 'PERSON')
      .eq('Code', '1234Pass')
      .select();
  }
  sendPredictions();
}
