const { useState, useEffect } = React;

import { AnimalList } from './AnimalList.jsx';
import { SeasonClock } from './SeasonClock.jsx';
import { CountDown } from './CountDown.jsx';
import { utilService } from '../services/util.service.js';

const cmp = <SeasonClock />; // <AnimalList />

export function Home() {
  return (
    <section className="home">
      <h2>Home Sweet Home</h2>
      {false && <AnimalList />}
      {false && <SeasonClock />}
      <CountDown
        startFrom={7}
        toTime={Date.now() + 1000 * 3601}
        onDone={el => {
          utilService.animateCSS(el);
          new Audio('../assets/audio/the-final-countdown.mp3').play();
        }}
      />
    </section>
  );
}
