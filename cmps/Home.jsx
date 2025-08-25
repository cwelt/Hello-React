const { useState, useEffect } = React;

import { AnimalList } from './AnimalList.jsx';
import { SeasonClock } from './SeasonClock.jsx';

const cmp = <SeasonClock />; // <AnimalList />

export function Home() {
  return (
    <section className="home">
      <h2>Home Sweet Home</h2>
      {cmp}
    </section>
  );
}
