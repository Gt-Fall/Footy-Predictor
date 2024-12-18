import supabase from './supabase';
import { useEffect } from 'react';

export default function CupDraw({ setDraw, players }) {
  let tempDraw = [];
  let names = [];
  let position = 0;
  let drawpos = 0;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    players.map((player) => {
      if (player.Player_Id != 'Random P') {
        names[drawpos] = player.Player_Id;
        drawpos++;
      }
    });

    console.log(names);

    for (let i = 17; i >= 0; i--) {
      let randomPosition = getRandomInt(i + 1);
      tempDraw[position] = names[randomPosition];
      names.splice(randomPosition, 1);
      position++;
    }
    console.log('this is the temp draw', tempDraw);

    async function makeDraw() {
      const { data, error } = await supabase
        .from('Cups')
        .insert([{ Cup_Name: 'Winter Cup', Cup_draw: tempDraw }])
        .select();
    }

    // setDraw(tempDraw);
    makeDraw();
  }, [players]);
}
