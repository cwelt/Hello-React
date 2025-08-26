const { useState, useEffect } = React;

import { AnimalList } from './AnimalList.jsx';
import { SeasonClock } from './SeasonClock.jsx';
import { CountDown } from './CountDown.jsx';
import { utilService } from '../services/util.service.js';
import { WatcherApp } from './WatcherApp.jsx';

export function Home() {
  return (
    <section className="home">
      <h1>Home Sweet Home</h1>
      <h2>Welcome to the home page!</h2>
      <p>Use navigation bar to navigate between the different components.</p>
    </section>
  );
}
