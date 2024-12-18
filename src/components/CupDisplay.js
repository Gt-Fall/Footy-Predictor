import { useEffect, useState } from 'react';
import supabase from './supabase';

import CupMatch from '../components/CupMatch';

export default function CupDisplay({ players }) {
  const [cupDraw, setCupDraw] = useState([]);

  useEffect(function () {
    async function getDraw() {
      const { data: players, error } = await supabase
        .from('Cups')
        .select('Cup_draw')
        .eq('Cup_Name', 'Winter Cup');
      setCupDraw(players[0].Cup_draw);
    }
    getDraw();
  }, []);

  return (
    <>
      <div className="cup__round-block">
        <div className="cup__round">
          <h2 className="cup__round__heading">Round 1 </h2>
          <h3 className="cup__round__info">
            A: 😇 Southampton vs 🍬 Everton : 1 - 0 <br /> B: 🐼 St. Mirren vs
            🦌 Ross County : 0 - 0
          </h3>
          <CupMatch
            matchNum={1}
            guessIndex={0}
            players={players}
            homePlayer={cupDraw[0]}
            awayPlayer={cupDraw[1]}
            winner={'Ian H (0-2)'}
          />
          <CupMatch
            matchNum={2}
            guessIndex={0}
            players={players}
            homePlayer={cupDraw[2]}
            awayPlayer={cupDraw[3]}
            winner={'Steve B - (2-2, 20 Corners)'}
          />
        </div>

        <div className="cup__round-block">
          <div className="cup__round">
            <h2 className="cup__round__heading">Round 2 </h2>
            <h3 className="cup__round__info">
              {' '}
              A: ̼ Brighton vs 🌙 Man City : 2-1 <br /> B: 🐻 Rangers vs ❤ Hearts
              : 1-0
            </h3>
            <CupMatch
              matchNum={3}
              guessIndex={2}
              players={players}
              homePlayer={cupDraw[1]}
              awayPlayer={cupDraw[4]}
              winner={'Graeme F - (1-1, 16 Corners)'}
            />
            <CupMatch
              matchNum={4}
              guessIndex={2}
              players={players}
              homePlayer={cupDraw[2]}
              awayPlayer={cupDraw[5]}
              winner={'Steve R - (1-2)'}
            />

            <CupMatch
              matchNum={5}
              guessIndex={2}
              players={players}
              homePlayer={cupDraw[6]}
              awayPlayer={cupDraw[7]}
              winner={'Ruth D - (0-1)'}
            />

            <CupMatch
              matchNum={6}
              guessIndex={2}
              players={players}
              homePlayer={cupDraw[8]}
              awayPlayer={cupDraw[9]}
              winner={'Gordon S - (2-1)'}
            />

            <CupMatch
              matchNum={7}
              guessIndex={2}
              players={players}
              homePlayer={cupDraw[10]}
              awayPlayer={cupDraw[11]}
              winner={'Andy B - (1-0)'}
            />

            <CupMatch
              matchNum={8}
              guessIndex={2}
              players={players}
              homePlayer={cupDraw[12]}
              awayPlayer={cupDraw[13]}
              winner={'Andy M - (1-2)'}
            />

            <CupMatch
              matchNum={9}
              guessIndex={2}
              players={players}
              homePlayer={cupDraw[14]}
              awayPlayer={cupDraw[15]}
              winner={'Andy P - (2-2, 19 Corners)'}
            />

            <CupMatch
              matchNum={10}
              guessIndex={2}
              players={players}
              homePlayer={cupDraw[16]}
              awayPlayer={cupDraw[17]}
              winner={'Chris G - (1-1, 18 Corners)'}
            />
          </div>

          <div className="cup__round">
            <h2 className="cup__round__heading">Quater Final </h2>
            <h3 className="cup__round__info">
              {' '}
              A: 🇲🇰 N. Macedonia vs 🇫🇴 Faroe Islands : 1-0 <br /> B: 🇵🇱 Poland
              vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland : 1-2 <br /> Total Corners: 16
            </h3>
            <CupMatch
              matchNum={11}
              guessIndex={4}
              players={players}
              homePlayer={cupDraw[4]}
              awayPlayer={cupDraw[5]}
              winner={'Steve R - (2-2, 17 Corners)'}
            />
            <CupMatch
              matchNum={12}
              guessIndex={4}
              players={players}
              homePlayer={cupDraw[7]}
              awayPlayer={cupDraw[8]}
              winner={'Gordon S - (1-2)'}
            />

            <CupMatch
              matchNum={13}
              guessIndex={4}
              players={players}
              homePlayer={cupDraw[10]}
              awayPlayer={cupDraw[13]}
              winner={'Andy B - (3-2)'}
            />

            <CupMatch
              matchNum={14}
              guessIndex={4}
              players={players}
              homePlayer={cupDraw[14]}
              awayPlayer={cupDraw[16]}
              winner={'Chris G - (2-2 , 21 Corners)'}
            />
          </div>
          <div className="cup__round">
            <h2 className="cup__round__heading">Semi Final </h2>
            <h3 className="cup__round__info">
              A: 🥧 Dundee vs 🔦 Hibernian : 4-1 <br /> B: 🐴 Ipswich Town vs 👹
              Man Utd : 1-1
            </h3>
            <CupMatch
              matchNum={15}
              guessIndex={6}
              players={players}
              homePlayer={cupDraw[5]}
              awayPlayer={cupDraw[8]}
              winner={'Steve R - (7-2)'}
            />
            <CupMatch
              matchNum={16}
              guessIndex={6}
              players={players}
              homePlayer={cupDraw[10]}
              awayPlayer={cupDraw[16]}
              winner={'Chris G - (0-1)'}
            />
          </div>
          <div className="cup__round">
            <h2 className="cup__round__heading">Final </h2>
            <h3 className="cup__round__info">
              {' '}
              A: 🐺 Wolves vs 🚢 Bournemouth : 2-4 <br /> B: 🍊 Dundee Utd vs 🐼
              St. Mirren : 2-0
            </h3>
            <CupMatch
              matchNum={17}
              guessIndex={8}
              players={players}
              homePlayer={cupDraw[5]}
              awayPlayer={cupDraw[16]}
              winner={'Steve R - (3-0))'}
            />
          </div>
        </div>
      </div>
    </>
  );
}
