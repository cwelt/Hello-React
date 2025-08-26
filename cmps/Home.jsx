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
      <CountDown startFrom={10} />
    </section>
  );
}
