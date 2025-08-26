const { useState, useEffect } = React;

import { AnimalList } from './AnimalList.jsx';
import { SeasonClock } from './SeasonClock.jsx';
import { CountDown } from './CountDown.jsx';
import { utilService } from '../services/util.service.js';
import { WatcherApp } from './WatcherApp.jsx';

const cmp = <SeasonClock />; // <AnimalList />

export function Home() {
  return (
    <section className="home">
      <h2>Home Sweet Home</h2>
      {false && <AnimalList />}
      {false && <SeasonClock />}
      {false && <CountDown startFrom={3} />}
      <WatcherApp />
    </section>
  );
}
